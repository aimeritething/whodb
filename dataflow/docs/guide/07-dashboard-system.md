# Dashboard System

## Overview

The dashboard system lets users create custom analytics dashboards with draggable, resizable widgets. Dashboards are persisted to the MySQL persistence database.

## Architecture

```
AnalysisView (root)
  ├── DashboardList (no active dashboard)
  │     └── Dashboard cards with thumbnails
  │
  └── DashboardEditor (active dashboard)
        ├── Toolbar (title, edit mode toggle, add widget)
        ├── EditorCanvas (React Grid Layout)
        │     └── DashboardWidget × N
        └── DashboardSidebar (widget properties)
```

## State Management (`stores/useAnalysisStore.ts`)

### Core State

```typescript
interface AnalysisState {
  dashboards: Dashboard[];              // All dashboards
  activeDashboardId: string | null;     // Currently open dashboard
  selectedComponentId: string | null;   // Selected widget for editing
  isEditorMode: boolean;                // Edit vs. view mode
  isInitialized: boolean;              // API data loaded
}
```

### Dashboard Interface

```typescript
interface Dashboard {
  id: string;
  name: string;
  description?: string;
  thumbnail?: string;
  createdAt: number;
  updatedAt: number;
  components: DashboardComponent[];
}
```

### Widget Interface

```typescript
type ComponentType = 'chart' | 'text' | 'image' | 'stats' | 'filter' | 'table';

interface DashboardComponent {
  id: string;
  type: ComponentType;
  title: string;
  description?: string;
  layout: {
    i: string;    // Unique layout ID (for react-grid-layout)
    x: number;    // Column position (0-11)
    y: number;    // Row position
    w: number;    // Width in columns (1-12)
    h: number;    // Height in rows
  };
  data?: any;     // Widget data payload
  config?: any;   // Widget configuration
}
```

## Grid Layout

Uses [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout) with a **12-column grid**.

### Default Widget Sizes

| Property | Default |
|----------|---------|
| Width | 4 columns (1/3 of grid) |
| Height | 6 rows |
| New widgets per row | 3 |

### Auto-Positioning

When adding a new widget, the store calculates placement:

1. If the last widget's row has space (≤ 12 cols), place next to it
2. Otherwise, start a new row below the lowest widget

```typescript
// Simplified positioning logic
if (lastWidget.x + lastWidget.w + newWidth <= 12) {
  x = lastWidget.x + lastWidget.w;  // Same row
  y = lastWidget.y;
} else {
  x = 0;                             // New row
  y = maxY;                          // Below everything
}
```

### Layout Updates

When users drag/resize widgets, `react-grid-layout` calls `updateLayout()`:

```typescript
updateLayout: (layout) => {
  // Maps layout changes back to component state
  components.map(c => {
    const item = layout.find(l => l.i === c.layout.i);
    // Update x, y, w, h from layout item
  });
}
```

## Widget Types

### Chart Widget (`type: 'chart'`)

Renders ECharts visualizations. Config structure:

```typescript
{
  type: 'line' | 'bar' | 'pie' | 'area' | 'scatter',
  xAxis: string[],              // Category labels
  series: [{
    name: string,
    data: number[],
    type?: string,              // Override chart type per series
    areaStyle?: { opacity: number }
  }],
  direction?: 'horizontal'      // For horizontal bar charts
}
```

### Text Widget (`type: 'text'`)

Static text/markdown content.

### Image Widget (`type: 'image'`)

Displays an image from URL.

### Stats Widget (`type: 'stats'`)

Key metric display (large number with label).

### Filter Widget (`type: 'filter'`)

Interactive filter controls (planned feature).

### Table Widget (`type: 'table'`)

Tabular data display.

## Dashboard CRUD Flow

### Create

```
User clicks "New Dashboard"
  → useAnalysisStore.createDashboard(name, description)
  → Optimistic local state update (temp UUID)
  → POST /api/persist/dashboards
  → Server returns real ID → local state updated
  → Dashboard opens in editor mode
```

### Open

```
User clicks dashboard card
  → useAnalysisStore.openDashboard(id)
  → If components not loaded:
    → GET /api/persist/dashboards/[id]
    → Merge full data into state
  → Dashboard renders with widgets
```

### Save

Dashboard auto-saves on:
- Adding/removing a widget
- Changing widget properties
- Closing the dashboard
- Layout changes

```
State change
  → PUT /api/persist/dashboards/[id]
  → Sends name, description, and all components
```

### Delete

```
User clicks delete
  → useAnalysisStore.deleteDashboard(id)
  → Remove from local state
  → DELETE /api/persist/dashboards/[id]
  → Server cascades to delete components
```

## Demo Dashboard

The store includes a `createDemoDashboard()` action that creates a pre-populated "Sales Demo Dashboard" with:

1. **2025 Annual Sales Trend** (line chart) - Revenue and profit by month
2. **Sales by Category** (donut/pie chart) - Electronics, Clothing, Home, Books, Other
3. **Regional Performance** (grouped bar chart) - Q1/Q2 by region
4. **Top 5 Products** (horizontal bar chart)

This is useful for testing and demonstrating the dashboard feature.

## Components Reference

| Component | File | Purpose |
|-----------|------|---------|
| `AnalysisView` | `analysis/AnalysisView.tsx` | Root view, shows list or editor |
| `DashboardList` | `analysis/DashboardList.tsx` | Grid of dashboard cards |
| `DashboardEditor` | `analysis/DashboardEditor.tsx` | Active dashboard with toolbar |
| `EditorCanvas` | `analysis/EditorCanvas.tsx` | react-grid-layout wrapper |
| `DashboardWidget` | `analysis/DashboardWidget.tsx` | Individual widget renderer |
| `DashboardSidebar` | `analysis/DashboardSidebar.tsx` | Widget property editor |
| `ComponentPanel` | `analysis/ComponentPanel.tsx` | Widget type selector |
| `ChartSelectorModal` | `analysis/ChartSelectorModal.tsx` | Chart type picker |
| `ComponentSettingsModal` | `analysis/ComponentSettingsModal.tsx` | Widget config editor |
| `MaximizeChartModal` | `analysis/MaximizeChartModal.tsx` | Fullscreen chart view |

## Persistence Schema

Dashboards are stored across two tables:

```
dashboards (1) ←→ (N) dashboard_components
```

The `dashboard_components` table stores each widget with its layout position, type, and JSON-serialized `data`/`config` fields. See [Database Guide](./05-database-guide.md) for full schema.
