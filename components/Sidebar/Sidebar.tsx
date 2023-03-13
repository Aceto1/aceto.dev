import { FC, useContext } from "react";
import Link from "next/link";

import DarkModeContext from "../../context/DarkModeContext";

import styles from './Sidebar.module.css'

export interface SidebarProps {
  isOpen: boolean;
}

const Navigation: FC<SidebarProps> = (props) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={styles.nav} style={{
      left : props.isOpen ? "0": "100vw", 
      backgroundColor: darkMode ? "rgba(46, 52, 64, 0.8)" : "rgba(236, 239, 244, 0.8)"
      }}>
      <Link href="/">
        Home
      </Link>
      <Link href="/resume">
        Resume
      </Link>
      <Link href="/projects">
        Projects
      </Link>
      <Link href="/uses">
        Uses
      </Link>
    </div>
  );
}

export default Navigation;