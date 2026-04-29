'use client'

import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'
import { Navitem, NavitemProps } from '@/components/molecules/NavItem'
import { usePathname } from 'next/navigation'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { useMetaEvents } from '@/hooks/useMetaEvents'

export const Navbar = () => {
    const { trackCTAClick } = useMetaEvents()
    const pathname = usePathname()
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const dynamicHomeUrl = pathname === '/home' ? '/' : '/home'

    const items: NavitemProps[] = [
        { label: 'Inicio',    url: dynamicHomeUrl },
        { label: 'Sobre',     url: '/about'     },
        { label: 'Serviços',  url: '/services'  },
        { label: 'Portfólio', url: '/portfolio' },
        { label: 'Contato',   url: '/contato'   },
    ]

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
                        // isActive modificado para considerar tanto '/' quanto '/home' como ativos para o botão Inicio
                        isActive={item.label === 'Inicio' 
                            ? (pathname === '/' || pathname === '/home') 
                            : pathname === item.url
                        }
                    />
                ))}
            </ul>
            
            
            <button className={styles['btn-mobile']} onClick={()=> setOpenMenu(!openMenu) }>                
                {openMenu ? <FaXmark/>: <FaBars/> }
            </button>

                
            <a
                href="/chamado"
                onClick={() => trackCTAClick('navbar_contatar', '/chamado')}
            >
                <button className={styles['btn-default']}>
                    Contatar
                </button>
            </a>

        </nav>
    </header>
  );
};