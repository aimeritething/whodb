import { createContext, use, useState, useCallback, type ReactNode } from 'react'
import { LayoutDashboard } from 'lucide-react'
import { useAnalysisStore } from '@/stores/useAnalysisStore'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/Input'
import { ModalForm, useModalForm } from '@/components/database/modals/ModalForm'
import { useModalState } from '@/components/database/modals/useModalState'

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface RenameDashboardCtxValue {
  name: string
  setName: (v: string) => void
  originalName: string
}

const RenameDashboardCtx = createContext<RenameDashboardCtxValue | null>(null)

function useRenameDashboardCtx(): RenameDashboardCtxValue {
  const ctx = use(RenameDashboardCtx)
  if (!ctx) throw new Error('useRenameDashboardCtx must be used within RenameDashboardProvider')
  return ctx
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

/** Owns business logic for renaming a dashboard. */
function RenameDashboardProvider({
  dashboardId,
  currentName,
  onSuccess,
  children,
}: {
  dashboardId: string
  currentName: string
  onSuccess?: () => void
  children: ReactNode
}) {
  const { updateDashboard, isDashboardNameExists } = useAnalysisStore()
  const [name, setName] = useState(currentName)
  const { state, actions: baseActions } = useModalState()

  const actions = {
    ...baseActions,
    submit: async () => {
      if (!name.trim() || name === currentName) return
      if (isDashboardNameExists(name, dashboardId)) {
        baseActions.setAlert({
          type: 'error',
          title: 'Name already exists',
          message: 'Dashboard name already exists, please use a different name',
        })
        return
      }
      updateDashboard(dashboardId, { name })
      onSuccess?.()
    },
  }

  return (
    <RenameDashboardCtx value={{ name, setName, originalName: currentName }}>
      <ModalForm.Provider
        state={state}
        actions={actions}
        meta={{ title: 'Rename Dashboard', icon: LayoutDashboard }}
      >
        {children}
      </ModalForm.Provider>
    </RenameDashboardCtx>
  )
}

// ---------------------------------------------------------------------------
// Subcomponents
// ---------------------------------------------------------------------------

/** Input for the new dashboard name. */
function RenameDashboardFields() {
  const { name, setName } = useRenameDashboardCtx()
  const { state, actions } = useModalForm()

  return (
    <Input
      value={name}
      onChange={(e) => { setName(e.target.value); actions.closeAlert() }}
      maxLength={15}
      disabled={state.isSubmitting}
      autoFocus
    />
  )
}

/** Submit button disabled when name is empty or unchanged. */
function RenameSubmitButton() {
  const { name, originalName } = useRenameDashboardCtx()
  return <ModalForm.SubmitButton label="Confirm" disabled={!name.trim() || name === originalName} />
}

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------

interface RenameDashboardModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  dashboardId: string
  currentName: string
}

/** Modal for renaming a dashboard. */
export function RenameDashboardModal({
  open,
  onOpenChange,
  dashboardId,
  currentName,
}: RenameDashboardModalProps) {
  const handleSuccess = useCallback(() => {
    onOpenChange(false)
  }, [onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <RenameDashboardProvider dashboardId={dashboardId} currentName={currentName} onSuccess={handleSuccess}>
          <ModalForm.Header />
          <RenameDashboardFields />
          <ModalForm.Alert />
          <ModalForm.Footer>
            <ModalForm.CancelButton />
            <RenameSubmitButton />
          </ModalForm.Footer>
        </RenameDashboardProvider>
      </DialogContent>
    </Dialog>
  )
}
