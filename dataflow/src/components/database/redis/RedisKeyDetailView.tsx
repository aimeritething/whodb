import { DataBrowser } from '@/components/database/shared/DataBrowser'
import { FindBar } from '@/components/database/shared/FindBar'
import { RedisViewDialogs } from './RedisView/RedisView.Dialogs'
import { RedisViewGrid } from './RedisView/RedisView.Grid'
import { RedisViewToolbar } from './RedisView/RedisView.Toolbar'
import { RedisViewProvider, useRedisView } from './RedisView/RedisViewProvider'

interface RedisKeyDetailViewProps {
  connectionId: string
  databaseName: string
  keyName: string
}

export function RedisKeyDetailView(props: RedisKeyDetailViewProps) {
  return (
    <RedisViewProvider {...props}>
      <RedisKeyDetailViewContent />
    </RedisViewProvider>
  )
}

function RedisKeyDetailViewContent() {
  const { state, actions } = useRedisView()

  if (state.loading && !state.hasLoadedData) {
    return (
      <DataBrowser.Frame className="bg-background">
        <DataBrowser.Loading />
      </DataBrowser.Frame>
    )
  }

  return (
    <DataBrowser.Frame className="bg-background">
      <FindBar.Provider rows={state.rows} columns={state.columns}>
        <RedisViewToolbar />
        <FindBar.Bar />
        <DataBrowser.Main>
          <RedisViewGrid />
        </DataBrowser.Main>
        {state.total > 0 && (
          <DataBrowser.Pagination
            currentPage={state.currentPage}
            totalPages={state.totalPages}
            pageSize={state.pageSize}
            total={state.total}
            loading={state.loading}
            onPageChange={actions.handlePageChange}
            onPageSizeChange={actions.handlePageSizeChange}
          />
        )}
        <RedisViewDialogs />
      </FindBar.Provider>
    </DataBrowser.Frame>
  )
}
