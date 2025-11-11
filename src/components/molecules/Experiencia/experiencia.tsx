// components/Experiencia.tsx
import React from 'react';

// A interface para o formato dos dados
interface ExperienceItem {
  year: string;
  title: string;
  company?: string;
  description: string;
  education?: boolean;
}

// O componente agora é 'React.FC' sem props
const Experiencia: React.FC = () => {
  // Os dados (o array 'experiences') ficam dentro do componente
  const experiences: ExperienceItem[] = [
    {
      year: '2016-2019',
      title: 'Técnico em Desenvolvimento Web pelo IFRJ',
      description: 'Formação no Técnico pela Federal, \nInício da graduação de Engenharia. \n',
      education: true,
    },
    {
      year: '2020-2021',
      title: 'Estágio .',
      company: 'Radix Engenharia e Software',
      description: 'Criação de layouts e banners para os primeiros sites da web.',
    },
    {
      year: '2021-2022',
      title: 'Analista de Segurança da Informação',
      company: 'Rede Globo',
      description: 'Blue Team.',
    },
       {
      year: '2022-2025',
      title: 'Desenvolvedor Backend',
      company: 'Stefanini Group',
      description: 'Consultor para o banco Itaú. \n Desenvolvimento de APIs com .NET Core. \n Formado em Análise e Desenvolvimento e também em Engenharia de Software pelo Instituto Infnet',
    },
    {
      year: '2022-2023',
      title: 'Stefanini Group',
      description: 'Mestrado focado em Interação Humano-Computador.',
      education: true,
    },
    {
      year: '2025',
      title: 'Desenvolvedor Full Stack',
      company: '',
      description: 'Desenvolvedor cursando Pós de DevOps e Arquitetura Cloud na FIAP.',
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Minhas Experiências</h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Uma jornada de aprendizado contínuo e paixão por construir
          interfaces que encantam e resolvem problemas reais.
        </p>
        <div className="p-24">

        </div>

        {/* LAYOUT VERTICAL (MOBILE-FIRST)
          Visível por padrão, escondido em telas médias (md) ou maiores
        */}
        <div className="md:hidden">
          <div className="relative">
            {/* Linha central da timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-500"></div>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={`v-${index}`}
                  className={`flex flex-col md:flex-row items-center justify-between md:justify-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } relative`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full z-10"></div>
                  <div
                    className={`w-full md:w-1/2 p-6 rounded-lg shadow-lg ${
                      exp.education ? 'bg-blue-800' : 'bg-gray-800'
                    } ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}
                  >
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    {exp.company && <p className="text-lg mb-2">{exp.company}</p>}
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left py-4 md:py-0">
                    <span className="text-3xl font-bold text-red-500">{exp.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LAYOUT HORIZONTAL (DESKTOP)
          Escondido por padrão, visível (display: block) em telas médias (md) ou maiores
        */}
        <div className="hidden md:block">
          <div className="relative">
            {/* 1. A Linha Horizontal Central */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-red-500 transform -translate-y-1/2"></div>

            {/* 2. O Container dos Itens (usa flex para espaçar) */}
            {/* 'relative' e 'z-10' são para os pontos ficarem SOBRE a linha */}
            <ol className="relative z-10 flex justify-between">
              
              {experiences.map((exp, index) => (
                <li key={`h-${index}`} className="relative flex-1">
                  <div className="flex flex-col items-center">
                    
                    {/* 3. Ponto na Linha (O Círculo) */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-red-500 rounded-full border-4 border-gray-900"></div>

                    {/* 4. LÓGICA DE POSICIONAMENTO 
                      Se o índice for par (0, 2, 4...), o card vai para CIMA.
                      Se for ímpar (1, 3, 5...), o card vai para BAIXO.
                    */}
                    
                    {/* Card de Conteúdo (Posicionado ACIMA ou ABAIXO) */}
                    <div
                      className={`w-64 p-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/50
                        ${exp.education ? 'bg-blue-800' : 'bg-gray-800'}
                        ${index % 2 === 0 ? 'absolute bottom-12' : 'absolute top-12'}
                      `}
                    >
                      {/* Triângulo/Seta (feito com bordas) */}
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent
                          ${index % 2 === 0 
                            ? 'bottom-[-8px] border-t-8' // Aponta para baixo
                            : 'top-[-8px] border-b-8'   // Aponta para cima
                          }
                          ${exp.education ? 'border-t-blue-800' : 'border-t-gray-800'}
                          ${exp.education ? 'border-b-blue-800' : 'border-b-gray-800'}
                        `}
                      ></div>
                      
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      {exp.company && <p className="text-base text-gray-300 mb-1">{exp.company}</p>}
                      <p className="text-sm text-gray-400">{exp.description}</p>
                    </div>

                    {/* Ano (Posicionado OPOSTO ao card) */}
                    <div
                      className={`text-3xl font-bold text-red-500
                        ${index % 2 === 0 ? 'absolute top-12' : 'absolute bottom-12'}
                      `}
                    >
                      {exp.year}
                    </div>
                    
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;