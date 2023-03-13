import { FC, useContext } from "react";
import Link from "next/link";
import Image from 'next/image'

import DarkModeContext from "../../context/DarkModeContext";

import styles from './Header.module.css'

const Header: FC = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);

  return (
    <div className={styles.container} style={{backgroundColor: darkMode ? "#4c566a" : "#d8dee9"}}>
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

      <button onClick={() => toggle()}>
        {darkMode ?
          <Image src="/sun.svg" alt='activate light mode' width={24} height={24} /> :
          <Image src="/moon.svg" alt='activate dark mode' width={24} height={24} />
        }
      </button>
    </div>
  );
}

export default Header;