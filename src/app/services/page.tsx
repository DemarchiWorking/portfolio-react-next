"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  XCircle,
  Heart,
  Monitor,
  Code2,
  TrendingUp,
  Handshake,
  AlertCircle,
  MessageCircle
} from "lucide-react";

const SERVICES = [
  {
    id: 0,
    title: "Voluntário",
    description: "Mentoria para iniciantes em programação, suporte técnico para ONGs ou colaboração em projetos de impacto social e educacional.",
    price: "Gratuito",
    available: true,
    icon: <Heart size={48} className="text-red-500" />,
    image: "https://medicinasa.com.br/wp-content/uploads/2019/08/volunteer2.jpg",
  },
  {
    id: 1,
    title: "Parceria",
    description: "Colaboração em projetos open-source ou MVPs inovadores onde eu possa contribuir com arquitetura backend e infraestrutura Cloud.",
    price: "Co-lab",
    available: true,
    icon: <Handshake size={48} className="text-purple-500" />,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Consultoria de TI",
    description: "Análise estratégica de infraestrutura e otimização de custos em nuvem (FinOps). Atualmente pausado para novos clientes externos.",
    price: "Indisponível",
    available: false,
    icon: <Monitor size={48} className="text-primary" />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Construção de Sites",
    description: "Desenvolvimento de ecossistemas web modernos. No momento, não estou aceitando novos projetos de freelance.",
    price: "Indisponível",
    available: false,
    icon: <Code2 size={48} className="text-blue-500" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Marketing para Vendas",
    description: "Estratégias de funil e automação de conversão. Serviço pausado temporariamente.",
    price: "Indisponível",
    available: false,
    icon: <TrendingUp size={48} className="text-orange-500" />,
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function Servicos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentService = SERVICES[currentIndex];

  const nextSlide = () => setCurrentIndex((prev) => (prev === SERVICES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? SERVICES.length - 1 : prev - 1));

  const handleContactClick = () => {
    window.open("https://www.linkedin.com/in/demarchi1", "_blank");
    window.open("https://wa.me/24992984198", "_blank");
  };

  const fadeVariants: Variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 lg:p-20">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* IMAGEM PRINCIPAL COM MOTION */}
        <div className="relative group overflow-hidden rounded-3xl aspect-square border border-border shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentService.id}
              src={currentService.image} 
              alt={currentService.title}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex items-end p-8">
            <motion.div 
              key={currentService.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
            >
              {currentService.icon}
            </motion.div>
          </div>
        </div>

        {/* CONTEÚDO COM MOTION */}
        <div className="flex flex-col space-y-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentService.id} 
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${currentService.available ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                {currentService.available ? (
                  <><Unlock size={14} /> Disponível</>
                ) : (
                  <><Lock size={14} /> Indisponível</>
                )}
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-4">
                {currentService.title}
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {currentService.description}
              </p>

              {!currentService.available && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-secondary/30 border-l-4 border-primary p-4 rounded-r-xl mb-6"
                >
                  <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1 uppercase">
                    <AlertCircle size={16} /> Nota Importante
                  </div>
                  <p className="text-sm italic text-muted-foreground">
                    Atualmente, estou me dedicando de forma integral ao projeto nstech. Por esse motivo, minha agenda está fechada para novos contratos, aceitando apenas parcerias estratégicas e trabalhos voluntários.
                  </p>
                </motion.div>
              )}

              {currentService.available && (
                <div className="mb-6">
                  <button
                    onClick={handleContactClick}
                    className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-foreground py-4 text-background transition-all hover:bg-blue-600 hover:text-white active:scale-[0.98] shadow-xl overflow-hidden cursor-pointer"
                  >
                    <MessageCircle size={22} className="transition-transform group-hover:rotate-12 group-hover:scale-110" />
                    <div className="relative font-black uppercase tracking-widest text-sm">
                      <span className="inline-block transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                        Tenho Interesse
                      </span>
                      <span className="absolute inset-0 transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                        Agendar Conversa
                      </span>
                    </div>
                  </button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-secondary/50 border border-border">
                  <span className="block text-[10px] text-muted-foreground uppercase font-black mb-1 tracking-widest">Investimento</span>
                  <span className="text-xl font-mono font-bold text-primary">{currentService.price}</span>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/50 border border-border">
                  <span className="block text-[10px] text-muted-foreground uppercase font-black mb-1 tracking-widest">Disponibilidade</span>
                  <span className="flex items-center gap-2 text-sm font-bold">
                    {currentService.available ? (
                      <><CheckCircle2 size={16} className="text-green-500" /> Aberta</>
                    ) : (
                      <><XCircle size={16} className="text-red-500" /> Fechada</>
                    )}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLES */}
          <div className="flex items-center gap-4 pt-6">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-all active:scale-90 cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex-1 h-[2px] bg-border relative">
              <motion.div 
                className="absolute h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / SERVICES.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <button 
              onClick={nextSlide}
              className="p-4 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-all active:scale-90 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* FOOTER CONTATO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 p-6 rounded-2xl bg-secondary/30 border border-border"
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">
            Para propostas ou dúvidas técnicas, sinta-se à vontade para entrar em contato:
          </p>
          <div className="space-y-2">
            <p className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <span className="text-primary opacity-50 mr-2">personal:</span> 
              demarchiworking@gmail.com
            </p>
            <p className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <span className="text-primary opacity-50 mr-2">academic:</span> 
              antonio.demarchi@al.infnet.edu.br
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}