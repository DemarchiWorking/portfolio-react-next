"use client"; // Ensure the page is client-side for testing

import { ThemeToggle } from "@/components/molecules/theme-toggle"; // Adjust path if needed

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
        <p className="mb-4">Contato</p>
        <p className="mb-4">Email: antonio.demarchi@al.infnet.edu.br</p>
        <p className="mb-4">Linkedin: https://www.linkedin.com/in/demarchi1 </p>
        <p className="mb-4">GitHub: https://github.com/DemarchiWorking </p>
        <p className="mb-4">CNPJ: 44.897.847/0001-96</p>

    </main>
  );
}
