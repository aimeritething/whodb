import { screen } from '@testing-library/react'
import { ConfirmationModal } from '@/components/ui/ConfirmationModal'
import { renderWithI18n } from '@/test/renderWithI18n'

it('renders zh defaults for confirm and cancel', () => {
  renderWithI18n(
    <ConfirmationModal isOpen onClose={() => {}} onConfirm={() => {}} title="删除" message="确认删除？" />,
    'zh',
  )

  expect(screen.getByRole('button', { name: '取消' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: '确认' })).toBeInTheDocument()
})
