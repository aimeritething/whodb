import { useCallback, useEffect, useRef } from 'react'

interface UsePendingGuardParams {
  hasPendingChanges: boolean
  discardChanges: () => void
  setShowDiscardModal: (open: boolean) => void
}

export function usePendingGuard({
  hasPendingChanges,
  discardChanges,
  setShowDiscardModal,
}: UsePendingGuardParams) {
  const pendingActionRef = useRef<null | (() => void)>(null)

  const runWithGuard = useCallback((action: () => void) => {
    if (!hasPendingChanges) {
      action()
      return
    }

    pendingActionRef.current = action
    setShowDiscardModal(true)
  }, [hasPendingChanges, setShowDiscardModal])

  const confirmDiscardAndContinue = useCallback(() => {
    discardChanges()
    setShowDiscardModal(false)
    pendingActionRef.current?.()
    pendingActionRef.current = null
  }, [discardChanges, setShowDiscardModal])

  useEffect(() => {
    if (!hasPendingChanges) return

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = ''
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [hasPendingChanges])

  return {
    runWithGuard,
    confirmDiscardAndContinue,
  }
}
