import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/Button'

interface AddDocumentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  content: string
  onContentChange: (content: string) => void
  onSave: () => Promise<void>
}

/** Dialog for adding a new MongoDB document with JSON textarea input. */
export function AddDocumentModal({ open, onOpenChange, content, onContentChange, onSave }: AddDocumentModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Add New Document</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Enter the document content in JSON format:</p>
          <textarea
            className="w-full h-full min-h-[300px] p-4 font-mono text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-muted/30 resize-none"
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            placeholder="{ ... }"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button onClick={onSave}>Add Document</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
