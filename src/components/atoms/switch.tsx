"use client"; // Add this at the very top

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// ... (rest of the code remains the same as my previous response)

const switchVariants = cva(
  "peer inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-indigo-700 data-[state=checked]:to-purple-800 data-[state=unchecked]:bg-gradient-to-r data-[state=unchecked]:from-yellow-400 data-[state=unchecked]:to-orange-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & VariantProps<typeof switchVariants>
>(({ className, variant, children, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ variant, className }))}
    {...props}
    ref={ref}
  >
    {children}
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white shadow-lg ring-0 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-in-out data-[state=checked]:translate-x-[30px] data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch, switchVariants };