"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BadgeCheck, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Cloud, 
  Terminal, 
  ChevronRight,
  Download,
  Plus,
  Building2
} from "lucide-react";
import { ThemeToggle } from "@/components/molecules/theme-toggle";

export default function Sobre() {
  const [activePanel, setActivePanel] = useState<'none' | 'brands' | 'institutions'>('none');

  const experiences = [
    {
      company: "nstech (e-frete)",
      role: "Desenvolvedor Backend II",
      period: "Dez 2025 - Presente",
      description: "Engenharia de soluções de pagamento e logística de alta criticidade (BACEN/ANTT).",
      tags: [".NET", "SQL Server", "Unit Testing", "Fintech"]
    },
    {
      company: "Stefanini Group (Alocado no Itaú)",
      role: "Consultor Backend / Seg. da Informação",
      period: "Jul 2022 - Ago 2025",
      description: "Automação de fluxos SAP reduzindo 65% do esforço manual. Foco em APIs resilientes e observabilidade (Splunk/Grafana).",
      tags: [".NET Core", "Angular", "SonarQube", "Observabilidade"]
    },
    {
      company: "Globo",
      role: "Analista de Segurança (Python & Cloud)",
      period: "2021 - 2022",
      description: "Operações de Blue Team e automação de infraestrutura defensiva em parceria com Google Cloud.",
      tags: ["Python", "GCP", "Linux", "Nginx", "CSIRT"]
    }
  ];

  const education = [
    {
      institution: "FIAP",
      degree: "Pós Tech em DevOps & Arquitetura Cloud",
      status: "Em andamento (2025)",
      focus: "Kubernetes, Terraform, AWS (EKS/RDS), CI/CD Pipelines."
    },
    {
      institution: "Instituto Infnet",
      degree: "Engenharia de Software & ADS",
      status: "Concluído (2023 - 2025)",
      focus: "DDD, Design Patterns, Machine Learning, Cloud AWS/Azure."
    }
  ];

  const brands = [
    { name: "Stefanini", "foto":"https://i.ibb.co/9HXpQ0b9/image.png" , style: "font-bold" },
    { name: "Itaú", "foto":"https://i.ibb.co/fVHP0X6w/image.png" ,style: "font-black italic" },
    { name: "Globo", "foto":"https://i.ibb.co/4w2vWcn7/image.png", style: "font-extrabold uppercase tracking-tight" },
    { name: "Radix", "foto":"https://i.ibb.co/MkqrnxcV/image.png" , style: "font-semibold" }
  ];

  const institutions = [
    { name: "SENAI", detail: "Hardware" },
    { name: "FAETEC", detail: "Excel e Apresentações" },
    { name: "IFRJ", detail: "Técnico Inst. Federal" },
    { name: "Exército Brasileiro", detail: "Militar" },
    { name: "Instituto Infnet", detail: "Engenharia" },
    { name: "FIAP", detail: "Pós-Tech Cloud" }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 pb-20">
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-5xl justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"> Perfil<span className="text-gray-900 dark:text-white">.dev</span></h1>
          <ThemeToggle />
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-6 pt-16">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
              <BadgeCheck size={14} />
              DISPONÍVEL PARA PARCERIAS E MENTORIA
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Construindo o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Backend</span> do amanhã com cultura <span className="italic">DevOps</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Especialista em transformar requisitos complexos em arquiteturas escaláveis, unindo Engenharia de Software e Nuvem.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/CurriculoEngenheiroAntonioDemarchi.pdf" download>
                <button className="flex items-center gap-2 bg-blue-500 text-white bg-foreground px-6 py-3 rounded-xl font-bold transition-all active:scale-95 border border-transparent cursor-pointer">
                  <Download size={18} /> Baixar CV (PDF)
                </button>
              </a>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative h-full min-h-[250px] rounded-2xl border border-border bg-card p-8 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-muted-foreground">Localização</span>
                  <span className="font-medium text-right">Rio de Janeiro / Remoto</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-muted-foreground">Foco Atual</span>
                  <span className="font-medium text-right text-primary font-mono text-xs">Cloud & Kubernetes</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-muted-foreground">CNPJ</span>
                  <span className="font-medium font-mono text-[10px]">44.897.847/0001-96</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO CORRIGIDA: BOTÕES ANIMADOS SEM EXCESSO DE ESPAÇO */}
        <section className="relative mb-20">
          <div className="flex items-center justify-center gap-3 w-full">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-border" />
            
            <div className="flex flex-wrap justify-center gap-2">
              <button 
                onMouseEnter={() => setActivePanel('brands')}
                onClick={() => setActivePanel(activePanel === 'brands' ? 'none' : 'brands')}
                className={`z-10 px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 cursor-pointer text-[10px] font-bold uppercase tracking-tight
                  ${activePanel === 'brands' ? 'bg-primary text-white border-primary' : 'bg-background text-muted-foreground border-border hover:border-primary/50'}`}
              >
                <Building2 size={12} /> Empresas
                <motion.span animate={{ rotate: activePanel === 'brands' ? 45 : 0 }}><Plus size={12} /></motion.span>
              </button>

              <button 
                onMouseEnter={() => setActivePanel('institutions')}
                onClick={() => setActivePanel(activePanel === 'institutions' ? 'none' : 'institutions')}
                className={`z-10 px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 cursor-pointer text-[10px] font-bold uppercase tracking-tight
                  ${activePanel === 'institutions' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-background text-muted-foreground border-border hover:border-indigo-500/50'}`}
              >
                <GraduationCap size={12} /> Carreira
                <motion.span animate={{ rotate: activePanel === 'institutions' ? 45 : 0 }}><Plus size={12} /></motion.span>
              </button>
            </div>

            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-border" />
          </div>

          <div className="relative w-full" onMouseLeave={() => setActivePanel('none')}>
            <AnimatePresence mode="wait">
              {activePanel !== 'none' && (
                <motion.div
                  key={activePanel}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 py-10 px-4">
                    {activePanel === 'brands' ? (
                      brands.map((brand, i) => (
                        <motion.div // 1. Alterado de span para div
                          key={brand.name}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 0.6, y: 0 }}
                          whileHover={{ opacity: 1, scale: 1.05 }}
                          // 2. Adicionado flex flex-col e items-center para centralizar tudo
                          className={`flex flex-col items-center gap-2 cursor-pointer transition-all ${brand.style}`}
                        >
                          <div className="h-10 w-10 flex items-center justify-center">
                            <img 
                              src={brand.foto} 
                              alt={brand.name}
                              className="h-full w-full object-contain" // 3. object-contain mantém a proporção da logo
                            />
                          </div>
                          <span className="text-sm md:text-base font-medium">{brand.name}</span>
                        </motion.div>
                      ))
                    ) : (
                      institutions.map((inst, i) => (
                        <motion.div
                          key={inst.name}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 0.7, y: 0 }}
                          whileHover={{ opacity: 1, y: -2 }}
                          className="flex flex-col items-center group cursor-default"
                        >
                          <span className="text-sm md:text-base font-bold group-hover:text-indigo-500 transition-colors">{inst.name}</span>
                          <span className="text-[9px] uppercase text-muted-foreground">{inst.detail}</span>
                        </motion.div>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <Briefcase className="text-primary" size={24} />
            <h2 className="text-2xl font-bold tracking-tight">Trajetória Profissional</h2>
            <div className="h-[1px] flex-1 bg-border"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-border hover:before:bg-primary transition-colors">
                <div className="absolute left-[-5px] top-0 h-[12px] w-[12px] rounded-full bg-border group-hover:bg-primary transition-colors"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-primary text-sm font-medium">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 max-w-3xl leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-secondary border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grid Final */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="text-primary" size={24} />
              <h2 className="text-xl font-bold tracking-tight">Formação</h2>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="p-5 rounded-xl border border-border bg-card/50">
                  <h3 className="font-bold text-base mb-1">{edu.degree}</h3>
                  <p className="text-xs text-primary mb-2">{edu.institution} • {edu.status}</p>
                  <p className="text-xs text-muted-foreground">{edu.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <Terminal className="text-primary" size={24} />
              <h2 className="text-xl font-bold tracking-tight">Tech Stack</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "Backend", desc: ".NET, Java, Python", icon: Code2 },
                { title: "DevOps", desc: "AWS, K8s, Terraform", icon: Cloud },
                { title: "Segurança", desc: "Sonar, DevSecOps", icon: BadgeCheck },
                { title: "Data", desc: "SQL, Grafana, ML", icon: ChevronRight }
              ].map((skill, i) => (
                <div key={i} className="p-3 rounded-lg border border-border bg-muted/30">
                  <skill.icon size={16} className="mb-2 text-primary" />
                  <h4 className="font-bold text-xs mb-1">{skill.title}</h4>
                  <p className="text-[10px] text-muted-foreground">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}