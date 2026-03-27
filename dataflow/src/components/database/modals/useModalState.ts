import { useState, useCallback } from 'react'
import type { ModalState, ModalAlert } from './types'

/**
 * Shared hook encapsulating the `isSubmitting` + `alert` state pattern.
 *
 * Returns base state and actions. Per-modal Providers extend the returned
 * actions with a domain-specific `submit` before passing to `ModalForm.Provider`.
 *
 * @example
 * ```tsx
 * function MyModalProvider({ children }) {
 *   const { state, actions: baseActions } = useModalState()
 *   const actions = {
 *     ...baseActions,
 *     submit: async () => { ... },
 *   }
 *   return <ModalForm.Provider state={state} actions={actions} meta={meta}>{children}</ModalForm.Provider>
 * }
 * ```
 */
export function useModalState() {
  const [isSubmitting, setSubmitting] = useState(false)
  const [alert, setAlert] = useState<ModalAlert | null>(null)

  const closeAlert = useCallback(() => setAlert(null), [])
  const reset = useCallback(() => {
    setSubmitting(false)
    setAlert(null)
  }, [])

  return {
    state: { isSubmitting, alert },
    actions: { setSubmitting, setAlert, closeAlert, reset },
  }
}
