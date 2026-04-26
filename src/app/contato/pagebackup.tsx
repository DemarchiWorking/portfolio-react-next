"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, ExternalLink, ArrowLeft, Instagram } from "lucide-react";
import { ThemeToggle } from "@/components/molecules/theme-toggle";

export default function Contato() {
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

  // Variantes para animação em cascata
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

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
      
      {/* Header com Navegação */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl flex justify-between items-center mb-12"
      >
        <button 
          onClick={() => window.history.back()}
          className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Voltar
        </button>
        <ThemeToggle />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl"
      >
        <motion.header variants={itemVariants} className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Vamos conversar?
          </h1>
          <p className="text-lg text-muted-foreground">
            Seja para um novo projeto ou apenas para trocar uma ideia sobre tecnologia.
          </p>
        </motion.header>

        {/* Estrutura de Tabela Moderna */}
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
                    {/* Coluna Descrição */}
                    <td className="px-6 py-5">
                      <div className={`flex items-center gap-3 font-medium transition-colors ${item.color}`}>
                        {item.icon}
                        {item.label}
                      </div>
                    </td>
                    
                    {/* Coluna Valor */}
                    <td className="px-6 py-5">
                      <span className="text-sm text-muted-foreground font-mono">
                        {item.value}
                      </span>
                    </td>

                    {/* Coluna Ação */}
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


        {/* Footer de Informações Adicionais */}
        <motion.footer 
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 px-2"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-bold text-foreground">CNPJ:</span>
            44.897.847/0001-96
          </div>
          <div className="text-xs text-muted-foreground italic">
            Disponível para propostas de parcerias.
          </div>
        </motion.footer>
      </motion.div>
    </main>
  );
}