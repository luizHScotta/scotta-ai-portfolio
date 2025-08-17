import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:translate-y-[1px]",
  {
    variants: {
      variant: {
        default: "bg-violet-600 text-white hover:bg-violet-700 shadow-sm ring-1 ring-violet-600/10",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-sm ring-1 ring-red-600/10",
        outline:
          "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 hover:text-slate-900 shadow-sm ring-1 ring-slate-200",
        secondary:
          "bg-white text-slate-900 hover:bg-slate-50 shadow-sm ring-1 ring-slate-200",
        ghost: "hover:bg-violet-50 hover:text-violet-700",
        link: "text-violet-600 underline-offset-4 hover:underline hover:text-violet-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-2xl px-3",
        lg: "h-11 rounded-2xl px-8",
        icon: "h-10 w-10 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
