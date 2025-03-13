'use client'
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        gg: 'bg-primary text-primary-foreground hover:bg-primary/90 text-white',
        // destructive:
        //   'bg-destructive text-destructive-foreground hover:bg-destructive/90 text-white',
        // outline:
        //   'border border-input bg-background hover:bg-accent hover:text-accent-foreground text-white',
        // secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 text-white',
        // ghost: 'hover:bg-accent hover:text-accent-foreground text-white',
        // link: 'text-primary underline-offset-4 hover:underline text-white',
        default: [
          'relative  border-0',
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
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-10 rounded-md px-3',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  isFreeze?: boolean;
}

const AsyncButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, isFreeze, children, ...props }:any, ref) => {
    const [localLoading, setLocalLoading] = React.useState(false);

    const handleClick = async () => {
      setLocalLoading(true);
      try {
        await props.onClick?.();
      } finally {
        setLocalLoading(false);
      }
    };

    if (asChild) {
      return (
        <Slot ref={ref} {...props}>
          <>
            {React.Children.map(children, (child: any) => {
              return React.cloneElement(child, {
                className: cn(buttonVariants({ variant, size }), className),
                children: (
                  <>
                    {localLoading && (
                      <Loader2 className={cn('h-4 w-4 animate-spin', children && 'mr-2')} />
                    )}
                    {child.props.children}
                  </>
                ),
              });
            })}
          </>
        </Slot>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isFreeze || localLoading}
        ref={ref}
        {...props}
        onClick={handleClick}
      >
        <>
          {localLoading && <Loader2 className={cn('h-4 w-4 animate-spin', children && 'mr-2')} />}
          {children}
        </>
      </button>
    );
  },
);
AsyncButton.displayName = 'AsyncButton';

export { AsyncButton, buttonVariants };
