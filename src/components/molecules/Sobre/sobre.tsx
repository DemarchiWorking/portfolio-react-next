// src/components/Sobre.tsx
"use client";

import React from 'react';
import { FaCode, FaMobileAlt, FaCloud, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { IconType } from 'react-icons'; 

const IconMap: { [key: string]: IconType } = {
    FaCode, 
    FaMobileAlt, 
    FaCloud,
};

// --- Sub-Componentes ---

const TimelineItem: React.FC<{ title: string; icon: string; isLast: boolean }> = ({ title, icon, isLast }) => {
    const IconComponent = IconMap[icon];
    return (
        <div className="flex items-start mb-8 relative">
            <div className="flex flex-col items-center mr-6 ">
                {/* Azul no light, Coral no dark */}
                <div className="w-4 h-4 bg-blue-600 dark:bg-gray-900 rounded-full bg-blue-600 dark:bg-coral-destaque border-2 border-white dark:border-[#192328] z-10"></div>
                {!isLast && (
                    <div className="w-0.5 h-full bg-blue-600 dark:bg-coral-destaque mt-[-4px]"></div>
                )}
            </div>
            <div className="flex items-center space-x-4 pt-0.5">
                <div className="text-blue-600 dark:text-black dark:text-coral-destaque text-2xl p-2 border border-gray-600/50 dark:border-coral-destaque/50 rounded-lg">
                    {IconComponent && <IconComponent />}
                </div>
                {/* Preto no light, Branco no dark */}
                <p className="text-black dark:text-white text-lg font-medium">{title}</p>
            </div>
        </div>
    );
};

const StatsItem: React.FC<{ value: string; label: string }> = ({ value, label }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <span className="text-blue-600 dark:text-gray-300 dark:text-coral-destaque text-3xl font-bold mb-1 whitespace-nowrap">
                {value}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">{label}</span>
        </div>
    );
};

// --- Componente Principal ---

export const Sobre = () => {
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

    const projetosData = [
        {
            title: "Plataforma E-commerce Arte e Cultura",
            description: "Plataforma completa de Vitrine Digital para Artesãos, utilizando tecnologias modernas (Java, Angular). O sistema foi projetado para permitir que múltiplos artesãos tenham seus próprios perfis e gerenciem seus catálogos de produtos de forma independente, centralizando a produção local em um portal único e profissional.",
            tags: ["Angular", "Java", "Tailwind", "Next"],
            image: "/Mobile.png",
            linkRepo: "https://github.com/DemarchiWorking/associacao-moradores-java",
            linkLive: "https://associacao-moradores-java.vercel.app/bazar",
            pdf: "/Vitrine-Artesanato-Digital.pdf"
        },{
            title: "Plataforma Ensino Programação Gamifigada com Portfólio",
            description: "Plataforma Educacional com uma pegada gamificada para complementar uma plataforma existente com nome alunos.",
            tags: ["Angular", "Backend Incomplete"],
            image: "/Pagina-Inicial.png",
            linkRepo: "/Pagina-Inicial.png",
            linkLive: "https://devlivery-portfolio-pb-frontend-nnq.vercel.app/inicio",
            pdf: "/antonio_demarchi_PB_Engenharia_Disciplinada.pdf"
        },
        {
            title: "App Infraestrutura - Kubernetes - Cloud - IaC",
            description: "Permitir o controle de funcionalidades em tempo real (Feature Toggles) para usuários específicos, eliminando o risco e a demora de novos deploys em produção, garantindo a agilidade do time de produto.",
            tags: ["Infraestrutura c/ Código", "Kubernetes", "Docker", "Cloud"],
            image: "/desenho.png",
            linkRepo: "https://github.com/DemarchiWorking/toggle-master-microservice-kubernetes",
            linkLive: "#",
            pdf: "/DevOps.pdf"
        }
    ];

    return (
        // Branco no light, Cor original no dark
        <section className="bg-white dark:bg-[#192328] py-16 md:py-24 transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* 1. SEÇÃO SOBRE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ">
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

                    <div>
                        <h2 className="text-4xl md:text-5xl text-black dark:text-white font-bold mb-6">Sobre</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                            Engenheiro de Software com 7 anos de experiência prática e 12 anos de imersão na área, minha trajetória incluiu contribuições diretas para o sucesso de empresas líderes em seus respectivos setores.
                        </p>
                        <div className="flex justify-between items-center gap-4 py-4 border-t border-b border-gray-200 dark:border-gray-700/50">
                            {statsData.map((item) => (
                                <StatsItem key={item.label} value={item.value} label={item.label} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. CABEÇALHO DE PROJETOS */}
                <div className="text-center mt-20 md:mt-32 mb-20">
                    <h2 className="text-4xl md:text-5xl text-black dark:text-white font-bold mb-4">Projetos</h2>
                    <div className="w-16 h-1 mx-auto bg-blue-600 dark:bg-coral-destaque relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-3 h-3 rounded-full bg-blue-600 dark:bg-coral-destaque"></div>
                    </div>
                </div>

                {/* 3. LISTA DE PROJETOS */}
                <div className="space-y-24">
                    {projetosData.map((projeto, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
                        >
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#1e293b] shadow-2xl">
                                    <img 
                                        src={projeto.image} 
                                        alt={projeto.title} 
                                        className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 flex flex-col items-start">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {projeto.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-blue-600/10 dark:bg-coral-destaque/10 text-blue-600 dark:text-gray-200 dark:text-coral-destaque border border-blue-600/20 dark:border-coral-destaque/20 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={projeto.linkLive}>
                                    <h3 className="text-3xl text-black dark:text-white font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-coral-destaque transition-colors">
                                        {projeto.title}
                                    </h3>
                                </a>
                                
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                    {projeto.description}
                                </p>

                                <div className="flex items-center gap-6">
                                    <a href={projeto.linkRepo} className="flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-coral-destaque transition-colors font-semibold uppercase text-sm tracking-wider">
                                        <FaGithub size={18} /> Repositório
                                    </a>

                                    {projeto.pdf !== "" && (
                                        <a 
                                            href={projeto.pdf} 
                                            download 
                                            className="flex items-center gap-2 text-gray-200 dark:text-coral-destaque border border-gray-200/40 dark:border-coral-destaque/40 hover:bg-blue-600 dark:hover:bg-coral-destaque hover:text-white px-3 py-1 rounded transition-all font-semibold uppercase text-[12px] tracking-wider"
                                        >
                                            Download Documentação PDF
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};