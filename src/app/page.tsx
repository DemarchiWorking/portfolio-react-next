"use client"; // Ensure the page is client-side for testing

import { ThemeToggle } from "@/components/molecules/theme-toggle"; // Adjust path if needed
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
          <div className="flex">
              <div className="w-46 flex-auto">02</div>
              <div className="w-64 flex-none">
                <Image
                                    src="/perfil-redondo.png"
                                    alt="Logo Portfólio"
                                    width={120} height={60}
                                />
                01

              </div>
          </div>    
                
                <ThemeToggle />    
                <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
                  
                </div>
           
      </main>
    </div>
  );
}
