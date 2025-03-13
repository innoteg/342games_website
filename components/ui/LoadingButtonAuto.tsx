import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 text-white',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 text-white',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground text-white',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 text-white',
        ghost: 'hover:bg-accent hover:text-accent-foreground text-white',
        link: 'text-primary underline-offset-4 hover:underline text-white',
        my: 'bg-gradient-to-r from-[#2d63e7] to-[#2d63e7] text-white',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        my: 'py-1 rounded-md px-2',
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

const LoadingButtonAuto = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, isFreeze, children, ...props }:any, ref) => {
    const [localLoading, setLocalLoading] = useState(false);

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
            {React.Children.map(children as React.ReactElement, (child: any) => {
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
LoadingButtonAuto.displayName = 'LoadingButtonAuto';

export { LoadingButtonAuto, buttonVariants };
