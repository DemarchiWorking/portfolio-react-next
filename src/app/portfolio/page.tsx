"use client";

import React, { useState, useEffect } from "react";
import { Lock, ShieldAlert, X, LogIn, ChevronLeft } from "lucide-react";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { LockOpen, ArrowLeft } from "lucide-react"; // Adicione o LockOpen aqui
import Botao from '@/components/atoms/Botao-Primary/botao';
// --- COMPONENTES LOCAIS (Sub-components) ---

/**
 * Modal de Login moderna com Glassmorphism e animações simples
 */
const LoginModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  // Fecha a modal ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay com Blur */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      {/* Card da Modal */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="p-8">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>

          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Lock size={24} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Área Restrita</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Identifique-se para acessar o conteúdo completo.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                E-mail ou Usuário
              </label>
              <input
                type="email"
                placeholder="cliente@gmail.com"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>

            <button
              disabled
              className="inline-flex items-center justify-center w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4 cursor-not-allowed"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Entrar 
            </button>

            <p className="text-center text-[11px] text-muted-foreground uppercase tracking-widest mt-6">
              Serviço temporariamente indisponível para o seu email
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-12 text-foreground selection:bg-primary/30">
      
      {/* Botão de Tema no topo direito */}
      <div className="absolute right-8 top-8">
        <ThemeToggle />
      </div>

      {/* Background Decorativo (Sutil) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(var(--primary-rgb),0.05)_0%,transparent_100%)]" />

      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center text-center">
        {/* Badge / Categoria */}
        <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-colors">
          <span className="mr-1 flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          Acesso Protegido
        </div>

        {/* Ícone Principal */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-secondary shadow-inner">
          <ShieldAlert size={48} className="text-red-500" />
        </div>

        {/* Título e Texto */}
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Ops! Conteúdo Privado
        </h1>
        
        <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
          Você não possui permissão para visualizar esta página de portfólio no momento. 
          Este ambiente é restrito a recrutadores com chave de acesso ativa.
        </p>

        {/* Grupo de Botões */}
        <div className="flex flex-col pointer gap-4 sm:flex-row sm:items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative pointer inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-foreground px-8 font-bold text-background transition-all hover:scale-[1.02] active:scale-95"
          >
            <Lock className="mr-2 h-4 w-4 pointer transition-transform group-hover:rotate-12" />
            Acessar com Login
          </button>

          <a
            href="/"
            className="inline-flex h-12 pointer items-center justify-center rounded-xl px-8 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Voltar ao Início
          </a>
        </div>
        <div className="pb-12 pt-12"></div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="/"
            className="inline-flex h-12 pointer items-center justify-center rounded-xl px-8 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground"
          >
            <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex pointer h-12 items-center justify-center overflow-hidden rounded-xl bg-foreground px-8 font-bold text-background transition-all hover:scale-[1.02] active:scale-95"
          >
          </button>

          <a href="https://github.com/DemarchiWorking?tab=repositories">
            <button className="bg-blue-500 pointer hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <tr>
                <td>            
                  <LockOpen className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                </td>
                <td>                    
                  Portfólio Projetos Publicos 
                </td>
              </tr>
            </button>
          </a>


          </a>
        </div>

        {/* Footer da Página */}
        <footer className="mt-16 text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} — Todos os direitos reservados.
        </footer>
      </div>

      {/* Modal Renderizada Condicionalmente */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
