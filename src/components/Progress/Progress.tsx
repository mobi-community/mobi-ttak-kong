'use client'

import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '@/utils/shadcn.utils.ts'
import type { ProgressProps } from './Progress.types'

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, bgColor = 'bg-primary-50', ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(`relative h-4 w-full overflow-hidden rounded-full ${bgColor} shadow-md`, className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  ),
)
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
