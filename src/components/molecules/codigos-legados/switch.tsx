// components/atoms/switch.tsx

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// --- A TRILHA (O FUNDO) ---
// (Esta parte estava correta e permanece igual)
const switchVariants = cva(
  "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-transparent data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        theme:
          "border-gray-300 dark:border-gray-600 data-[state=checked]:bg-slate-900 data-[state=unchecked]:bg-slate-200 dark:data-[state=checked]:bg-slate-200 dark:data-[state=unchecked]:bg-slate-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// --- O BOTÃO DESLIZANTE (THUMB) ---
// CORREÇÃO: Removi o tamanho e a translação daqui.
// O CVA agora só controla o que MUDA (a cor de fundo).
const switchThumbVariants = cva(
  "pointer-events-none rounded-full bg-background shadow-lg ring-0 transition-transform duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-slate-900",
        theme: "bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {
  thumbVariant?: VariantProps<typeof switchThumbVariants>["variant"];
}

// --- O COMPONENTE SWITCH ---
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, variant, thumbVariant, children, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ variant, className }))}
    {...props}
    ref={ref}
  >
    {/* CORREÇÃO CRÍTICA:
      As classes de tamanho (h-5, w-5) e de translação (translate-x-5) 
      estão aqui, diretamente no JSX.
      
      Isso FORÇA o Tailwind V4 a "vê-las" e incluí-las no CSS final,
      resolvendo o bug da "purga".
    */}
    <SwitchPrimitives.Thumb
      className={cn(
        switchThumbVariants({ variant: thumbVariant || variant }),
        "block h-5 w-5",
        "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch, switchVariants, switchThumbVariants };