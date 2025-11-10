import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- Tipagem de Dados (Essencial para este componente) ---
interface HeroData {
    name: string;
    title: string;
    photoUrl: string; // URL da imagem de perfil
    resumeUrl: string; // Link para o currículo
}

// --- Dados Mock (Substitua pelos seus dados reais) ---
const HERO_DATA: HeroData = {
    name: "Jensen",
    title: "Software Developer",
    photoUrl: "https://placehold.co/320x320/333/fff?text=Sua+Foto+Aqui", // Placeholder
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

// ... imports, interfaces e variants (mantidos iguais)

export const Apresentacao = () => {
    return (
        <motion.section
            id="apresentacao"
            // REMOVIDO: min-h-screen
            // ALTERADO: Adicionado pt-32 para dar espaço no topo
            // REMOVIDO: flex items-center justify-center
            className="relative bg-[#1a1a1a] text-white overflow-hidden pt-32 pb-20" 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* ... Círculos e Chevrons (mantidos iguais) */}

            {/* CONTAINER PRINCIPAL: Alteramos o alinhamento aqui */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start justify-between w-full z-10">
                
                {/* Conteúdo Esquerdo: Texto e Botões */}
                {/* ALTERADO: Espaçamento de texto ajustado e cor da linha de destaque alterada para a cor primária da imagem (vermelho/laranja escuro) */}
                <div className="text-left md:w-1/2 space-y-1 md:pr-8"> 
                    
                    <motion.p variants={itemVariants} className="text-md text-gray-300">
                        Hello <span className="text-[#ff5733]">.</span>
                    </motion.p>

                    {/* I am Jensen */}
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-semibold leading-tight text-gray-100">
                        I am **{HERO_DATA.name}**
                    </motion.h2>

                    {/* Software Developer (Linha de Destaque) */}
                    <motion.div variants={itemVariants} className="relative inline-block mt-1">
                        {/* Linha de Destaque (A linha na imagem é mais curta e fica ABAIXO do título) */}
                        <h3 className="text-5xl md:text-6xl font-extrabold text-white">
                            **{HERO_DATA.title}**
                        </h3>
                        {/* A linha de destaque na imagem tem a cor primária */}
                        <span className="absolute left-0 bottom-[-5px] w-2/3 h-1 bg-[#ff5733]"></span>
                    </motion.div>


                    {/* Botões de Ação */}
                    {/* ALTERADO: Espaçamento para o topo e margem ajustada */}
                    <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                        <motion.a
                            href="#projetos"
                            // COR do Botão Primário: Ajustada para um tom mais escuro/sutil, como na imagem.
                            className="px-6 py-2 bg-[#ff5733] text-white font-semibold rounded-md shadow-lg hover:bg-[#e04e2d] transition-colors transform hover:scale-[1.02] flex items-center justify-center text-sm"
                        >
                            Got a project? <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.a>
                        <motion.a
                            href={HERO_DATA.resumeUrl}
                            target="_blank"
                            // COR do Botão Secundário: Ajustada para um contorno mais escuro, quase preto, com texto em um tom de cinza.
                            className="px-6 py-2 border-2 border-gray-600 text-gray-400 font-semibold rounded-md hover:bg-gray-800 hover:text-white transition-colors transform hover:scale-[1.02] flex items-center justify-center text-sm"
                        >
                            My resume
                        </motion.a>
                    </motion.div>
                </div>

                {/* Conteúdo Direito: Imagem de Perfil */}
                <motion.div
                    variants={itemVariants}
                    // ALTERADO: Para alinhar a imagem mais próxima do centro verticalmente, use md:self-center
                    className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end md:self-center"
                >
                    {/* ... Restante da Div da Imagem (mantida igual) ... */}
                </motion.div>
            </div>
        </motion.section>
    );
};