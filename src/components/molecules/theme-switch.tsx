/*
"use client";

import { Switch } from "@/components/molecules/codigos-legados/switch"; 
import { useThemeMode } from "@/hooks/use-theme";
import * as React from "react";
import { Moon, Sun } from "lucide-react"; 

export function ThemeSwitch() {
  const { theme, toggle, mounted } = useThemeMode();
  
  // O estado do Switch é 'checked' (ligado) se o tema for 'dark'
  const isDark = theme === "dark"; 
  const label = `Alternar para modo ${isDark ? "claro" : "escuro"}`;

  // Placeholder para o FOUC/Hydration (melhor prática de UX)
  if (!mounted) return (
    <div className="flex items-center space-x-2">
      <Moon className="h-5 w-5 text-gray-400" />
      <div className="h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
      <Sun className="h-5 w-5 text-gray-400" />
    </div>
  );

  return (
    <div className="flex items-center space-x-2">
      <Moon className={`h-5 w-5 transition-colors ${isDark ? "text-primary" : "text-slate-500"}`} />
      
      <Switch
        checked={isDark} // Determina a posição do manípulo
        onCheckedChange={toggle} // Chama sua função de troca funcional
        id="theme-toggle"
        aria-label={label}
        title={label}
      />
      
      <Sun className={`h-5 w-5 transition-colors ${!isDark ? "text-yellow-500" : "text-slate-500"}`} />
    </div>
  );
}*/