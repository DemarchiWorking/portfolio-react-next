

//import Image from 'next/image';
//import { label } from 'framer-motion/client';


// Define os tipos de variantes de estilo
type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: ButtonVariant;
}

const Botao: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  
  // Mapeamento das classes Tailwind por variante
  const baseClasses = 
    'px-8 py-4 flex font-semibold transition-all duration-300 ease-in-out whitespace-nowrap';

  const variantClasses = {
    // Botão Laranja/Coral
    primary: 'bg-blue-800 text-white dark:bg-slate-200 hover:bg-blue-900 dark:text-slate-800 shadow-sombra-coral ',
    
    // Botão Escuro com Borda
    secondary: 'bg-slate-200 text-blue-800 hover:bg-slate-300 border border-white/60 hover:bg-gray-800'
  };

  // Combina as classes base, as classes da variante e quaisquer classes passadas
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button 
      className={combinedClasses} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Botao;