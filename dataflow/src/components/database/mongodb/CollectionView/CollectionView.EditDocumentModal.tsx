import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/Button'

interface EditDocumentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  content: string
  onContentChange: (content: string) => void
  onSave: () => Promise<void>
}

/** Dialog for editing an existing MongoDB document with JSON textarea. */
export function EditDocumentModal({ open, onOpenChange, content, onContentChange, onSave }: EditDocumentModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Edit Document</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <textarea
            className="w-full h-full min-h-[300px] p-4 font-mono text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-muted/30 resize-none"
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button onClick={onSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
