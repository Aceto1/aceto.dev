import { FC, useEffect, useState } from "react";
import Image from 'next/image'

import Footer from "../Footer/Footer";
import MobileHeader from "../Header/MobileHeader";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

import { getIconName } from "../../lib/helper";

import styles from './Layout.module.css'

const Layout: FC = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setDarkMode((localStorage.getItem("enable-dark-mode") ?? "true") === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("enable-dark-mode", darkMode ? "true" : "false");
  }, [darkMode]);

  const layoutClasses = [
    styles.layout,
    darkMode ? styles.dark : styles.bright
  ]

  return (
    <div className={layoutClasses.join(" ")}>
      <MobileHeader
        darkMode={darkMode}
        isSidebarOpen={isSidebarOpen}
        onSidebarButtenClick={() => setIsSidebarOpen(prev => !prev)}
        onColorModeButtonClick={() => setDarkMode(prev => !prev)}
      />

      <main className={styles.main} style={{ borderColor: darkMode ? "#d8dee9" : "#4c566a" }}>
        <Sidebar isOpen={isSidebarOpen} darkMode={darkMode} />

        <div className={styles.profile} style={{ borderColor: darkMode ? "#d8dee9" : "#4c566a" }}>
          <Image className={styles.profilePic} height={256} width={256} layout='fixed' src="/me.png" alt='profile' />
          <h1 className={styles.title} style={{ animationDelay: "1s" }}>Hi, I&apos;m Lucas!</h1>
          <div className={styles.socials}>
            <a href='https://github.com/Aceto1' style={{ animationDelay: "1.6s" }}>
              <Image width={48} height={48} src={getIconName('github', darkMode)} alt='github' />
            </a>
            <a href='https://www.linkedin.com/in/lucas-schumacher/' style={{ animationDelay: "1.8s" }}>
              <Image width={48} height={48} src={getIconName('linkedin', darkMode)} alt='linkedin' />
            </a>
            <a href='https://www.xing.com/profile/Lucas_Schumacher4/cv' style={{ animationDelay: "2s" }}>
              <Image width={48} height={48} src={getIconName('xing', darkMode)} alt='xing' />
            </a>
            <a href='mailto:lucas@aceto.dev' style={{ animationDelay: "2.2s" }}>
              <Image width={48} height={48} src={getIconName('mail', darkMode)} alt='mail' />
            </a>
          </div>
        </div>

        <div className={styles.content} style={{ animationDelay: "2.8s" }}>
          <Header darkMode={darkMode} onColorModeButtonClick={() => setDarkMode(prev => !prev)} />
          {props.children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;