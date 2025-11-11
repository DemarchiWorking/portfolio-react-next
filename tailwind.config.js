/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // Já cobre src/app, src/components, etc.
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // Adicione se usar app/ sem src/
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  // Para Shadcn components
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',  // Mude para var() no v4 (sem hsl, pois vars são definidas no CSS)
        foreground: 'var(--foreground)',
        'coral-destaque': '#FF584D', // Para o botão principal
        'fundo-escuro': '#192328', // Para o botão secundário
        
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        boxShadow: {
        'sombra-coral': 'inset 0 -4px 0 0 rgba(0, 0, 0, 0.2)', // Simula a profundidade sutil no botão 1
      }
        // Adicione mais customizações do Shadcn aqui (ex: card, muted, etc.)
      },
    },
  },
  plugins: [],  // Adicione require('@tailwindcss/typography') se precisar
};
/*
module.exports = {
  content: [
    "./src/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}", 
    "./app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    extend: {} 
  },
  plugins: [],
};*/
/*
@type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./src.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./components*.{js,ts,jsx,tsx,mdx}", 
    "./app/**.{js,ts,jsx,tsx,mdx}"
  
  ],
  theme: { extend: {} },
  plugins: [],
  darkMode: 'class', // Para dark/light
};*/
/**  @type {import('tailwindcss').Config} 
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}*/

