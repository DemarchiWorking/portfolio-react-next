// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*

// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
*/
/**
 * Combina classes do Tailwind de forma inteligente:
 * - clsx: condicionais
 * - twMerge: remove conflitos (ex: bg-red-500 bg-blue-500 → mantém última)
 */