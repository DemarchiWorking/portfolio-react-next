import Link  from 'next/link';
//import { Link as LinkIcon } from 'lucide-react';
import styles from './navitem.module.css';

//import Image from 'next/image';
//import { label } from 'framer-motion/client';


export interface NavitemProps {
    url: string;
    label: string;
    isActive?: boolean;
}


export const Navitem = (props: NavitemProps) => {
  return (
      <li>
            <Link href={props.url} 
        className={`text-slate-900 dark:text-slate-200 ${styles['nav-link']} ${props.isActive ? styles.active : ''}`}>                          {props.label}
            </Link>
      </li>
  );
};