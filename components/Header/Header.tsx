import { FC } from "react";
import Link from "next/link";
import Image from 'next/image'

import styles from './Header.module.css'

export interface HeaderProps {
  onColorModeButtonClick: () => void;
  darkMode: boolean;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className={styles.container}>
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

      <button onClick={props.onColorModeButtonClick}>
        {props.darkMode ?
          <Image layout='fixed' src="/sun.svg" alt='activate light mode' width={24} height={24} /> :
          <Image layout='fixed' src="/moon.svg" alt='activate dark mode' width={24} height={24} />
        }
      </button>
    </div>
  );
}

export default Header;