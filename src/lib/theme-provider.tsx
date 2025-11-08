"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes"; 
//import { type ThemeProviderProps } from "next-themes/dist/types";


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
/*
npx create-next-app@latest portfolio-networking --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
npm install -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss@3 init -p
npm install next-themes lucide-react
npm install class-variance-authority @radix-ui/react-slot
npm install clsx tailwind-merge
--npm install clsx tailwind-merge

*/