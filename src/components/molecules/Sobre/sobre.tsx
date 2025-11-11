// src/components/Sobre.tsx
"use client";

import React from 'react';
// Importação dos ícones. Você pode precisar instalar este pacote: npm install react-icons
import { FaCode, FaMobileAlt, FaCloud } from 'react-icons/fa';
// Importação de outro ícone para as estatísticas (opcional, mas bom para a estrutura)
import { IconType } from 'react-icons'; 

// Mapeamento dos nomes dos ícones para os componentes reais do React
const IconMap: { [key: string]: IconType } = {
    FaCode, 
    FaMobileAlt, 
    FaCloud,
};

// --- Sub-Componentes ---

// Item da Linha do Tempo (Lado Esquerdo)
interface TimelineItemProps {
    title: string;
    icon: string;
    isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, icon, isLast }) => {
    const IconComponent = IconMap[icon];
    
    // As classes 'text-coral-destaque' e 'bg-fundo-escuro' assumem que você configurou as cores customizadas no tailwind.config.js
    return (
        <div className="flex items-start mb-8 relative">
            
            {/* Linha Vertical e Círculo */}
            <div className="flex flex-col items-center mr-6">
                <div className="w-4 h-4 rounded-full bg-coral-destaque border-2 border-fundo-escuro z-10"></div>
                {/* A linha só aparece se não for o último item */}
                {!isLast && (
                    <div className="w-0.5 h-full bg-coral-destaque mt-[-4px]"></div>
                )}
            </div>

            {/* Ícone e Texto */}
            <div className="flex items-center space-x-4 pt-0.5">
                <div className="text-coral-destaque text-2xl p-2 border border-coral-destaque/50 rounded-lg">
                    {IconComponent && <IconComponent />}
                </div>
                <p className="text-white text-lg font-medium">{title}</p>
            </div>
        </div>
    );
};

// Item de Estatística (Lado Direito, Abaixo do Texto)
interface StatsItemProps {
    value: string;
    label: string;
}

const StatsItem: React.FC<StatsItemProps> = ({ value, label }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <span className="text-coral-destaque text-3xl font-bold mb-1 whitespace-nowrap">
                {value}
            </span>
            <span className="text-gray-400 text-sm">{label}</span>
        </div>
    );
};


// --- Componente Principal ---

export const Sobre = () => {
    
    // Os mesmos dados definidos acima
    const timelineData = [
        { title: 'Engenheiro de Software', icon: 'FaCode' },
        { title: 'Desenvolvedor de Aplicativos', icon: 'FaMobileAlt' },
        { title: 'Analista DevOps e Cloud', icon: 'FaCloud' },
    ];

    const statsData = [
        { value: '100 +', label: 'Projetos GitHub' },
        { value: '3', label: 'Formações Concluídas' },
        { value: '7 +', label: 'Anos de Experiência' },
    ];


    return (
        // Seção Principal - Fundo Escuro
        <section className="bg-[#192328] py-16 md:py-24">
            
            {/* Container Centralizado e Limitado */}
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Linha de Conteúdo Principal (Timeline vs. Info) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* 1. Coluna da Linha do Tempo (Esquerda) */}
                    <div className="flex flex-col pr-0 lg:pr-10">
                        {timelineData.map((item, index) => (
                            <TimelineItem
                                key={item.title}
                                title={item.title}
                                icon={item.icon}
                                isLast={index === timelineData.length - 1}
                            />
                        ))}
                    </div>

                    {/* 2. Coluna Sobre Mim e Estatísticas (Direita) */}
                    <div>
                        {/* Título Principal */}
                        <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
                            Sobre
                        </h2>

                        {/* Parágrafo de Texto */}
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            Engenheiro de Software com 7 anos de experiência prática e 12 anos de imersão na área, minha trajetória incluiu contribuições diretas para o sucesso de empresas líderes em seus respectivos setores.
                         </p>

                        {/* Seção de Estatísticas */}
                        <div className="flex justify-between items-center gap-4 py-4 border-t border-b border-gray-700/50">
                            {statsData.map((item) => (
                                <StatsItem 
                                    key={item.label}
                                    value={item.value} 
                                    label={item.label} 
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Seção "Projects" (separada por um HR visual) */}
                <div className="text-center mt-20 md:mt-32">
                    <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
                        Projetos
                    </h2>
                    {/* Linha e Indicador Visual (como na imagem) */}
                    <div className="w-16 h-1 mx-auto bg-coral-destaque relative">
                        {/* Círculo da linha de separação */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-3 h-3 rounded-full bg-coral-destaque"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};