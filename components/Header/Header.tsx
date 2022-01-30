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

      <button onClick={() => toggle()}>
        {darkMode ?
          <Image layout='fixed' src="/sun.svg" alt='activate light mode' width={24} height={24} /> :
          <Image layout='fixed' src="/moon.svg" alt='activate dark mode' width={24} height={24} />
        }
      </button>
    </div>
  );
}

export default Header;