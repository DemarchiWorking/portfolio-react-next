// components/Apresentacao.tsx
import { FC } from 'react';
import { cn } from '@/lib/utils'; // Crie um util com tailwind-merge e clsx, ex: export const cn = (...inputs) => twMerge(clsx(inputs));
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaTwitter } from 'react-icons/fa'; // Para ícones adicionais.
import { motion } from 'framer-motion';
import Image from 'next/image'; // Para otimização de imagens.

interface ApresentacaoProps {
  name: string;
  title: string;
  summary: string;
  profileImage: string; // URL da sua foto de perfil.
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
}

const Apresentacao: FC<ApresentacaoProps> = ({
  name,
  title,
  summary,
  profileImage,
  email,
  github,
  linkedin,
  twitter,
}) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-30" /> {/* Overlay para contraste */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Lado esquerdo: Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {name}
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-primary">
              {title}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            </div>
          </motion.div>

          {/* Lado direito: Imagem de perfil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <Image
                src={profileImage}
                alt={`${name} - Foto de Perfil`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Links sociais no rodapé da seção */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex justify-center gap-6"
        >
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-8 h-8 hover:text-primary transition-colors" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-8 h-8 hover:text-primary transition-colors" />
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="w-8 h-8 hover:text-primary transition-colors" />
          </a>
          <a href={`mailto:${email}`} aria-label="Email">
            <Mail className="w-8 h-8 hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Apresentacao;