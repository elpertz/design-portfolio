import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-xl text-sm font-medium -tracking-[.012em] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground transition duration-150 border border-[rgba(255,255,255,0.20)] [box-shadow:0px_0.5px_2px_0px_rgba(255,255,255,0.59)_inset,0px_1px_0px_0px_rgba(255,255,255,0.09)_inset,0px_-1px_2px_1px_#000_inset,0px_4px_4px_0px_rgba(255,255,255,0.10)_inset,0px_2px_1px_-1px_rgba(18,18,18,0.34),0px_2px_2px_-1px_rgba(18,18,18,0.04),0px_2px_1px_-0.5px_rgba(0,0,0,0.07),0px_6px_3px_-1px_rgba(0,0,0,0.07)] hover:bg-primary/80 hover:scale-98',
        destructive:
          'bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground hover:scale-98 transition duration-150 ',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-8 px-3 py-1 [&:has(svg)]:pl-2.5 [&:not(:has(svg))]:pl-3',
        sm: 'h-5 rounded-md px-1 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
