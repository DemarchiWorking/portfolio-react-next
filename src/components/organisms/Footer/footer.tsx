"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/molecules/theme-toggle";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    plataforma: [
      { name: "Engenharia Disciplinada", href: "#" },
      { name: "Interfaces Web", href: "#" },
      { name: "Automações", href: "#" },
    ],
    produtos: [
      { name: "Análise de Requisitos", href: "#" },
      { name: "Documento de Especificação", href: "#" },
      { name: "Desenho de Arquitetura", href: "#" },
    ],
    sobre: [
      { name: "DevOps", href: "#" },
      { name: "Arquitetura Cloud", href: "#" },
      { name: "Infraestrutura Moderna", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#0f172a] text-slate-300 py-12 px-6 md:px-12 font-sans">
      <div className="bg-blue-700 dark:bg-gray-900"></div>

      <div className="max-w-7xl pt-5 mx-auto">

        {/* LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-12">

          {/* PLATAFORMA */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">
              Projetos
            </h3>

            <ul className="space-y-4">
              {footerNavigation.plataforma.map((item, index) => (
                <li key={`${item.name || "plataforma"}-${index}`}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name || "Em breve"}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUTOS */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">
              Documentações
            </h3>

            <ul className="space-y-4">
              {footerNavigation.produtos.map((item, index) => (
                <li key={`${item.name || "produtos"}-${index}`}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name || "Em breve"}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOBRE */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6">
              Deploy
            </h3>

            <ul className="space-y-4">
              {footerNavigation.sobre.map((item, index) => (
                <li key={`${item.name || "sobre"}-${index}`}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name || "Em breve"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="border-t border-slate-700/50 my-8" />

        {/* FOOTER INFO */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">

          <div className="flex items-center gap-2">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-white tracking-tight">
                /in/demarchi1
              </span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p>
              Desenvolvido por <span className="text-slate-200">Demarchi</span>
            </p>
          </div>

          <div>
            <p>© {currentYear} LabDataDev</p>
          </div>
        </div>

        {/* LINKS EXTRAS */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-xs flex flex-wrap gap-4 justify-center opacity-50 hover:opacity-100 transition-opacity">

          <a
            href="http://www.linkedin.com/in/demarchi1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>

          <span>antonio.demarchi@al.infnet.edu.br</span>

          <a
            href="https://www.youtube.com/watch?v=jwkgTZLigQ0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Tarefa Sec. Desenv T1
          </a>

        </div>
      </div>
    </footer>
  );
};