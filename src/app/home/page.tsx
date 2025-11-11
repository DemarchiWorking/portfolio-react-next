"use client";

import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


import { useEffect, useState } from "react";
import { User, Code, Briefcase, Mail, Github, Linkedin, Sun, Moon } from 'lucide-react';

// --- Configuração e Dados Mock (Substitua pelos seus dados reais) ---
const PORTFOLIO_DATA = {
    name: "Antonio Demarchi",
    title: "Engenheiro Software | .NET | Angular | AWS | DevOps",
    bio: "Mais de 8 anos de experiência transformando wireframes complexos em experiências de usuário fluidas e acessíveis. Especialista em arquitetura de componentes React escaláveis, otimização de performance e liderança técnica.",
    contact: {
        email: "seu.email@exemplo.com",
        github: "https://github.com/seuusuario",
        linkedin: "https://linkedin.com/in/seuusuario"
    },
    skills: [
        { icon: 'React', name: 'React.js & Next.js', level: 95 },
        { icon: 'Tailwind', name: 'Tailwind CSS & Design Systems', level: 90 },
        { icon: 'TS', name: 'TypeScript', level: 85 },
        { icon: 'Framer', name: 'Framer Motion & UX Animation', level: 90 },
        { icon: 'Testing', name: 'Jest, React Testing Library', level: 75 },
    ],
    experience: [
        { role: "Senior Frontend Engineer", company: "Tech Solutions Co.", period: "2020 - Presente", description: "Liderança técnica em projetos de larga escala, focando em performance (Core Web Vitals) e acessibilidade (WCAG)." },
        { role: "Frontend Developer", company: "Innovation Studio", period: "2017 - 2020", description: "Desenvolvimento de PWA e migração de jQuery para React, resultando em melhoria de 40% no TTFB." },
    ]
};

// Configurações de animação Framer Motion
const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// --- Componentes de UI Reutilizáveis ---

// Simulação de botão para Dark/Light mode (substituir por next-themes no projeto real)
const ThemeToggle = () => (
    <button
        className="p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
    </button>
);

// Componente de Skill Bar
const SkillBar = () => (
    <motion.div variants={itemVariants} className="mb-4">
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300"> Antonio D</span>
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">90%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `90%` }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="bg-indigo-500 h-2 rounded-full shadow-md"
            ></motion.div>
        </div>
    </motion.div>
);

// --- Componente Principal ---
const App = () => {
    // Estado para simular o Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
        // Em um projeto real Next.js, você usaria 'next-themes' aqui
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    const containerClass = isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-800';

    return (
        <div className={`min-h-screen font-inter transition-colors duration-500 ${containerClass}`}>
            <motion.header
                className="sticky top-0 z-10 p-4 shadow-md backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b dark:border-gray-700"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 120 }}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{PORTFOLIO_DATA.name.split(' ')[0]}<span className="text-gray-900 dark:text-white">.dev</span></h1>
                    <nav className="hidden md:flex space-x-6 text-sm font-medium">
                        {['Sobre', 'Skills', 'Experiência', 'Contato'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-500 transition-colors">
                                {item}
                            </a>
                        ))}
                    </nav>
                    <ThemeToggle />
                </div>
            </motion.header>

            <main className="max-w-7xl mx-auto p-4 md:p-8">
                {/* --- SEÇÃO HERO / SOBRE --- */}
                <motion.section
                    id="sobre"
                    className="pt-16 pb-12 md:pb-20 border-b dark:border-gray-800"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-x-12">
                        {/* Imagem de Perfil Placeholder */}
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-indigo-500 flex items-center justify-center text-3xl font-bold text-white flex-shrink-0 shadow-xl border-4 border-indigo-200 dark:border-indigo-800">
                            {PORTFOLIO_DATA.name.charAt(0)}
                        </div>
                        
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-2 text-gray-900 dark:text-white">{PORTFOLIO_DATA.name}</h2>
                            <h3 className="text-xl md:text-2xl font-medium text-indigo-500 mb-6">{PORTFOLIO_DATA.title}</h3>
                            <p className="max-w-3xl text-gray-600 dark:text-gray-400 leading-relaxed">
                                {PORTFOLIO_DATA.bio}
                            </p>
                            <div className="mt-8 flex justify-center md:justify-start space-x-6">
                                <motion.a 
                                    variants={itemVariants}
                                    href={PORTFOLIO_DATA.contact.linkedin} 
                                    target="_blank" 
                                    className="p-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition-colors shadow-lg"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </motion.a>
                                <motion.a 
                                    variants={itemVariants}
                                    href={PORTFOLIO_DATA.contact.github} 
                                    target="_blank" 
                                    className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors shadow-lg dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
                                    aria-label="GitHub"
                                >
                                    <Github size={20} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* --- SEÇÃO SKILLS --- */}
                <section id="skills" className="py-12 md:py-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-900 dark:text-white">
                        <Code className="mr-3 text-indigo-500" /> Habilidades Técnicas
                    </h2>
                    <motion.div 
                        className="grid md:grid-cols-2 gap-x-12 gap-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {PORTFOLIO_DATA.skills.map((skill) => (
                            <SkillBar key={skill.name}  />
                        ))}
                    </motion.div>
                </section>
                
                {/* --- SEÇÃO EXPERIÊNCIA --- */}
                <section id="experiencia" className="py-12 md:py-16 border-t dark:border-gray-800">
                    <h2 className="text-3xl font-bold mb-8 flex items-center text-gray-900 dark:text-white">
                        <Briefcase className="mr-3 text-indigo-500" /> Experiência Profissional
                    </h2>
                    
                    <motion.div 
                        className="space-y-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {PORTFOLIO_DATA.experience.map((job, index) => (
                            <motion.div 
                                key={index} 
                                variants={itemVariants} 
                                className="relative pl-8 border-l-2 border-indigo-500/50 dark:border-indigo-400/50 group"
                            >
                                {/* Ponto na Timeline */}
                                <div className="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white dark:border-gray-900 group-hover:bg-indigo-700 transition-colors"></div>
                                
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{job.period}</p>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.role} - {job.company}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">{job.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* --- SEÇÃO CONTATO (Call to Action) --- */}
                <section id="contato" className="py-12 md:py-16 border-t dark:border-gray-800 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                        Vamos Conectar?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Estou sempre aberto a discutir novos desafios e colaborações que exijam excelência em React e design de experiência do usuário.
                    </p>
                    <motion.a 
                        href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                        className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-[1.02]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                    >
                        <Mail className="w-5 h-5 mr-2" /> 
                        Enviar um Email
                    </motion.a>
                </section>
            </main>

            {/* --- FOOTER --- */}
            <footer className="bg-white/50 dark:bg-gray-800/50 border-t dark:border-gray-700 p-4 text-center text-sm text-gray-600 dark:text-gray-400">
                <div className="max-w-7xl mx-auto">
                    &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Construído com React, Next.js e Tailwind CSS.
                </div>
            </footer>
        </div>
    );
};

export default App;