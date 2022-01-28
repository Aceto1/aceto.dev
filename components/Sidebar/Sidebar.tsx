import { FC } from "react";

import styles from '../../styles/Sidebar.module.css'
import Link from "next/link";

export interface SidebarProps {
  isOpen: boolean;
  // The background-color property can't be inherited here, since we need to calculate it with an alpha value in CSS
  // That's why we need a prop for our mode here
  darkMode: boolean;
}

const Navigation: FC<SidebarProps> = (props) => {
  return (
    <div className={styles.nav} style={{
      left : props.isOpen ? "0": "100vw", 
      backgroundColor: props.darkMode ? "rgba(46, 52, 64, 0.8)" : "rgba(236, 239, 244, 0.8)"
      }}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/resume">
        <a>Resume</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link href="https://demo.aceto.dev/">
        <a>Demos</a>
      </Link>
      <Link href="/uses">
        <a>Uses</a>
      </Link>
    </div>
  );
}

export default Navigation;