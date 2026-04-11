import { act, render, screen } from '@testing-library/react'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { usePendingGuard } from '@/components/database/shared/usePendingGuard'

function PendingGuardHarness({
  hasPendingChanges = true,
  onDiscard = vi.fn(),
}: {
  hasPendingChanges?: boolean
  onDiscard?: () => void
}) {
  const [showDiscardModal, setShowDiscardModal] = useState(false)
  const [resumeCount, setResumeCount] = useState(0)

  const { runWithGuard, confirmDiscardAndContinue } = usePendingGuard({
    hasPendingChanges,
    discardChanges: onDiscard,
    setShowDiscardModal,
  })

  return (
    <>
      <button onClick={() => runWithGuard(() => setResumeCount((count) => count + 1))}>guarded</button>
      <button onClick={confirmDiscardAndContinue}>confirm</button>
      <span data-testid="show-discard">{String(showDiscardModal)}</span>
      <span data-testid="resume-count">{String(resumeCount)}</span>
    </>
  )
}

describe('usePendingGuard', () => {
  it('opens discard modal instead of running the guarded action when pending changes exist', () => {
    render(<PendingGuardHarness />)

    act(() => {
      screen.getByText('guarded').click()
    })

    expect(screen.getByTestId('show-discard')).toHaveTextContent('true')
    expect(screen.getByTestId('resume-count')).toHaveTextContent('0')
  })

  it('discards changes and resumes the queued action after confirmation', () => {
    const onDiscard = vi.fn()

    render(<PendingGuardHarness onDiscard={onDiscard} />)

    act(() => {
      screen.getByText('guarded').click()
    })

    act(() => {
      screen.getByText('confirm').click()
    })

    expect(onDiscard).toHaveBeenCalledTimes(1)
    expect(screen.getByTestId('show-discard')).toHaveTextContent('false')
    expect(screen.getByTestId('resume-count')).toHaveTextContent('1')
  })
})
