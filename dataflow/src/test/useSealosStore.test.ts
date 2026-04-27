import { beforeEach, describe, expect, it, vi } from 'vitest'

const getSessionMock = vi.fn()
const getLanguageMock = vi.fn()
const addAppEventListenMock = vi.fn()

vi.mock('sealos-desktop-sdk', () => ({
  EVENT_NAME: {
    CHANGE_I18N: 'change-i18n',
  },
}))

vi.mock('sealos-desktop-sdk/app', () => ({
  createSealosApp: vi.fn(() => undefined),
  sealosApp: {
    getSession: getSessionMock,
    getLanguage: getLanguageMock,
    addAppEventListen: addAppEventListenMock,
  },
}))

describe('useSealosStore', () => {
  beforeEach(() => {
    vi.resetModules()
    const storage = new Map<string, string>()
    vi.stubGlobal('localStorage', {
      getItem: vi.fn((key: string) => storage.get(key) ?? null),
      setItem: vi.fn((key: string, value: string) => {
        storage.set(key, value)
      }),
      removeItem: vi.fn((key: string) => {
        storage.delete(key)
      }),
      clear: vi.fn(() => {
        storage.clear()
      }),
    })
    getSessionMock.mockReset()
    getLanguageMock.mockReset()
    addAppEventListenMock.mockReset()
    getLanguageMock.mockResolvedValue({ lng: 'en' })
    addAppEventListenMock.mockReturnValue(undefined)
  })

  it('prefers the Sealos SDK session when it includes kubeconfig', async () => {
    getSessionMock.mockResolvedValue({
      user: {
        id: 'u-1',
        name: 'Ada',
        avatar: '',
      },
      kubeconfig: 'sdk-kubeconfig',
    })
    localStorage.setItem(
      'session',
      JSON.stringify({
        user: {
          id: 'u-2',
          name: 'Grace',
          avatar: '',
        },
        kubeconfig: 'local-storage-kubeconfig',
      }),
    )

    const { useSealosStore } = await import('@/stores/useSealosStore')

    await useSealosStore.getState().initialize()

    expect(useSealosStore.getState().session?.kubeconfig).toBe('sdk-kubeconfig')
  })

  it('loads the Sealos session from dbprovider 5.1 localStorage when SDK session is unavailable', async () => {
    getSessionMock.mockRejectedValue(new Error('not in desktop bridge'))
    localStorage.setItem(
      'session',
      JSON.stringify({
        user: {
          id: 'u-1',
          name: 'Ada',
          avatar: '',
        },
        kubeconfig: 'apiVersion: v1\ncurrent-context: ns-admin\n',
      }),
    )

    const { useSealosStore } = await import('@/stores/useSealosStore')

    await useSealosStore.getState().initialize()

    expect(useSealosStore.getState().session?.kubeconfig).toBe('apiVersion: v1\ncurrent-context: ns-admin\n')
    expect(useSealosStore.getState().isInSealosDesktop).toBe(true)
  })

  it('ignores malformed dbprovider 5.1 localStorage sessions without kubeconfig', async () => {
    getSessionMock.mockResolvedValue(null)
    localStorage.setItem(
      'session',
      JSON.stringify({
        user: {
          id: 'u-1',
          name: 'Ada',
          avatar: '',
        },
      }),
    )

    const { useSealosStore } = await import('@/stores/useSealosStore')

    await useSealosStore.getState().initialize()

    expect(useSealosStore.getState().session).toBeNull()
    expect(useSealosStore.getState().isInSealosDesktop).toBe(false)
  })
})
