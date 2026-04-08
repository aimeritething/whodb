import { createContext, use, useState, useCallback, type ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/Input'
import { ModalForm, useModalForm } from '@/components/ui/ModalForm'
import { useI18n } from '@/i18n/useI18n'
import { useDeleteRowMutation } from '@graphql'

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface DeleteRedisKeyCtxValue {
  confirmName: string
  setConfirmName: (v: string) => void
  keyName: string
  canDelete: boolean
}

const DeleteRedisKeyCtx = createContext<DeleteRedisKeyCtxValue | null>(null)

function useDeleteRedisKeyCtx(): DeleteRedisKeyCtxValue {
  const ctx = use(DeleteRedisKeyCtx)
  if (!ctx) throw new Error('useDeleteRedisKeyCtx must be used within DeleteRedisKeyProvider')
  return ctx
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

function DeleteRedisKeyProvider({
  databaseName,
  keyName,
  onSuccess,
  children,
}: {
  databaseName: string
  keyName: string
  onSuccess?: () => void
  children: ReactNode
}) {
  const { t } = useI18n()
  const [deleteRow] = useDeleteRowMutation()
  const [confirmName, setConfirmName] = useState('')
  const canDelete = confirmName === keyName

  const handleSubmit = useCallback(async () => {
    if (!canDelete) return
    const { errors } = await deleteRow({
      variables: {
        schema: databaseName,
        storageUnit: keyName,
        values: [{ Key: 'key', Value: keyName }],
      },
      context: { database: databaseName },
    })
    if (errors?.length) {
      throw new Error(errors[0].message)
    }
    onSuccess?.()
  }, [canDelete, databaseName, keyName, deleteRow, onSuccess])

  return (
    <DeleteRedisKeyCtx value={{ confirmName, setConfirmName, keyName, canDelete }}>
      <ModalForm.Provider
        onSubmit={handleSubmit}
        meta={{ title: t('redis.deleteKey.title'), icon: AlertTriangle, isDestructive: true }}
      >
        {children}
      </ModalForm.Provider>
    </DeleteRedisKeyCtx>
  )
}

// ---------------------------------------------------------------------------
// Subcomponents
// ---------------------------------------------------------------------------

function DeleteRedisKeyWarning() {
  const { t } = useI18n()
  const { keyName } = useDeleteRedisKeyCtx()

  return (
    <div className="rounded-lg bg-destructive/5 p-4 text-sm border border-destructive/10">
      <p className="font-medium text-destructive">{t('redis.deleteKey.warningTitle')}</p>
      <p className="mt-1 text-muted-foreground">
        {t('redis.deleteKey.warningMessage', { keyName })}
      </p>
    </div>
  )
}

function DeleteRedisKeyConfirmation() {
  const { t } = useI18n()
  const { confirmName, setConfirmName, keyName } = useDeleteRedisKeyCtx()
  const { state } = useModalForm()

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">
        {t('redis.deleteKey.confirmName')}
      </label>
      <Input
        value={confirmName}
        onChange={(e) => setConfirmName(e.target.value)}
        placeholder={keyName}
        disabled={state.isSubmitting}
      />
    </div>
  )
}

function DeleteRedisKeySubmitButton() {
  const { t } = useI18n()
  const { canDelete } = useDeleteRedisKeyCtx()
  return <ModalForm.SubmitButton label={t('redis.deleteKey.submit')} disabled={!canDelete} />
}

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------

interface DeleteRedisKeyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  databaseName: string
  keyName: string
  onSuccess?: () => void
}

/** Modal for deleting a Redis key with name confirmation. */
export function DeleteRedisKeyModal({
  open,
  onOpenChange,
  databaseName,
  keyName,
  onSuccess,
}: DeleteRedisKeyModalProps) {
  const handleSuccess = useCallback(() => {
    onSuccess?.()
    onOpenChange(false)
  }, [onSuccess, onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DeleteRedisKeyProvider
          databaseName={databaseName}
          keyName={keyName}
          onSuccess={handleSuccess}
        >
          <ModalForm.Header />
          <DeleteRedisKeyWarning />
          <DeleteRedisKeyConfirmation />
          <ModalForm.Alert />
          <ModalForm.Footer>
            <ModalForm.CancelButton />
            <DeleteRedisKeySubmitButton />
          </ModalForm.Footer>
        </DeleteRedisKeyProvider>
      </DialogContent>
    </Dialog>
  )
}
