import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        common: [
          'relative bg-transparent border-0',
          'before:absolute before:inset-0 before:p-[2px] before:rounded-md before:bg-gradient-to-b from-[#FF00FE] to-[#0940B9]',
          'before:content-[\'\'] before:-z-[1]',
          'after:absolute after:inset-[2px] after:rounded-[5px]',
          'after:bg-gradient-to-b after:from-[#C305C3] after:to-[#192F89]',
          'after:content-[\'\'] after:-z-[1]',
          'text-white text-[10px] leading-[12px]  sm:text-[20px] sm:leading-4 px-3 py-1',
          'hover:before:opacity-75 hover:after:opacity-90 transition-all'
        ],
        common2: [
          'relative  border-0 before:p-[1px] before:bg-gradient-to-b from-[#FF00FE] to-[#0940B9]',
          'before:absolute before:inset-0 before:p-[2px] before:rounded-md ',
          'before:content-[\'\'] before:-z-[1]',
          'after:bg-gradient-to-b after:from-[#242129] after:to-[#242129]',
          'after:absolute after:inset-[2px] after:rounded-[5px]',
          'after:content-[\'\'] after:-z-[1]',
          'text-white text-[20px] leading-4 px-3 py-1',
          'hover:before:opacity-75 hover:after:opacity-90 transition-all'
        ],
        common3: [
          'relative  border-0 before:p-[1px] before:bg-gradient-to-b from-[#7508f8] to-[#133fb7]',
          'before:absolute before:inset-0 before:p-[2px] before:rounded-md ',
          'before:content-[\'\'] before:-z-[1]',
          'after:bg-gradient-to-b after:from-[#192F89] after:to-[#5C05C3]',
          'after:absolute after:inset-[2px] after:rounded-[5px]',
          'after:content-[\'\'] after:-z-[1]',
          'text-white text-[20px] leading-4 px-3 py-1',
          'hover:before:opacity-75 hover:after:opacity-90 transition-all'
        ],
        // background: linear-gradient(0deg, #192F89 0%, #5C05C3 100%);

      },
      size: {
        default: 'h-10 px-3 py-1',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  formAction?: any;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
