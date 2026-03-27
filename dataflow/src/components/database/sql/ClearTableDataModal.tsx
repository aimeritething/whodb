import React, { useState } from "react";
import { X, Eraser, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useConnectionStore } from "@/stores/useConnectionStore";
import { cn } from "@/lib/utils";

interface ClearTableDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  databaseName: string;
  schema?: string;
  tableName: string;
  onSuccess?: () => void;
}

export function ClearTableDataModal({ isOpen, onClose, databaseName, schema, tableName, onSuccess }: ClearTableDataModalProps) {
  const { clearTableData } = useConnectionStore();
  const [mode, setMode] = useState<'truncate' | 'delete'>('truncate');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  if (!isOpen) return null;

  const handleClear = async () => {
    setIsProcessing(true);
    const res = await clearTableData(databaseName, schema, tableName, mode);
    setResult({ success: res.success, message: res.success ? 'Data cleared successfully' : (res.message ?? 'Failed to clear data') });
    setIsProcessing(false);
    if (res.success) onSuccess?.();
  };

  const handleClose = () => {
    setResult(null);
    setMode('truncate');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl bg-background shadow-2xl border animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Eraser className="h-5 w-5 text-orange-500" />
            Clear Table Data
          </h2>
          <button onClick={handleClose} className="rounded-full p-1 hover:bg-muted transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-6 py-4 space-y-4">
          {!result ? (
            <>
              <div className="rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 p-3">
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  This will remove <strong>all data</strong> from <strong>{tableName}</strong>. This action cannot be undone.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase">Mode</label>
                <div className="space-y-2">
                  <label className={cn(
                    "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                    mode === 'truncate' ? "border-orange-400 bg-orange-50/50 dark:bg-orange-950/20" : "hover:bg-muted/50"
                  )}>
                    <input type="radio" name="mode" value="truncate" checked={mode === 'truncate'}
                      onChange={() => setMode('truncate')} className="mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">Fast (TRUNCATE)</div>
                      <div className="text-xs text-muted-foreground">Resets auto-increment counters. Skips row-level triggers. Fastest for large tables.</div>
                    </div>
                  </label>
                  <label className={cn(
                    "flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                    mode === 'delete' ? "border-orange-400 bg-orange-50/50 dark:bg-orange-950/20" : "hover:bg-muted/50"
                  )}>
                    <input type="radio" name="mode" value="delete" checked={mode === 'delete'}
                      onChange={() => setMode('delete')} className="mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">Safe (DELETE)</div>
                      <div className="text-xs text-muted-foreground">Preserves auto-increment state. Fires row-level triggers. Slower on large tables.</div>
                    </div>
                  </label>
                </div>
              </div>
            </>
          ) : (
            <div className={cn(
              "rounded-lg p-4 flex items-start gap-3",
              result.success ? "bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-200"
                : "bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-200"
            )}>
              {result.success ? <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" /> : <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />}
              <p className="text-sm">{result.message}</p>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 border-t px-6 py-4">
          <button onClick={handleClose} className="px-4 py-2 text-sm rounded-lg hover:bg-muted transition-colors">
            {result ? 'Close' : 'Cancel'}
          </button>
          {!result && (
            <button onClick={handleClear} disabled={isProcessing}
              className="px-4 py-2 text-sm rounded-lg bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-50 flex items-center gap-2">
              {isProcessing && <Loader2 className="h-4 w-4 animate-spin" />}
              Clear Data
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
