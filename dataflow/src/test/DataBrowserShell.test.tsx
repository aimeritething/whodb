import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { DataBrowser } from '@/components/database/shared/DataBrowser'
import { I18nProvider } from '@/i18n/I18nProvider'

describe('DataBrowser shell', () => {
  it('renders shell children and shared error state', () => {
    const { container } = render(
      <I18nProvider locale="en">
        <DataBrowser.Frame className="bg-background">
          <div>toolbar</div>
          <DataBrowser.Main>
            <DataBrowser.Error message="boom" onRetry={vi.fn()} />
            <div>body</div>
          </DataBrowser.Main>
        </DataBrowser.Frame>
      </I18nProvider>,
    )

    expect(screen.getByText('toolbar')).toBeInTheDocument()
    expect(screen.getByText('boom')).toBeInTheDocument()
    expect(screen.getByText('body')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('bg-background')
  })

  it('re-exports the shared loading state', () => {
    render(
      <I18nProvider locale="en">
        <DataBrowser.Loading />
      </I18nProvider>,
    )

    expect(document.querySelector('.animate-spin')).toBeInTheDocument()
  })
})
