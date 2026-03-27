# Data Export Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add working data export for SQL tables (CSV/JSON/SQL/Excel), full database export as zip, and chart PNG export from dashboard widgets.

**Architecture:** All exports are client-side. Table/database exports fetch data via `RawExecute` GraphQL query, format in-browser, and trigger download. Chart export converts ECharts SVG output to PNG via offscreen canvas. Database export zips per-table files using JSZip.

**Tech Stack:** React 19, TypeScript, `xlsx` 0.18.5 (already installed), JSZip (new), ECharts SVG→Canvas→PNG

**Spec:** `docs/superpowers/specs/2026-03-27-data-export-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `src/lib/export-utils.ts` | Create | Format conversion (CSV/JSON/SQL/Excel) + download trigger + SVG→PNG helper |
| `src/components/database/sql/ExportDataModal.tsx` | Rewrite | Table data export modal — uses RawExecute + export-utils |
| `src/components/database/ExportDatabaseModal.tsx` | Rewrite | Database export modal — multi-table RawExecute + JSZip |
| `src/components/ui/NativeECharts.tsx` | Edit | Add ref prop + useImperativeHandle for exportPNG |
| `src/components/ui/SafeECharts.tsx` | Edit | Pass through ref prop |
| `src/components/analysis/DashboardWidget.tsx` | Edit | Add chart ref + "导出 PNG" menu item |
| `src/components/layout/sidebar/useSidebarModals.ts` | Edit | Add `schema` to `export_database` modal params |
| `src/components/layout/Sidebar.tsx` | Edit | Pass `schema` when opening ExportDatabaseModal |
| `src/components/layout/sidebar/contextMenuItems.ts` | Edit | Remove "Export Database" from MongoDB context menu |

---

## Task 1: Install JSZip dependency

**Files:**
- Modify: `dataflow/package.json`

- [ ] **Step 1: Install jszip**

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && pnpm add jszip
```

- [ ] **Step 2: Verify installation**

JSZip ships its own TypeScript definitions — no `@types/jszip` needed.

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && node -e "import('jszip').then(() => console.log('OK'))"
```

Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add dataflow/package.json dataflow/pnpm-lock.yaml
git commit -m "chore(dataflow): add jszip dependency for database export"
```

---

## Task 2: Create shared export utility

**Files:**
- Create: `dataflow/src/lib/export-utils.ts`

- [ ] **Step 1: Create export-utils.ts with all format functions and download helper**

Create `dataflow/src/lib/export-utils.ts`:

```typescript
import * as XLSX from 'xlsx';

/**
 * Triggers a browser file download from a Blob.
 */
export function downloadBlob(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Converts query result columns + rows to a CSV Blob (RFC 4180).
 */
export function toCSV(
    columns: Array<{ Name: string }>,
    rows: string[][]
): Blob {
    const escapeField = (field: string): string => {
        if (field.includes(',') || field.includes('"') || field.includes('\n') || field.includes('\r')) {
            return '"' + field.replace(/"/g, '""') + '"';
        }
        return field;
    };

    const header = columns.map(c => escapeField(c.Name)).join(',');
    const dataLines = rows.map(row => row.map(escapeField).join(','));
    const csv = [header, ...dataLines].join('\r\n');
    return new Blob([csv], { type: 'text/csv;charset=utf-8' });
}

/**
 * Converts query result columns + rows to a JSON Blob.
 * Output: array of objects [{col1: val1, col2: val2}, ...]
 */
export function toJSON(
    columns: Array<{ Name: string }>,
    rows: string[][]
): Blob {
    const objects = rows.map(row => {
        const obj: Record<string, string> = {};
        columns.forEach((col, i) => {
            obj[col.Name] = row[i];
        });
        return obj;
    });
    const json = JSON.stringify(objects, null, 2);
    return new Blob([json], { type: 'application/json;charset=utf-8' });
}

/**
 * Converts query result columns + rows to SQL INSERT statements.
 * Value quoting heuristic: NULL string → NULL keyword,
 * finite number → unquoted, otherwise → single-quoted with escaping.
 */
export function toSQL(
    tableName: string,
    columns: Array<{ Name: string }>,
    rows: string[][]
): Blob {
    const colNames = columns.map(c => c.Name).join(', ');
    const lines = rows.map(row => {
        const values = row.map(val => {
            if (val === null || val === undefined || val === 'NULL') return 'NULL';
            if (val === '') return "''";
            const num = Number(val);
            if (Number.isFinite(num)) return val;
            return "'" + val.replace(/'/g, "''") + "'";
        });
        return `INSERT INTO ${tableName} (${colNames}) VALUES (${values.join(', ')});`;
    });
    const sql = lines.join('\n');
    return new Blob([sql], { type: 'text/sql;charset=utf-8' });
}

/**
 * Converts query result columns + rows to an Excel (.xlsx) Blob.
 */
export function toExcel(
    sheetName: string,
    columns: Array<{ Name: string }>,
    rows: string[][]
): Blob {
    const header = columns.map(c => c.Name);
    const data = [header, ...rows];
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName.slice(0, 31)); // Excel sheet name max 31 chars
    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    return new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}

/**
 * Converts an SVG data URL to a PNG Blob via offscreen canvas.
 */
export function svgDataURLToPNG(
    svgDataURL: string,
    width: number,
    height: number,
    pixelRatio: number = 2
): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = width * pixelRatio;
            canvas.height = height * pixelRatio;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Failed to get canvas 2d context'));
                return;
            }
            ctx.scale(pixelRatio, pixelRatio);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            canvas.toBlob(blob => {
                if (blob) resolve(blob);
                else reject(new Error('Failed to convert canvas to PNG blob'));
            }, 'image/png');
        };
        img.onerror = () => reject(new Error('Failed to load SVG image'));
        img.src = svgDataURL;
    });
}
```

- [ ] **Step 2: Verify typecheck passes**

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && pnpm run typecheck
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add dataflow/src/lib/export-utils.ts
git commit -m "feat(dataflow): add shared export utility for CSV/JSON/SQL/Excel/PNG"
```

---

## Task 3: Rewrite ExportDataModal (table data export)

**Files:**
- Rewrite: `dataflow/src/components/database/sql/ExportDataModal.tsx`

- [ ] **Step 1: Rewrite ExportDataModal to use RawExecute + export-utils**

Replace the entire contents of `dataflow/src/components/database/sql/ExportDataModal.tsx`:

```typescript
import React, { useState, useEffect } from "react";
import { X, Download, FileJson, FileSpreadsheet, FileCode, FileText, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRawExecuteLazyQuery } from "@/generated/graphql";
import { toCSV, toJSON, toSQL, toExcel, downloadBlob } from "@/lib/export-utils";

interface ExportDataModalProps {
    isOpen: boolean;
    onClose: () => void;
    connectionId: string;
    databaseName: string;
    schema?: string | null;
    tableName: string;
}

type ExportFormat = 'csv' | 'json' | 'sql' | 'excel';

const FORMAT_OPTIONS = [
    { id: 'csv' as const, label: 'CSV', icon: FileText },
    { id: 'json' as const, label: 'JSON', icon: FileJson },
    { id: 'sql' as const, label: 'SQL', icon: FileCode },
    { id: 'excel' as const, label: 'Excel', icon: FileSpreadsheet },
];

const FORMAT_EXTENSIONS: Record<ExportFormat, string> = {
    csv: 'csv',
    json: 'json',
    sql: 'sql',
    excel: 'xlsx',
};

export function ExportDataModal({
    isOpen,
    onClose,
    connectionId,
    databaseName,
    schema,
    tableName
}: ExportDataModalProps) {
    const [format, setFormat] = useState<ExportFormat>('csv');
    const [rowCount, setRowCount] = useState<number | ''>(1000);
    const [filter, setFilter] = useState("");
    const [isExporting, setIsExporting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [executeQuery] = useRawExecuteLazyQuery({ fetchPolicy: 'no-cache' });

    useEffect(() => {
        if (isOpen) {
            setFormat('csv');
            setRowCount(1000);
            setFilter("");
            setIsExporting(false);
            setIsSuccess(false);
            setErrorMessage(null);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleExport = async () => {
        setIsExporting(true);
        setIsSuccess(false);
        setErrorMessage(null);

        try {
            const qualifiedName = schema ? `${schema}.${tableName}` : tableName;
            let query = `SELECT * FROM ${qualifiedName}`;
            if (filter.trim()) query += ` WHERE ${filter.trim()}`;
            if (rowCount !== '') query += ` LIMIT ${rowCount}`;

            const { data, error } = await executeQuery({ variables: { query } });

            if (error) throw new Error(error.message);
            if (!data?.RawExecute) throw new Error('No data returned from query');

            const { Columns, Rows } = data.RawExecute;
            let blob: Blob;

            switch (format) {
                case 'csv':
                    blob = toCSV(Columns, Rows);
                    break;
                case 'json':
                    blob = toJSON(Columns, Rows);
                    break;
                case 'sql':
                    blob = toSQL(qualifiedName, Columns, Rows);
                    break;
                case 'excel':
                    blob = toExcel(tableName, Columns, Rows);
                    break;
            }

            downloadBlob(blob, `${tableName}.${FORMAT_EXTENSIONS[format]}`);
            setIsSuccess(true);
        } catch (err: any) {
            setErrorMessage(err.message || 'Export failed');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-[500px] bg-background border rounded-lg shadow-lg flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <div>
                        <h2 className="text-lg font-semibold">Export Data</h2>
                        <p className="text-sm text-muted-foreground">
                            {schema ? `${databaseName}.${schema}.${tableName}` : `${databaseName}.${tableName}`}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 hover:bg-muted transition-colors"
                        disabled={isExporting}
                    >
                        <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 overflow-y-auto">
                    {/* Format Selection */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium">Export Format</label>
                        <div className="grid grid-cols-4 gap-3">
                            {FORMAT_OPTIONS.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => setFormat(option.id)}
                                    disabled={isExporting}
                                    className={cn(
                                        "flex flex-col items-center justify-center p-3 rounded-md border transition-all",
                                        format === option.id
                                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                                            : "hover:border-primary/50 hover:bg-muted/50"
                                    )}
                                >
                                    <option.icon className={cn(
                                        "h-6 w-6 mb-2",
                                        format === option.id ? "text-primary" : "text-muted-foreground"
                                    )} />
                                    <span className="text-xs font-medium">{option.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Row Count */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium">Row Limit</label>
                        <input
                            type="number"
                            value={rowCount}
                            onChange={(e) => setRowCount(e.target.value === '' ? '' : parseInt(e.target.value))}
                            placeholder="Leave empty for all rows"
                            disabled={isExporting}
                            className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                        <p className="text-xs text-muted-foreground">
                            Leave empty to export all rows (warning: large tables may take time)
                        </p>
                    </div>

                    {/* Filter */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium">Filter Data (Optional)</label>
                        <textarea
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            placeholder="Enter SQL WHERE clause (e.g., id > 100 AND status = 'active')"
                            disabled={isExporting}
                            className="w-full h-24 px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none font-mono"
                        />
                    </div>

                    {/* Status */}
                    {(isExporting || isSuccess || errorMessage) && (
                        <div className="space-y-2 pt-2">
                            <div className="flex items-center gap-2 text-sm">
                                {isExporting && (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                                        <span className="text-muted-foreground">Exporting...</span>
                                    </>
                                )}
                                {isSuccess && (
                                    <span className="text-green-600 font-medium">Export complete! File downloaded.</span>
                                )}
                                {errorMessage && (
                                    <span className="text-red-600">{errorMessage}</span>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t bg-muted/20 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        disabled={isExporting}
                        className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                    >
                        {isSuccess ? 'Close' : 'Cancel'}
                    </button>
                    {!isSuccess && (
                        <button
                            onClick={handleExport}
                            disabled={isExporting}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isExporting ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Exporting...
                                </>
                            ) : (
                                <>
                                    <Download className="h-4 w-4" />
                                    Start Export
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
```

- [ ] **Step 2: Verify typecheck passes**

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && pnpm run typecheck
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add dataflow/src/components/database/sql/ExportDataModal.tsx
git commit -m "feat(dataflow): rewrite ExportDataModal to use RawExecute GraphQL"
```

---

## Task 4: Update sidebar modal wiring for schema prop

**Files:**
- Modify: `dataflow/src/components/layout/sidebar/useSidebarModals.ts`
- Modify: `dataflow/src/components/layout/Sidebar.tsx`
- Modify: `dataflow/src/components/layout/sidebar/contextMenuItems.ts`

- [ ] **Step 1: Remove "Export Database" menu item for MongoDB in contextMenuItems.ts**

The rewritten ExportDatabaseModal uses SQL queries (`SELECT * FROM ...`) which won't work for MongoDB. MongoDB already has collection-level export via `ExportCollectionModal`. In `dataflow/src/components/layout/sidebar/contextMenuItems.ts`, remove the `export_database` item from the MongoDB branch:

```typescript
// Change (line 84-90):
...(connectionType === "MONGODB"
  ? [
      { label: "New Collection", onClick: () => onAction("new_collection"), icon: React.createElement(Plus, { className: "h-4 w-4" }) },
      { separator: true },
      { label: "Export Database", onClick: () => onAction("export_database"), icon: React.createElement(Download, { className: "h-4 w-4" }) },
      { separator: true },
    ] as ContextMenuItem[]
// To:
...(connectionType === "MONGODB"
  ? [
      { label: "New Collection", onClick: () => onAction("new_collection"), icon: React.createElement(Plus, { className: "h-4 w-4" }) },
      { separator: true },
    ] as ContextMenuItem[]
```

- [ ] **Step 2: Add `schema` to the `export_database` modal type in useSidebarModals.ts**

In `dataflow/src/components/layout/sidebar/useSidebarModals.ts`, find the `export_database` type in the `ModalState` union and add `schema: string`:

```typescript
// Change:
| { type: "export_database"; params: { connectionId: string; databaseName: string } }
// To:
| { type: "export_database"; params: { connectionId: string; databaseName: string; schema: string } }
```

- [ ] **Step 3: Pass schema when opening ExportDatabaseModal in Sidebar.tsx**

In `dataflow/src/components/layout/Sidebar.tsx`, find the `case "export_database":` handler. Update the `openModal` call to include schema. The export action fires on database nodes, so derive schema from database type:

```typescript
// Change:
case "export_database":
  openModal({
    type: "export_database",
    params: { connectionId: node.connectionId, databaseName: node.name },
  });
  break;
// To:
case "export_database": {
  const conn = connections.find(c => c.id === node.connectionId);
  const dbType = conn?.type ?? '';
  const schema = dbType === 'POSTGRES' ? 'public' : dbType === 'MYSQL' || dbType === 'CLICKHOUSE' ? node.name : '';
  openModal({
    type: "export_database",
    params: { connectionId: node.connectionId, databaseName: node.name, schema },
  });
  break;
}
```

- [ ] **Step 4: Pass schema prop when rendering ExportDatabaseModal**

In `dataflow/src/components/layout/Sidebar.tsx`, find where `ExportDatabaseModal` is rendered. Add `schema={p.schema}`:

```typescript
// Change:
<ExportDatabaseModal
  isOpen
  onClose={closeModal}
  connectionId={p.connectionId}
  databaseName={p.databaseName}
/>
// To:
<ExportDatabaseModal
  isOpen
  onClose={closeModal}
  connectionId={p.connectionId}
  databaseName={p.databaseName}
  schema={p.schema}
/>
```

- [ ] **Step 5: Verify typecheck passes**

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && pnpm run typecheck
```

Expected: errors about ExportDatabaseModal not accepting `schema` — this is expected, will be fixed in Task 5.

- [ ] **Step 6: Commit (with Task 5)**

Commit together with Task 5 since typecheck won't pass until both are done.

---

## Task 5: Rewrite ExportDatabaseModal (database export with zip)

**Files:**
- Rewrite: `dataflow/src/components/database/ExportDatabaseModal.tsx`

- [ ] **Step 1: Rewrite ExportDatabaseModal to use RawExecute + GetStorageUnits + JSZip**

Replace the entire contents of `dataflow/src/components/database/ExportDatabaseModal.tsx`:

```typescript
import React, { useState, useEffect } from "react";
import { X, Download, FileJson, FileSpreadsheet, FileCode, FileText, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRawExecuteLazyQuery, useGetStorageUnitsLazyQuery } from "@/generated/graphql";
import { toCSV, toJSON, toSQL, toExcel, downloadBlob } from "@/lib/export-utils";
import JSZip from "jszip";

interface ExportDatabaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    connectionId: string;
    databaseName: string;
    schema: string;
}

type ExportFormat = 'csv' | 'json' | 'sql' | 'excel';

const FORMAT_OPTIONS = [
    { id: 'sql' as const, label: 'SQL', icon: FileCode },
    { id: 'json' as const, label: 'JSON', icon: FileJson },
    { id: 'csv' as const, label: 'CSV', icon: FileText },
    { id: 'excel' as const, label: 'Excel', icon: FileSpreadsheet },
];

const FORMAT_EXTENSIONS: Record<ExportFormat, string> = {
    csv: 'csv',
    json: 'json',
    sql: 'sql',
    excel: 'xlsx',
};

export function ExportDatabaseModal({
    isOpen,
    onClose,
    connectionId,
    databaseName,
    schema
}: ExportDatabaseModalProps) {
    const [format, setFormat] = useState<ExportFormat>('sql');
    const [isExporting, setIsExporting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [progressText, setProgressText] = useState("");
    const [progressPercent, setProgressPercent] = useState(0);

    const [fetchTables] = useGetStorageUnitsLazyQuery({ fetchPolicy: 'no-cache' });
    const [executeQuery] = useRawExecuteLazyQuery({ fetchPolicy: 'no-cache' });

    useEffect(() => {
        if (isOpen) {
            setFormat('sql');
            setIsExporting(false);
            setIsSuccess(false);
            setErrorMessage(null);
            setProgressText("");
            setProgressPercent(0);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleExport = async () => {
        setIsExporting(true);
        setIsSuccess(false);
        setErrorMessage(null);
        setProgressText("Fetching table list...");
        setProgressPercent(0);

        try {
            const { data: tablesData, error: tablesError } = await fetchTables({
                variables: { schema },
            });

            if (tablesError) throw new Error(tablesError.message);
            const tables = tablesData?.StorageUnit ?? [];
            if (tables.length === 0) throw new Error('No tables found in database');

            const zip = new JSZip();
            const failedTables: string[] = [];

            for (let i = 0; i < tables.length; i++) {
                const table = tables[i];
                const tableName = table.Name;
                setProgressText(`Exporting table ${i + 1} of ${tables.length}... (${tableName})`);
                setProgressPercent(Math.round((i / tables.length) * 100));

                try {
                    const qualifiedName = schema ? `${schema}.${tableName}` : tableName;
                    const { data, error } = await executeQuery({
                        variables: { query: `SELECT * FROM ${qualifiedName}` },
                    });

                    if (error || !data?.RawExecute) {
                        failedTables.push(tableName);
                        continue;
                    }

                    const { Columns, Rows } = data.RawExecute;
                    let blob: Blob;

                    switch (format) {
                        case 'csv':
                            blob = toCSV(Columns, Rows);
                            break;
                        case 'json':
                            blob = toJSON(Columns, Rows);
                            break;
                        case 'sql':
                            blob = toSQL(qualifiedName, Columns, Rows);
                            break;
                        case 'excel':
                            blob = toExcel(tableName, Columns, Rows);
                            break;
                    }

                    zip.file(`${tableName}.${FORMAT_EXTENSIONS[format]}`, blob);
                } catch {
                    failedTables.push(tableName);
                }
            }

            setProgressText("Generating zip file...");
            setProgressPercent(95);

            const zipBlob = await zip.generateAsync({ type: 'blob' });
            downloadBlob(zipBlob, `export_${databaseName}.zip`);

            setProgressPercent(100);
            setIsSuccess(true);

            if (failedTables.length > 0) {
                setErrorMessage(
                    `Exported ${tables.length - failedTables.length} of ${tables.length} tables. Failed: ${failedTables.join(', ')}`
                );
            }
        } catch (err: any) {
            setErrorMessage(err.message || 'Export failed');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-[500px] bg-background border rounded-lg shadow-lg flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <div>
                        <h2 className="text-lg font-semibold">Export Database</h2>
                        <p className="text-sm text-muted-foreground">{databaseName}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 hover:bg-muted transition-colors"
                        disabled={isExporting}
                    >
                        <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 overflow-y-auto">
                    {/* Format Selection */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium">Export Format</label>
                        <div className="grid grid-cols-4 gap-3">
                            {FORMAT_OPTIONS.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => setFormat(option.id)}
                                    disabled={isExporting}
                                    className={cn(
                                        "flex flex-col items-center justify-center p-3 rounded-md border transition-all",
                                        format === option.id
                                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                                            : "hover:border-primary/50 hover:bg-muted/50"
                                    )}
                                >
                                    <option.icon className={cn(
                                        "h-6 w-6 mb-2",
                                        format === option.id ? "text-primary" : "text-muted-foreground"
                                    )} />
                                    <span className="text-xs font-medium">{option.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Progress */}
                    {(isExporting || isSuccess || errorMessage) && (
                        <div className="space-y-2 pt-2">
                            <div className="flex justify-between text-sm">
                                <span className={cn(
                                    "text-muted-foreground",
                                    errorMessage && !isSuccess && "text-red-600"
                                )}>
                                    {isSuccess ? "Export complete!" : isExporting ? progressText : "Export failed"}
                                </span>
                                {(isExporting || isSuccess) && <span className="font-medium">{progressPercent}%</span>}
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                    className={cn(
                                        "h-full transition-all duration-300 ease-out",
                                        errorMessage && !isSuccess
                                            ? "bg-red-500"
                                            : isSuccess
                                                ? "bg-green-500"
                                                : "bg-primary"
                                    )}
                                    style={{ width: `${errorMessage && !isSuccess ? 100 : progressPercent}%` }}
                                />
                            </div>
                            {errorMessage && (
                                <p className={cn(
                                    "text-sm mt-1",
                                    isSuccess ? "text-amber-600" : "text-red-600"
                                )}>
                                    {errorMessage}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t bg-muted/20 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        disabled={isExporting}
                        className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                    >
                        {isSuccess ? 'Close' : 'Cancel'}
                    </button>
                    {!isSuccess && (
                        <button
                            onClick={handleExport}
                            disabled={isExporting}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isExporting ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Exporting...
                                </>
                            ) : (
                                <>
                                    <Download className="h-4 w-4" />
                                    Start Export
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
```

- [ ] **Step 2: Verify typecheck passes**

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && pnpm run typecheck
```

Expected: no errors (Tasks 4 + 5 together satisfy the schema prop requirement)

- [ ] **Step 3: Commit Tasks 4 + 5 together**

```bash
git add dataflow/src/components/database/ExportDatabaseModal.tsx dataflow/src/components/layout/sidebar/useSidebarModals.ts dataflow/src/components/layout/Sidebar.tsx dataflow/src/components/layout/sidebar/contextMenuItems.ts
git commit -m "feat(dataflow): rewrite ExportDatabaseModal with multi-table zip export"
```

---

## Task 6: Add ref support to NativeECharts + SafeECharts

**Files:**
- Modify: `dataflow/src/components/ui/NativeECharts.tsx`
- Modify: `dataflow/src/components/ui/SafeECharts.tsx`

- [ ] **Step 1: Add ref + useImperativeHandle to NativeECharts**

In `dataflow/src/components/ui/NativeECharts.tsx`:

1. Add `useImperativeHandle` to the imports from 'react'
2. Export the `NativeEChartsHandle` interface
3. Add `ref` to the props interface
4. Add `useImperativeHandle` inside the component

Add the interface and update the props:

```typescript
// Add to imports:
import React, { useRef, useEffect, useState, memo, useCallback, useImperativeHandle } from 'react';

// Add export interface before the component:
export interface NativeEChartsHandle {
    exportPNG: (pixelRatio?: number) => Promise<Blob | null>;
}

// Update props interface:
interface NativeEChartsProps {
    option: any;
    style?: React.CSSProperties;
    className?: string;
    ref?: React.Ref<NativeEChartsHandle>;
}
```

Add `useImperativeHandle` inside the component body, after the `observerRef` declaration (line 41) and before the initialization `useEffect`:

```typescript
    useImperativeHandle(ref, () => ({
        exportPNG: async (pixelRatio = 2) => {
            const chart = chartRef.current;
            const container = containerRef.current;
            if (!chart || chart.isDisposed() || !container) return null;

            const svgDataURL = chart.getDataURL({ type: 'svg' });
            const width = container.clientWidth;
            const height = container.clientHeight;

            const { svgDataURLToPNG } = await import('@/lib/export-utils');
            return svgDataURLToPNG(svgDataURL, width, height, pixelRatio);
        },
    }));
```

Update the component signature to accept `ref`:

```typescript
// Change:
export const NativeECharts = memo(function NativeECharts({ option, style, className }: NativeEChartsProps) {
// To:
export const NativeECharts = memo(function NativeECharts({ option, style, className, ref }: NativeEChartsProps) {
```

- [ ] **Step 2: Update SafeECharts to re-export with proper types**

Replace `dataflow/src/components/ui/SafeECharts.tsx`:

```typescript
// Re-export NativeECharts as SafeECharts for backward compatibility
export { NativeECharts as SafeECharts } from './NativeECharts';
export type { NativeEChartsHandle } from './NativeECharts';
```

- [ ] **Step 3: Verify typecheck passes**

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && pnpm run typecheck
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add dataflow/src/components/ui/NativeECharts.tsx dataflow/src/components/ui/SafeECharts.tsx
git commit -m "feat(dataflow): add ref support to NativeECharts for PNG export"
```

---

## Task 7: Add chart PNG export to DashboardWidget

**Files:**
- Modify: `dataflow/src/components/analysis/DashboardWidget.tsx`

- [ ] **Step 1: Add chart ref and export menu item**

In `dataflow/src/components/analysis/DashboardWidget.tsx`:

1. Add `useRef` to imports (already imported)
2. Import `ImageDown` from lucide-react
3. Import `NativeEChartsHandle` from SafeECharts
4. Import `downloadBlob` from export-utils
5. Add a chart ref
6. Add the export menu item (for chart widgets only)
7. Pass ref to SafeECharts in WidgetContent

Update imports:

```typescript
import React, { useState, useRef, useEffect } from "react";
import { DashboardComponent, useAnalysisStore } from "@/stores/useAnalysisStore";
import { cn } from "@/lib/utils";
import { MoreHorizontal, Trash2, Maximize2, Settings, ImageDown } from "lucide-react";
import { SafeECharts, NativeEChartsHandle } from "@/components/ui/SafeECharts";
import { buildWidgetChartOption } from "./chart-utils";
import { downloadBlob } from "@/lib/export-utils";
```

Update the `ContextMenu` import to stay as-is (line 18).

Inside `DashboardWidget`, add a chart ref after the `contextMenu` state:

```typescript
const chartRef = useRef<NativeEChartsHandle>(null);
```

Add the export handler after `handleContextMenu`:

```typescript
const handleExportPNG = async () => {
    setContextMenu(null);
    const blob = await chartRef.current?.exportPNG(2);
    if (!blob) return;
    downloadBlob(blob, `${component.title || 'chart'}.png`);
};
```

Update `menuItems` to conditionally include the export item:

```typescript
const menuItems = [
    {
        label: "放大",
        icon: <Maximize2 className="w-4 h-4" />,
        onClick: () => onMaximize?.(component.id)
    },
    ...(component.type === 'chart' ? [{
        label: "导出 PNG",
        icon: <ImageDown className="w-4 h-4" />,
        onClick: handleExportPNG
    }] : []),
    {
        label: "编辑",
        icon: <Settings className="w-4 h-4" />,
        onClick: () => onEdit?.(component.id)
    },
    {
        label: "删除",
        icon: <Trash2 className="w-4 h-4" />,
        danger: true,
        onClick: () => onDelete?.(component.id)
    }
];
```

Update `WidgetContent` to accept and use the chart ref. Change the `WidgetContent` call to pass the ref:

```typescript
{/* Widget Content */}
<div className="flex-1 p-0 overflow-hidden relative">
    <div className="absolute inset-0 p-3 z-10">
        <WidgetContent component={component} chartRef={chartRef} />
    </div>
    {!isReadOnly && <div className="absolute inset-0 z-0" />}
</div>
```

Update the `WidgetContent` function signature and chart rendering:

```typescript
function WidgetContent({ component, chartRef }: { component: DashboardComponent; chartRef: React.RefObject<NativeEChartsHandle | null> }) {
    switch (component.type) {
        case 'chart': {
            const option = buildWidgetChartOption(component.config);
            if (!option) return <div className="flex items-center justify-center h-full text-muted-foreground text-xs">No chart data</div>;
            return (
                <SafeECharts
                    ref={chartRef}
                    option={option}
                    className="h-full w-full overflow-hidden"
                />
            );
        }
        // ... rest stays the same
```

- [ ] **Step 2: Verify typecheck passes**

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && pnpm run typecheck
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add dataflow/src/components/analysis/DashboardWidget.tsx
git commit -m "feat(dataflow): add chart PNG export to dashboard widget context menu"
```

---

## Task 8: Final verification

- [ ] **Step 1: Run full typecheck**

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && pnpm run typecheck
```

Expected: no errors

- [ ] **Step 2: Run lint**

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && pnpm run lint
```

Expected: no new errors

- [ ] **Step 3: Run dev server and verify no console errors**

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && pnpm dev
```

Expected: dev server starts without build errors

- [ ] **Step 4: Verify no unused imports or dead code**

Check that all new imports are used and no removed imports linger:

```bash
cd /Users/sealos/Documents/GitHub/whodb/dataflow && pnpm run typecheck 2>&1 | grep -i "unused\|declared but"
```

Expected: no matches
