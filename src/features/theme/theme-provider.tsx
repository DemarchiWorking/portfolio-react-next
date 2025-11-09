import { ThemeProvider } from "@/lib/theme-provider";

export function ThemeFeature({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
// src/features/theme/theme-provider.tsx
/*"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light"; // Simplificado: não usamos mais "system" no estado
type ThemeProviderState = {
  theme: Theme;
  toggle: () => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

// Função para obter o tema real (resolvido)
function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light"; // Padrão no SSR
  }
  const storedTheme = localStorage.getItem("theme") as Theme | null;
  if (storedTheme) {
    return storedTheme;
  }
  // Se não houver storage, use a preferência do OS
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeFeature({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Efeito para APLICAR a classe no <html>
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    // Salva a mudança no localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Efeito para "ouvir" mudanças no OS (para o 'system')
  // Isso só é relevante se o usuário nunca tocou no toggle
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      // Só muda se o usuário NÃO tiver uma preferência salva
      if (!localStorage.getItem("theme")) {
        setTheme(mediaQuery.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = { theme, toggle };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useThemeMode = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useThemeMode must be used within a ThemeFeature");
  }
  return context;
};*/
/*
import { ThemeProvider } from "@/lib/theme-provider";

export function ThemeFeature({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
  */