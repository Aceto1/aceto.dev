import { FC } from "react";

import styles from '../../styles/Footer.module.css'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Lucas Schumacher - &copy; 2022</p>
    </footer>
  );
}

export default Footer;