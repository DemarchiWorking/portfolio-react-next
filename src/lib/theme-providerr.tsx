/*
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";


export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class" // Usa 'class' (tailwind) em vez de 'data-theme'
      defaultTheme="system" // Default para o tema do sistema
      enableSystem // Habilita detecção do sistema
      disableTransitionOnChange // Desabilita a transição de CSS nativa do next-themes, vamos usar framer-motion
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
*/