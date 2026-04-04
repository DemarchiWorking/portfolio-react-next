"use client";

import { 
  BadgeCheck, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Cloud, 
  Terminal, 
  ExternalLink, 
  ChevronRight,
  Download
} from "lucide-react";
import { ThemeToggle } from "@/components/molecules/theme-toggle";

export default function Sobre() {
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

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 pb-20">
      {/* Header Fixo/Navegação */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-5xl justify-between items-center">
          <span className="font-bold tracking-tighter text-xl">DEMARCHI<span className="text-primary">.dev</span></span>
          <ThemeToggle />
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-6 pt-16">
        {/* Hero Section - Perfil */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6">
              <BadgeCheck size={14} />
              DISPONÍVEL PARA PARCERIAS E MENTORIA
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Construindo o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Backend</span> do amanhã com cultura <span className="italic">DevOps</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Especialista em transformar requisitos complexos em arquiteturas escaláveis. 
              Minha atuação une o rigor da Engenharia de Software com a agilidade da Nuvem, 
              garantindo entregas seguras, documentadas e de alta disponibilidade.
            </p>
            <div className="flex flex-wrap gap-4">

              <a 
                                    href="/CurriculoEngenheiroAntonioDemarchi.pdf" 
                                    download="CurriculoEngenheiroAntonioDemarchi.pdf"
                >

                <button className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all active:scale-95">
                  <Download size={18} /> Baixar CV (PDF)
                </button>
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative h-full min-h-[300px] rounded-2xl border border-border bg-card p-8 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-muted-foreground">Localização</span>
                  <span className="font-medium text-right">Rio de Janeiro / Remoto</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-muted-foreground">Foco Atual</span>
                  <span className="font-medium text-right text-primary font-mono">Cloud & Kubernetes</span>
                </div>
                <div className="flex justify-between text-sm border-b border-border pb-2">
                  <span className="text-muted-foreground">CNPJ</span>
                  <span className="font-medium font-mono">44.897.847/0001-96</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="text-primary" size={28} />
            <h2 className="text-3xl font-bold tracking-tight">Trajetória Profissional</h2>
            <div className="h-[1px] flex-1 bg-border"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-border hover:before:bg-primary transition-colors">
                <div className="absolute left-[-5px] top-0 h-[12px] w-[12px] rounded-full bg-border group-hover:bg-primary transition-colors"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{exp.period}</span>
                </div>
                <p className="text-muted-foreground mb-4 max-w-3xl leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-secondary border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grid de Educação e Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coluna Educação */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-2xl font-bold tracking-tight">Formação</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border bg-card/50">
                  <h3 className="font-bold text-lg leading-tight mb-1">{edu.degree}</h3>
                  <p className="text-sm text-primary mb-3">{edu.institution} • {edu.status}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Tech Stack */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Terminal className="text-primary" size={28} />
              <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-muted/30">
                <Code2 size={20} className="mb-2 text-primary" />
                <h4 className="font-bold text-sm mb-2">Backend</h4>
                <p className="text-xs text-muted-foreground">.NET Core, Java, Python, REST APIs, Microservices.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-muted/30">
                <Cloud size={20} className="mb-2 text-primary" />
                <h4 className="font-bold text-sm mb-2">DevOps/Cloud</h4>
                <p className="text-xs text-muted-foreground">AWS, Docker, Kubernetes, Terraform, GitHub Actions.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-muted/30">
                <BadgeCheck size={20} className="mb-2 text-primary" />
                <h4 className="font-bold text-sm mb-2">Segurança</h4>
                <p className="text-xs text-muted-foreground">SonarQube, IAM, WAF, FinOps, DevSecOps.</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-muted/30">
                <ChevronRight size={20} className="mb-2 text-primary" />
                <h4 className="font-bold text-sm mb-2">Data & AI</h4>
                <p className="text-xs text-muted-foreground">Machine Learning, SQL Server, Grafana, ELK Stack.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}