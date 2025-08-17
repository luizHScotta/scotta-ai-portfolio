import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 tracking-wide",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-violet-600 text-white hover:bg-violet-700",
        secondary:
          "border-transparent bg-violet-50 text-violet-700 hover:bg-violet-100",
        destructive:
          "border-transparent bg-red-600 text-white hover:bg-red-700",
        outline: "text-slate-700 border-slate-200 bg-white hover:bg-slate-50",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
