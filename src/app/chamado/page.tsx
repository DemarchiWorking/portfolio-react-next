"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { ContactForm } from "@/components/organisms/ContatoForm/ContactForm";

export default function Chamado() {
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
      <div className="w-full max-w-4xl">
        
        <ThemeToggle />
        <AnimatePresence mode="wait">
          <motion.div
            key="form-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="w-full flex flex-col gap-8"
          >
            <header className="relative space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter">Formulário de Contato</h2>
                  <p className="text-muted-foreground italic">
                    Isso enviará um e-mail diretamente para Antonio Demarchi.
                  </p>
                </div>
                
                {/* Link do LinkedIn posicionado à direita */}
                <a 
                  href="https://www.linkedin.com/in/demarchi1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 font-bold hover:underline transition-all"
                >
                  LinkedIn
                </a>
              </div>
            </header>

            {/* Inserindo a chave do Web3Forms que você já usa */}
            <ContactForm accessKey="ce53cd00-65c0-484a-afe0-9812d156df7e" />
            
          </motion.div>
        </AnimatePresence>

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