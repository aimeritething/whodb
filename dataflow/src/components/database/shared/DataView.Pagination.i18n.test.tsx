import { screen } from '@testing-library/react'
import { DataViewPagination } from '@/components/database/shared/DataView.Pagination'
import { renderWithI18n } from '@/test/renderWithI18n'

it('renders zh pagination labels', () => {
  renderWithI18n(
    <DataViewPagination
      currentPage={1}
      totalPages={5}
      pageSize={10}
      total={42}
      loading={false}
      onPageChange={() => {}}
      onPageSizeChange={() => {}}
    />,
    'zh',
  )

  expect(screen.getByText('每页行数：')).toBeInTheDocument()
  expect(screen.getByText('第')).toBeInTheDocument()
})
