import { screen } from '@testing-library/react'
import { TabContent } from '@/components/layout/TabContent'
import { useTabStore } from '@/stores/useTabStore'
import { renderWithI18n } from '@/test/renderWithI18n'

it('renders the zh empty state', () => {
  useTabStore.setState({ tabs: [], activeTabId: null })
  renderWithI18n(<TabContent />, 'zh')
  expect(screen.getByText('暂无打开的标签页')).toBeInTheDocument()
})
