"use client"; // Ensure the page is client-side for testing

//import Apresentacao from "@/components/molecules/Inicio/componente-inicial";
import { Apresentacao } from "@/components/molecules/Apresentacao/apresentacao";
import { Barra } from "@/components/molecules/Barra";
import Experiencia from "@/components/molecules/Experiencia/experiencia";
import { Sobre } from "@/components/molecules/Sobre";
import { ThemeToggle } from "@/components/molecules/theme-toggle"; // Adjust path if needed
import Image from "next/image";

export default function Home() {
  //- colocar menu mais para a direita
  
  return (
    <div>
      <main>              
                <Apresentacao/>
                <ThemeToggle />
                <Barra />
                <Sobre/>
                <Experiencia/>
                   
                
                { /* Componente de Apresentação
                <Apresentacao
        name="Seu Nome"
        title="Engenheiro Frontend Sênior - Especialista em React & UX/UI"
        summary="Com anos de experiência construindo interfaces intuitivas e performáticas, ajudo empresas a criar produtos digitais impactantes."
        profileImage="/path/to/your-profile.jpg" // Substitua pela sua imagem.
        email="seu@email.com"
        github="https://github.com/seuusuario"
        linkedin="https://linkedin.com/in/seuusuario"
        twitter="https://twitter.com/seuusuario"
      />  */ }
                <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
                  
                </div>

          {/* 
            <div className="flex">
              <div className="w-46 flex-auto">
                ##########################
                </div>
              <div className="w-64 flex-none">
                <Image
                                    src="/demarchi-terno.png"
                                    alt="Logo Portfólio"
                                    width={120} height={60}
                                />
                ########################
              </div>

          </div>    */}
      </main>
    </div>
  );
}
