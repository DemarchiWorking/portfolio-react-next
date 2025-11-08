"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeMode() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted
    ? theme === "system"
      ? resolvedTheme ?? "light"
      : theme
    : "light";

  const toggle = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return {
    theme: currentTheme as "light" | "dark",
    toggle,
    mounted,
  };
}

/*
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeMode() {
  const { theme, setTheme, resolvedTheme: systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // `resolvedTheme` é o nome correto em next-themes@0.3+
  const currentTheme = mounted
    ? theme === "system"
      ? systemTheme ?? "light"
      : theme
    : "light";

  const toggle = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return {
    theme: currentTheme as "light" | "dark",
    toggle,
    mounted,
  };
}*/
/*
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeMode() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "light";

  const toggle = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return { theme: currentTheme, toggle, mounted };
}
  */