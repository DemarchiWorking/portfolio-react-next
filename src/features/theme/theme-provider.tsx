import { ThemeProvider } from "@/lib/theme-provider";

export function ThemeFeature({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}