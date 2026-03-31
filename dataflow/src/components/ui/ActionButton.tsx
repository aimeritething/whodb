import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

/** Thin wrapper around Button for compact icon+label action triggers. */
export function ActionButton({ className, ...props }: ComponentProps<typeof Button>) {
  return <Button size="sm" className={cn('h-8 gap-2', className)} {...props} />
}
