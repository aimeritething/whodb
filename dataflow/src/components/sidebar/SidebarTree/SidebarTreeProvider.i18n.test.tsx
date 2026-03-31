import { useState } from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { SidebarTreeProvider, useSidebarTree } from '@/components/sidebar/SidebarTree'
import type { TreeNodeData } from '@/components/sidebar/SidebarTree'
import { useConnectionStore } from '@/stores/useConnectionStore'
import { renderWithI18n } from '@/test/renderWithI18n'

const originalStore = useConnectionStore.getState()

function RedisChildLabelProbe() {
  const { fetchNodeChildren } = useSidebarTree()
  const [label, setLabel] = useState('')

  const handleLoad = async () => {
    const redisDatabaseNode: TreeNodeData = {
      id: 'redis-1-cache',
      name: 'cache',
      type: 'database',
      parentId: 'redis-1',
      connectionId: 'redis-1',
      metadata: { database: 'cache' },
    }

    const children = await fetchNodeChildren(redisDatabaseNode)
    setLabel(children[0]?.name ?? '')
  }

  return (
    <>
      <button onClick={() => void handleLoad()}>load</button>
      <span>{label}</span>
    </>
  )
}

beforeEach(() => {
  useConnectionStore.setState({
    ...originalStore,
    connections: [
      {
        id: 'redis-1',
        name: 'Redis @ localhost',
        type: 'REDIS',
        host: 'localhost',
        port: '6379',
        user: '',
        password: '',
        database: 'cache',
        createdAt: '2026-03-31T00:00:00.000Z',
      },
    ],
    systemSchemas: [],
    showSystemObjectsFor: new Set<string>(),
    fetchSystemSchemas: async () => {},
  })
  localStorage.clear()
})

afterEach(() => {
  useConnectionStore.setState(originalStore)
})

it('renders the localized redis child label in en', async () => {
  renderWithI18n(
    <SidebarTreeProvider>
      <RedisChildLabelProbe />
    </SidebarTreeProvider>,
    'en',
  )

  fireEvent.click(screen.getByRole('button', { name: 'load' }))
  expect(await screen.findByText('All Data')).toBeInTheDocument()
})
