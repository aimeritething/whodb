import type { Locale } from './locale'
import { zhMessages } from './locales/zh'
import { enMessages } from './locales/en'

export type Messages = typeof zhMessages
export type MessageKey = keyof Messages
export type TranslationParams = Record<string, string | number>

export const messagesByLocale: Record<Locale, Messages> = {
  zh: zhMessages,
  en: enMessages,
}

export function translateWithMessages(
  currentMessages: Partial<Record<string, string>>,
  fallbackMessages: Partial<Record<string, string>>,
  key: string,
  params?: TranslationParams,
): string {
  const template = currentMessages[key] ?? fallbackMessages[key] ?? key
  if (!params) return template

  return template.replace(/\{(\w+)\}/g, (_, token) => {
    const value = params[token]
    return value === undefined ? `{${token}}` : String(value)
  })
}

export function createTranslator(locale: Locale) {
  return (key: MessageKey, params?: TranslationParams) =>
    translateWithMessages(messagesByLocale[locale], zhMessages, key, params)
}
