"use client"; 

import Link  from 'next/link';
//import { Link as LinkIcon } from 'lucide-react';
import styles from './navbar.module.css';
import Image from 'next/image';
import { Navitem, NavitemProps } from '@/components/molecules/NavItem';
import { usePathname } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';


export const Navbar = () => {

    const items: NavitemProps[] = [
        { label: 'Inicio', url: '/home' },
        { label: 'Sobre', url: '/about' },
        { label: 'Serviços', url: '/services' },
        { label: 'Portfólio', url: '/portfolio' },
        { label: 'Contato', url: '/contato' },
    ];

    const pathname = usePathname();
    const [openMenu, setOpenMenu] =  useState<boolean>(false);



  return (
    <header>
        <nav className={`bg-blue-900 dark:bg-slate-900 ${styles.navbar}`}>
            <Link className={styles.logo} href="/">
                <Image
                    src="/demarchi-logo.png"
                    alt="Logo Portfólio"
                    width={120} height={60}
                />
            </Link>
            <ul className={`bg-blue-900 dark:bg-slate-900 ${styles['nav-items']} ${openMenu ? styles.open : ''}`}>                    
                {items.map((item, index) => (
                    <Navitem
                        key={index}
                        url={item.url}
                        label={item.label}
                        isActive={pathname === item.url}
                    />
                ))}
            </ul>
            
            
            <button className={styles['btn-mobile']} onClick={()=> setOpenMenu(!openMenu) }>                
                {openMenu ? <FaXmark/>: <FaBars/> }
            </button>


            <button className={styles['btn-default']}>
                Contatar
            </button>

        </nav>
    </header>
  );
};