"use client"; 
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Botao from '@/components/atoms/Botao-Primary/botao';

// --- Tipagem de Dados (Essencial para este componente) ---
interface HeroData {
    name: string;
    title: string;
    photoUrl: string; // URL da imagem de perfil
    resumeUrl: string; // Link para o currículo
}

// --- Dados Mock (Substitua pelos seus dados reais) ---
const HERO_DATA: HeroData = {
    name: "Antonio Demarchi",
    title: "Software Developer",
    photoUrl: "terno.png", // Placeholder
    resumeUrl: "/resume.pdf",
};

// --- Configurações de animação Framer Motion (Tipadas) ---
// Define a animação de entrada para o container principal
const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1 // Atraso sequencial para os itens internos
        }
    }
};

// Define a animação de entrada para cada elemento de texto/botão
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// --- Componente de Apresentação Principal ---

/**
 * Componente Apresentacao (equivalente ao HeroSection).
 * Exibe a seção inicial de um portfólio com nome, título, foto e links de ação,
 * utilizando animações Framer Motion.
 */
export const Apresentacao = () => {
    return (
        // O fundo escuro e a altura mínima ocupam a tela
        <motion.section
            id="apresentacao"
            // REDUÇÃO DE ALTURA: min-h-[70vh] alterado para min-h-[60vh]
            // Padding vertical ajustado de py-20 para py-16
            //# light: 111827 dark: #F9FAFB #D1C5B0 #19142A #121F28
            className="relative  dark:bg-[#121F28] bg-[#D1C5B0] text-white overflow-hidden flex items-center justify-center py-4 min-h-[60vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            
            {/* CORREÇÃO DE HIDRATAÇÃO: Injeta keyframes com tag <style> nativa para evitar Styled-JSX hash */}
            <style dangerouslySetInnerHTML={{__html: `
                /* Classe de animação para o círculo de fundo */
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1) translate(-50%, -50%); opacity: 0.1; }
                    50% { transform: scale(1.05) translate(-50%, -50%); opacity: 0.15; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}} />
            
            {/* Círculos Abstratos (Aura) - Classes em linha única para consistência */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff5733]/10 animate-pulse-slow"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border border-[#ff5733]/20"></div>
            
            {/* Chevrons Decorativos na Lateral - Classes em linha única para consistência */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-[#ff5733]/30 text-8xl hidden md:block select-none">
                &lt;
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#ff5733]/30 text-8xl hidden md:block select-none">
                &gt;
            </div>


            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between w-full z-10">
                
                {/* Conteúdo Esquerdo: Texto e Botões */}
                <div className="text-center md:text-left md:w-1/2 space-y-4 md:pr-8">
                    
                    <motion.p variants={itemVariants} className="text-xl text-gray-100">
                        Hello <span className="text-blue-800">.</span> {/* text-[#ff5733] dark:*/}
                    </motion.p>

                    <motion.div variants={itemVariants} className="relative inline-block">
                        {/* Linha Laranja/Vermelha de Destaque */}
                        <span className="absolute left-0 bottom-[-5px] w-16 h-1 bg-blue-800"></span>
                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-black dark:text-slate-200">
                            I am {HERO_DATA.name}
                        </h2>
                    </motion.div>
                    
                    <motion.h3 variants={itemVariants} className="text-5xl text-black md:text-6xl font-extrabold pt-2 dark:text-slate-200">
                        {HERO_DATA.title}
                    </motion.h3>

                    {/* Botões de Ação 
                    
                    <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-8">
                        <motion.a
                            href="#projetos"
                            className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:bg-[#e04e2d] transition-colors transform hover:scale-[1.02] flex items-center justify-center"
                        >
                            Meus projetos? <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.a>
                        <motion.a
                            href={HERO_DATA.resumeUrl}
                            target="_blank"
                            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors transform hover:scale-[1.02] flex items-center justify-center"
                        >
                            Resumo
                        </motion.a>
                    </motion.div>*/}
                    <motion.div>
                            <div className="flex space-x-4">
                                <Botao variant="primary" onClick={() => console.log('Navegar para projetos')}
                                    >Meus projetos  <ArrowRight className="ml-2 w-4" />
                                </Botao>
                                <Botao variant="secondary">
                                    Resumo
                                </Botao>
                            </div>
                        </motion.div>
                    <motion.div>
                       
                 

                    </motion.div>
                </div>

                {/* Conteúdo Direito: Imagem de Perfil */}
                <motion.div
                    variants={itemVariants}
                    className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end"
                >   {/* Borda abaixo */}
                    <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-blue-800 dark:border-slate-900 shadow-xl bg-slate-200 dark:bg-[#000000]">
                        {/* Imagem de Perfil */}
                        <img
                            src={HERO_DATA.photoUrl}
                            alt={`Foto de Perfil de ${HERO_DATA.name}`}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Camada de Efeito Abstrato (para replicar a cor na borda) */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-900/10 to-transparent flex items-center justify-center">
                            {/* Círculo interno para replicar o efeito de aura */}
                            <div className="w-full h-full rounded-full border-4 border-[#ff5733]/20 absolute"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};