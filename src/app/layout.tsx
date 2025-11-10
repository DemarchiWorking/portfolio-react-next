import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeFeature } from "@/features/theme/theme-provider";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/organisms/Navbar";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]
});

export const metadata: Metadata = {
  title: "Portfolio Networking",
  description: "Dark/Light com Atomic + FSD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.className} antialiased bg-background text-foreground`}>
        <Navbar/>
        <ThemeFeature>{children}</ThemeFeature>
      </body>
    </html>
  );
}