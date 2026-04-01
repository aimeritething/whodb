import { describe, expect, it } from 'vitest'
import { enAnalysisMessages } from './en/analysis'
import { zhAnalysisMessages } from './zh/analysis'

describe('analysis locale messages', () => {
  it('defines the dashboard refresh label in English', () => {
    expect(enAnalysisMessages['analysis.dashboard.refresh']).toBe('Refresh')
  })

  it('defines the dashboard refresh label in Chinese', () => {
    expect(zhAnalysisMessages['analysis.dashboard.refresh']).toBe('刷新')
  })
})
