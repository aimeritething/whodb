import { create } from 'zustand'
import { EVENT_NAME } from 'sealos-desktop-sdk'
import { createSealosApp, sealosApp } from 'sealos-desktop-sdk/app'

export interface SealosSession {
  token?: {
    access_token: string
    token_type: string
    refresh_token: string
    expiry: string
  }
  user: {
    id: string
    name: string
    avatar: string
  }
  kubeconfig: string
}

interface SealosState {
  loading: boolean
  initialized: boolean
  session: SealosSession | null
  language: string | null
  isInSealosDesktop: boolean
  initialize: () => Promise<void>
}

let initializePromise: Promise<void> | null = null
let sdkCleanup: (() => void) | undefined
let languageCleanup: (() => void) | undefined

function getLocalStorageSessionShape(): 'missing' | 'raw-session' | 'zustand-session' | 'no-kubeconfig' | 'malformed' {
  try {
    const rawSession = localStorage.getItem('session')
    if (!rawSession) return 'missing'

    const session = JSON.parse(rawSession)
    if (hasKubeconfig(session)) return 'raw-session'
    if (hasKubeconfig(session?.state?.session ?? null)) return 'zustand-session'
    return 'no-kubeconfig'
  } catch {
    return 'malformed'
  }
}

function logSealosAuthDebug(message: string, details: Record<string, unknown> = {}) {
  const localStorageSessionShape = getLocalStorageSessionShape()

  console.warn('[SealosAuthDebug]', {
    message,
    origin: window.location.origin,
    inIframe: window.top !== window,
    hasLocalStorageSession: localStorageSessionShape !== 'missing',
    localStorageSessionShape,
    ...details,
  })
}

function hasKubeconfig(session: SealosSession | null): session is SealosSession {
  return typeof session?.kubeconfig === 'string' && session.kubeconfig.trim().length > 0
}

function summarizeError(error: unknown): string {
  if (error instanceof Error) return error.message
  if (typeof error === 'string') return error

  try {
    return JSON.stringify(error)
  } catch {
    return String(error)
  }
}

function getDbprovider51Session(): SealosSession | null {
  try {
    const rawSession = localStorage.getItem('session')
    if (!rawSession) return null

    const session = JSON.parse(rawSession) as SealosSession | null
    return hasKubeconfig(session) ? session : null
  } catch {
    return null
  }
}

async function resolveSealosSession(): Promise<SealosSession | null> {
  try {
    const session = await sealosApp.getSession()
    if (hasKubeconfig(session)) return session
  } catch (error) {
    return getDbprovider51Session()
  }

  logSealosAuthDebug('sdk session missing kubeconfig; trying dbprovider 5.1 localStorage')
  return getDbprovider51Session()
}

export const useSealosStore = create<SealosState>((set) => ({
  loading: true,
  initialized: false,
  session: null,
  language: null,
  isInSealosDesktop: false,

  initialize: async () => {
    if (initializePromise) return initializePromise

    initializePromise = (async () => {
      try {
        if (!sdkCleanup) {
          const cleanup = createSealosApp()
          if (typeof cleanup === 'function') {
            sdkCleanup = cleanup
          }
        }

        let session: SealosSession | null = null
        let language: string | null = null

        session = await resolveSealosSession()

        try {
          const result = await sealosApp.getLanguage()
          language = result.lng
        } catch {
          language = null
        }

        if (!languageCleanup) {
          languageCleanup = sealosApp?.addAppEventListen(EVENT_NAME.CHANGE_I18N, (data: { currentLanguage?: string }) => {
            set({ language: data?.currentLanguage ?? null })
          })
        }

        set({
          session,
          language,
          isInSealosDesktop: session !== null,
          loading: false,
          initialized: true,
        })
      } catch {
        set({
          loading: false,
          initialized: true,
          session: null,
          language: null,
          isInSealosDesktop: false,
        })
      }
    })()

    return initializePromise
  },
}))
