"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Lock, 
  ShieldAlert, 
  X, 
  LogIn, 
  ChevronLeft, 
  LockOpen, 
  Play, 
  ExternalLink, 
  Github,
  Rocket
} from "lucide-react";
import { ThemeToggle } from "@/components/molecules/theme-toggle";

// --- TIPAGEM E MOCKS ---

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoUrl?: string;
  isLocked: boolean;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: "vitrine-artesao",
    title: "Vitrine do Artesão",
    subtitle: "E-commerce Fullstack Java & Angular",
    description: "Loja virtual Multi Tenancy. O objetivo deste projeto é integrar a Engenharia ao setor cultural para impulsionar a economia criativa. A plataforma foi desenvolvida para conectar artesãos e artistas aos amantes da arte, utilizando a tecnologia para fomentar o trabalho e dar visibilidade aos produtos de empreendedores locais.",
    videoUrl: "https://www.youtube.com/embed/CRD-w_oFgvQ", // Formato embed para o iframe
    isLocked: false,
    tags: ["Java", "Spring Boot", "Angular", "AWS"],
  },
  {
    id: "networking-engenheiros",
    title: "Plataforma Networking para Engenheiros",
    subtitle: "Plataforma de Networking para alunos, contratantes e recrutadores",
    description: "Construida em .NET e Angular.",
    isLocked: true,
    tags: ["AWS", ".NET", "Angular"],
  },
  {
    id: "iac-kubernetes",
    title: "Kubernetes - Cloud - IaC",
    subtitle: "App Infraestrutura",
    description: "Automação completa de infraestrutura virtual para consultorias de tecnologia.",
    isLocked: true,
    tags: ["Terraform","Kubernetes","AWS", "Docker", "Go", "Python"],
  },
  {
    id: "crea-sp",
    title: "CREA-SP",
    subtitle: "Platforma para Hackaton CREA-SP",
    description: "Funcionalidades para facilitar a vida de engenheiros do CREA-SP.",
    isLocked: true,
    tags: ["Google Cloud", "Firebase", "Javascript", "React"],
  },
  {
    id: "neuro-lead",
    title: "Inteligência Comercial - Pré vendas",
    subtitle: "Automação para Venda de Consultoria/Produto automatizado.",
    description: "Plataforma de geração de leads automatizada pronta para rodar agentes.",
    isLocked: true,
    tags: ["Javascript", "IA","Dados"],
  }
];

// --- COMPONENTES AUXILIARES ---

const LoginModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl p-8">
            <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"><X size={20} /></button>
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Lock size={24} /></div>
              <h2 className="text-2xl font-bold tracking-tight">Área Restrita</h2>
              <p className="text-sm text-muted-foreground mt-2">Identifique-se para acessar a documentação técnica deste projeto.</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="cliente@gmail.com" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring outline-none" />
              <input type="password" placeholder="••••••••" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring outline-none" />
              <button disabled className="inline-flex items-center justify-center w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow opacity-50 cursor-not-allowed"><LogIn className="mr-2 h-4 w-4" /> Entrar</button>
              <p className="text-center text-[11px] text-muted-foreground uppercase tracking-widest mt-6">Acesso exclusivo para recrutadores</p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- COMPONENTE PRINCIPAL ---

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="absolute right-8 top-8 z-20">
        <ThemeToggle />
      </div>

      {/* Background Decorativo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(var(--primary-rgb),0.05)_0%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LADO ESQUERDO: LISTA DE PROJETOS */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 space-y-4"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary/60 mb-2">Portfolio</h2>
            <h1 className="text-4xl font-bold tracking-tighter">Projetos Atuais</h1>
          </motion.div>

          {PROJECTS.map((project) => (
            <motion.button
              key={project.id}
              variants={itemVariants}
              onClick={() => setSelectedProject(project)}
              className={`w-full text-left p-5 hover:bg-blue-900 cursor-pointer rounded-2xl border transition-all duration-300 group ${
                selectedProject.id === project.id 
                ? "bg-card border-primary shadow-lg scale-[1.02]" 
                : "bg-transparent border-border hover:border-primary/50"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-bold text-lg ${selectedProject.id === project.id ? "text-primary" : ""}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{project.subtitle}</p>
                </div>
                {project.isLocked ? <Lock size={16} className="text-muted-foreground/50" /> : <Rocket size={16} className="text-primary" />}
              </div>
              <div className="flex gap-2 mt-3">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}

          <motion.div variants={itemVariants} className="pt-8">
             <a href="https://github.com/DemarchiWorking?tab=repositories" target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
               <Github size={18} /> Ver outros +90 projetos no GitHub
             </a>
          </motion.div>
        </motion.div>

        {/* LADO DIREITO: VISUALIZAÇÃO DINÂMICA */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!selectedProject.isLocked ? (
              // --- TELA PROJETO DESBLOQUEADO ---
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                {/* Video Player Container */}
                <div className="aspect-video w-full overflow-hidden rounded-3xl bg-secondary shadow-2xl border border-border relative group">
                  <iframe
                    src={selectedProject.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Projeto em Destaque
                  </div>
                  <h2 className="text-4xl font-black tracking-tight">{selectedProject.title}</h2>
                  <p className="text-xl text-muted-foreground font-medium">{selectedProject.subtitle}</p>
                  <p className="text-lg leading-relaxed text-muted-foreground/80">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-bold text-background transition-all hover:scale-105 active:scale-95">
                    <Lock size={18} /> Documentação Técnica
                  </button>
                  <a href="/" className="flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 font-bold text-foreground transition-all hover:bg-secondary/80">
                    <ChevronLeft size={18} /> Voltar ao Início
                  </a>
                </div>
              </motion.div>
            ) : (
              // --- TELA PROJETO BLOQUEADO (REAPROVEITADA) ---
              <motion.div
                key="locked"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center text-center justify-center min-h-[500px] p-12 rounded-3xl border-2 border-dashed border-border bg-card/30"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary shadow-inner">
                  <ShieldAlert size={40} className="text-red-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Ops! Conteúdo Privado</h2>
                <p className="text-muted-foreground max-w-md mb-8">
                  O projeto <span className="text-foreground font-bold">{selectedProject.title}</span> ainda está sob processo de modernização de documentação técnica ou é restrito a recrutadores.
                </p>
                <div className="flex flex-col gap-3 w-full max-w-xs">
                  <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-2 rounded-xl bg-foreground px-8 py-3 font-bold text-background transition-all hover:scale-[1.02] active:scale-95">
                    <Lock size={18} /> Solicitar Acesso
                  </button>
                  <button onClick={() => setSelectedProject(PROJECTS[0])} className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors">
                    Ver projeto disponível
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <footer className="text-center py-12 text-sm text-muted-foreground/40">
         &copy; {new Date().getFullYear()} — Antonio Eduardo Demarchi — Engenheiro de Software
      </footer>
    </main>
  );
}