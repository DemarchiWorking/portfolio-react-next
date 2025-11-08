"use client";
import { Switch } from "@/components/atoms/switch";
import { Sun, Moon } from "lucide-react";
import { useThemeMode } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggle, mounted } = useThemeMode();
  if (!mounted) return <div className="h-[30px] w-[60px] rounded-full bg-gray-300 border-2 border-red-500" />; // Debug: Red border for placeholder

  const isDark = theme === "dark";

  return (
    <Switch
      id="theme-toggle"
      checked={isDark}
      onCheckedChange={toggle}
      aria-label={`Alternar para modo ${isDark ? "claro" : "escuro"}`}
      title={`Modo ${isDark ? "claro" : "escuro"}`}
      className={cn(
        "hover:scale-105 focus-visible:ring-offset-background motion-safe:transition-transform motion-safe:duration-200 border-2 border-blue-500" // Debug: Blue border to confirm rendering
      )}
    >
      <Sun
        className={cn(
          "absolute left-1 top-1 h-5 w-5 text-yellow-600 motion-safe:transition-opacity motion-safe:duration-300 z-10",
          isDark ? "opacity-0" : "opacity-100"
        )}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          "absolute right-1 top-1 h-5 w-5 text-indigo-200 motion-safe:transition-opacity motion-safe:duration-300 z-10",
          isDark ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      />
      <span className="sr-only">Alternar tema</span>
    </Switch>
  );
}