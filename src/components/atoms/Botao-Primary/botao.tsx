

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
    primary: 'bg-blue-800 text-white hover:bg-blue-900 dark:hover:text-slate-900 shadow-sombra-coral hover:shadow-lg flex items-center justify-center cursor-pointer',
    
    // Botão Escuro com Borda
    secondary: 'bg-slate-200 text-black dark:text-slate-800 hover:text-blue-800 hover:bg-slate-300 dark:hover:bg-slate-400 border border-black-500/60 hover:border-blue-800/60 hover:bg-gray-800 cursor-pointer'
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