import { useAnalysisStore } from '@/stores/useAnalysisStore'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

interface ComponentSettingsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

/** Modal for editing dashboard component settings (title, description, stats fields). */
export function ComponentSettingsModal({ open, onOpenChange }: ComponentSettingsModalProps) {
  const { activeDashboardId, selectedComponentId, dashboards, updateComponent } = useAnalysisStore()
  const dashboard = dashboards.find(d => d.id === activeDashboardId)
  const selectedComponent = dashboard?.components.find(c => c.id === selectedComponentId)

  return (
    <Dialog open={open && !!selectedComponent} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        {selectedComponent && (
          <>
            <DialogHeader>
              <DialogTitle>Edit Component</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Title</label>
                <Input
                  value={selectedComponent.title}
                  onChange={(e) => updateComponent(selectedComponent.id, { title: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Description</label>
                <textarea
                  value={selectedComponent.description || ''}
                  onChange={(e) => updateComponent(selectedComponent.id, { description: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border bg-background text-sm resize-none h-20"
                  placeholder="Add description..."
                />
              </div>
              {selectedComponent.type === 'stats' && (
                <>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Value</label>
                    <Input
                      value={selectedComponent.data?.value || ''}
                      onChange={(e) => updateComponent(selectedComponent.id, {
                        data: { ...selectedComponent.data, value: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Trend</label>
                    <Input
                      value={selectedComponent.data?.trend || ''}
                      onChange={(e) => updateComponent(selectedComponent.id, {
                        data: { ...selectedComponent.data, trend: e.target.value }
                      })}
                      placeholder="+10%"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button>Done</Button>
              </DialogClose>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
