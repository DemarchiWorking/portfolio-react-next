"use client";

import React, { useState } from 'react';
import { FaCode, FaMobileAlt, FaCloud, FaGithub } from 'react-icons/fa';
import { IconType } from 'react-icons'; 
import { motion, AnimatePresence } from 'framer-motion';

const IconMap: { [key: string]: IconType } = {
    FaCode, 
    FaMobileAlt, 
    FaCloud,
};

// --- Dados das Instituições ---
const instituicoesData = [
    {
        id: 'ifrj',
        nome: 'IFRJ',
        artefato: 'Óculos',
        img: '/oculos.png',
        logo: '/ifrj-logo.png',
        titulo: 'Técnico em Informática para Internet',
        descricao: 'Base sólida em desenvolvimento web e infraestrutura iniciada em 2013.',
        conquista: 'Formação Técnica Federal'
    },
    {
        id: 'eb',
        nome: 'Exército',
        artefato: 'Coturno',
        img: '/coturno.png',
        logo: '/eb-logo.png',
        titulo: 'Serviço Militar',
        descricao: 'Desenvolvimento de resiliência, liderança, hierarquia e disciplina estratégica.',
        conquista: 'Honra ao Mérito'
    },
    {
        id: 'infnet',
        nome: 'Infnet',
        artefato: 'Anel',
        img: '/anel-engenharia.png',
        logo: '/infnet-lg.png',
        titulo: 'Engenharia de Software',
        descricao: 'Bacharelado focado em arquitetura, backend e qualidade de software.',
        conquista: 'Bacharel em Engenharia'
    },
    {
        id: 'fiap',
        nome: 'FIAP',
        artefato: 'Caneta',
        img: '/caneta.png',
        logo: '/fiap-logo.png',
        titulo: 'Pós-Tech DevOps & Cloud',
        descricao: 'Especialização em AWS, Kubernetes e automação de infraestrutura escalável.',
        conquista: 'Pós-Graduação em Cloud'
    }
];

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
<div className="text-blue-600 dark:text-black dark:text-coral-destaque text-2xl p-2 border border-gray-600/50 dark:border-coral-destaque/50 rounded-lg">                    {IconComponent && <IconComponent />}
                </div>
                <p className="text-gray-800 dark:text-white text-lg font-medium">{title}</p>
            </div>
        </div>
    );
};

const StatsItem: React.FC<{ value: string; label: string }> = ({ value, label }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <span className="text-blue-600 dark:text-gray-200 text-3xl font-bold mb-1 whitespace-nowrap">
                {value}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{label}</span>
        </div>
    );
};

// --- Componente Principal ---

export const Sobre = () => {
    const [ativo, setAtivo] = useState<string | null>(null);
    const [isHoveredAWS, setIsHoveredAWS] = useState(false);

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
            description: "Plataforma completa de Vitrine Digital para Artesãos, utilizando tecnologias modernas (Java, Angular).",
            tags: ["Angular", "Java", "Tailwind", "Next"],
            image: "/Mobile.png",
            linkRepo: "https://github.com/DemarchiWorking/associacao-moradores-java",
            linkLive: "https://associacao-moradores-java.vercel.app/bazar",
        },
        {
            title: "Plataforma Ensino Programação Gamificada",
            description: "Plataforma Educacional com pegada gamificada envolvendo XP, rankings e quests.",
            tags: ["Angular", "Gamificação"],
            image: "/Pagina-Inicial.png",
            linkRepo: "https://github.com/DemarchiWorking",
            linkLive: "https://devlivery-portfolio-pb-frontend-nnq.vercel.app/inicio",
        },
        {
            title: "App Infraestrutura - Kubernetes",
            description: "Controle de funcionalidades em tempo real (Feature Toggles) para usuários específicos.",
            tags: ["IaC", "Kubernetes", "Docker", "Cloud"],
            image: "/desenho.png",
            linkRepo: "https://github.com/DemarchiWorking/toggle-master-microservice-kubernetes",
            linkLive: "#",
        }
    ];

    const instSelecionada = instituicoesData.find(i => i.id === ativo);

    return (
        <section className="bg-white dark:bg-[#192328] py-16 md:py-24 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <div className="flex flex-col pr-0 lg:pr-10">
                        {timelineData.map((item, index) => (
                            <TimelineItem
                                key={item.title}
                                title={item.title}
                                icon={item.icon}
                                isLast={index === timelineData.length - 1}
                            />
                        ))}

                        <div className="mt-10">
                            <section className="instituicoes-section flex flex-col items-center lg:items-start">
                                <h3 className="text-gray-500 dark:text-gray-400 font-black text-xs tracking-[0.2em] mb-6 uppercase w-full text-center lg:text-left">
                                    ARTEFATOS ACADÊMICOS
                                </h3>
                                
                                <div className="logos-container flex justify-center gap-4 md:gap-6 bg-gray-50 dark:bg-black/20 p-6 rounded-2xl border border-gray-100 dark:border-white/5 w-full">
                                    {instituicoesData.map((inst) => (
                                        <div 
                                            key={inst.id}
                                            onClick={() => setAtivo(ativo === inst.id ? null : inst.id)}
                                            className="flex flex-col items-center cursor-pointer group flex-1"
                                        >
                                            <motion.img 
                                                layout
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                src={ativo === inst.id ? inst.logo : inst.img} 
                                                alt={inst.nome} 
                                                className={`w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-300 ${ativo && ativo !== inst.id ? 'grayscale opacity-20' : 'grayscale-0 opacity-100'}`}
                                            />
                                            <span className={`text-[10px] mt-3 font-bold uppercase tracking-wider text-center transition-colors ${ativo === inst.id ? 'text-blue-600 dark:text-coral-destaque' : 'text-gray-400'}`}>
                                                {inst.nome}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <AnimatePresence>
                                    {ativo && instSelecionada && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "circOut" }}
                                            className="overflow-hidden mt-6 w-full"
                                        >
                                            <div className="bg-blue-600/5 dark:bg-coral-destaque/5 border-l-4 border-blue-600 dark:border-coral-destaque p-6 rounded-r-xl flex items-center gap-6">
                                                <img src={instSelecionada.img} alt={instSelecionada.artefato} className="w-20 h-20 object-contain hidden md:block" />
                                                <div>
                                                    <h4 className="text-gray-900 dark:text-white font-bold text-xl mb-1">{instSelecionada.titulo}</h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{instSelecionada.descricao}</p>
                                                    <div className="flex flex-wrap items-center gap-3">
                                                        <span className="text-[10px] font-black bg-blue-600 dark:bg-coral-destaque text-white px-2 py-1 rounded uppercase tracking-tighter">
                                                            {instSelecionada.artefato}
                                                        </span>
                                                        <span className="text-xs font-bold text-blue-600 dark:text-coral-destaque">
                                                            ✓ {instSelecionada.conquista}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </section>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white font-bold mb-6">Sobre</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                            Engenheiro de Software com 8 anos de experiência prática na área, especializado em backend <span className="text-gray-100 dark:text-coral-destaque font-semibold">(.NET)</span> e 
                            
                            <span 
    onMouseEnter={() => setIsHoveredAWS(true)}
    onMouseLeave={() => setIsHoveredAWS(false)}
    className="dark:text-coral-destaque font-semibold cursor-help transition-all duration-300"
>
    {isHoveredAWS ? " cursando Pós Tech DevOps e Arquitetura Cloud (FIAP)" : " arquitetura de nuvem (AWS)"}
</span>


                            <br></br>Minha abordagem é Full-Cycle: atuo desde a concepção de interfaces intuitivas até o provisionamento 
                            de infraestrutura escalável, integrando automação e observabilidade através de uma 
                             cultura <span className="text-gray-100 dark:text-coral-destaque font-semibold"> DevOps </span> consolidada.
                        </p>
                        <p>
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Foco em Resultados</h3> 
                        <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed">
                            Atuo com modelos de parceria baseados em Retorno sobre o Investimento (ROI), conectando tecnologia ao sucesso financeiro.
                        </p>
                        <div className="flex justify-between items-center gap-4 py-6 border-t border-b border-gray-100 dark:border-gray-700/50">
                            {statsData.map((item) => (
                                <StatsItem key={item.label} value={item.value} label={item.label} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- Seção de Projetos --- */}
                <div className="text-center mt-24 md:mt-36 mb-16">
                    <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white font-bold mb-4">Projetos</h2>
                    <div className="w-16 h-1 mx-auto bg-blue-600 dark:bg-coral-destaque relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-3 h-3 rounded-full bg-blue-600 dark:bg-coral-destaque"></div>
                    </div>
                </div>

                <div className="space-y-32">
                    {projetosData.map((projeto, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                        >
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1e293b] shadow-xl">
                                    <img 
                                        src={projeto.image} 
                                        alt={projeto.title} 
                                        className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
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
                                <h3 className="text-3xl text-gray-900 dark:text-white font-bold mb-4">{projeto.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">{projeto.description}</p>
                                <div className="flex items-center gap-6">
                                    <a 
                                        href={projeto.linkRepo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-coral-destaque transition-colors font-bold uppercase text-xs tracking-widest"
                                    >
                                        <FaGithub size={20} /> Repositório
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};