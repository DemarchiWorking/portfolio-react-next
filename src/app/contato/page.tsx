"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MessageCircle, 
  ExternalLink, 
  ArrowLeft, 
  Instagram,
  Sparkles 
} from "lucide-react";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { ContactForm } from "@/components/organisms/ContatoForm/ContactForm"

export default function Contato() {
  // Estado para controlar a transição entre Tabela e Formulário
  const [isFormActive, setIsFormActive] = useState(false);

  const contactData = [
    {
      label: "Instagram",
      value: "@labdatadev", 
      href: "https://instagram.com/labdatadev", 
      icon: <Instagram size={20} />,
      actionText: "Seguir",
      color: "hover:text-pink-500" 
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/demarchi1",
      href: "https://www.linkedin.com/in/demarchi1",
      icon: <Linkedin size={20} />,
      actionText: "Conectar",
      color: "hover:text-blue-500"
    },
    {
      label: "E-mail",
      value: "antonio.demarchi@al.infnet.edu.br",
      href: "mailto:antonio.demarchi@al.infnet.edu.br",
      icon: <Mail size={20} />,
      actionText: "Enviar E-mail",
      color: "hover:text-red-500"
    },
    {
      label: "GitHub",
      value: "https://github.com/DemarchiWorking",
      href: "https://github.com/DemarchiWorking",
      icon: <Github size={20} />,
      actionText: "Ver Perfil",
      color: "hover:text-gray-400"
    },
    {
      label: "WhatsApp",
      value: "Conversar via Chat",
      href: "https://wa.me/24992984198", 
      icon: <MessageCircle size={20} />,
      actionText: "Abrir Zap",
      color: "hover:text-green-500"
    }
  ];

  // Variantes para animação em cascata (Container)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.98,
      transition: { duration: 0.3 } 
    }
  };

  // Variantes para os itens individuais
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col items-center py-16 px-4">
      
      {/* Header com Navegação Adaptativa */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl flex justify-between items-center mb-12"
      >
        <button 
          onClick={() => isFormActive ? setIsFormActive(false) : window.history.back()}
          className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          {isFormActive ? "Voltar para Canais" : "Voltar"}
        </button>
        <ThemeToggle />
      </motion.div>

      <div className="w-full max-w-4xl">
        <AnimatePresence mode="wait">
          {!isFormActive ? (
            /* VISÃO DA TABELA (CONTEÚDO ORIGINAL PRESERVADO) */
            <motion.div 
              key="table-section"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.header variants={itemVariants} className="mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                  Vamos conversar?
                </h1>
                <p className="text-lg text-muted-foreground">
                  Seja para um novo projeto ou apenas para trocar uma ideia sobre tecnologia.
                </p>
              </motion.header>

              {/* Estrutura de Tabela Moderna (Sem alterações) */}
              <motion.div 
                variants={itemVariants}
                className="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-xl"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Descrição</th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Valor</th>
                        <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground text-right">Ação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {contactData.map((item, index) => (
                        <motion.tr 
                          key={index} 
                          variants={itemVariants}
                          className="group hover:bg-muted/30 transition-colors"
                        >
                          <td className="px-6 py-5">
                            <div className={`flex items-center gap-3 font-medium transition-colors ${item.color}`}>
                              {item.icon}
                              {item.label}
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-sm text-muted-foreground font-mono">
                              {item.value}
                            </span>
                          </td>
                          <td className="px-6 py-5 text-right">
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-tighter hover:bg-primary hover:text-primary-foreground transition-all active:scale-95 border border-blue-500 hover:border-transparent"
                            >
                              {item.actionText}
                              <ExternalLink size={14} />
                            </a>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* BOTÃO MODERNO PARA ATIVAR FORMULÁRIO */}
              <motion.div variants={itemVariants} className="mt-12">
                <button
                  onClick={() => setIsFormActive(true)}
                  className="group relative w-full py-8 rounded-3xl border border-pink-500/30 bg-card/50 hover:bg-card transition-all overflow-hidden flex flex-col items-center justify-center gap-3 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-2 text-pink-500 font-bold uppercase tracking-[0.3em] text-xs">
                    <Sparkles size={16} className="animate-pulse" />
                    Experiência Exclusiva
                  </div>
                  <span className="text-2xl font-black tracking-tighter">
                    Mande um E-mail Direto
                  </span>
                  <p className="text-muted-foreground text-sm">Clique para abrir o formulário profissional</p>
                </button>
              </motion.div>
            </motion.div>
          ) : (
            /* VISÃO DO FORMULÁRIO (CHAMADA DO COMPONENTE) */
            <motion.div
              key="form-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="w-full flex flex-col gap-8"
            >
              <header className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Formulário de Contato</h2>
                <p className="text-muted-foreground italic">Isso enviará um e-mail diretamente para Antonio Demarchi.</p>
              </header>

              <ContactForm accessKey="ce53cd00-65c0-484a-afe0-9812d156df7e" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer de Informações Adicionais (Sempre visível abaixo do conteúdo ativo) */}
        <motion.footer 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-4 px-2 border-t border-border/50 pt-8"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-bold text-foreground">CNPJ:</span>
            44.897.847/0001-96
          </div>
          <div className="text-xs text-muted-foreground italic">
            Disponível para propostas de parcerias.
          </div>
        </motion.footer>
      </div>
    </main>
  );
}