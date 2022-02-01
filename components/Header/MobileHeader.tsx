import { FC, useCallback, useContext, useEffect, useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';

import DarkModeContext from '../../context/DarkModeContext';
import { getIconName } from '../../lib/helper';

import styles from './MobileHeader.module.css'
export interface MobileHeaderProps {
  onSidebarButtenClick: () => void;
  isSidebarOpen: boolean;
}

const MobileHeader: FC<MobileHeaderProps> = (props) => {
  const [title, setTitle] = useState('');
  
  const router = useRouter();
  const { darkMode, toggle } = useContext(DarkModeContext);

  const closeSidebar = useCallback(() => {
    if (props.isSidebarOpen)
      props.onSidebarButtenClick();
  }, [props]);


  useEffect(() => {
    router.events.on('routeChangeStart', closeSidebar);
    setTitle(router.pathname.replaceAll("/", "").toUpperCase());

    return () => {
      router.events.off('routeChangeStart', closeSidebar)
    }
  }, [closeSidebar, router]);

  return (
    <header className={styles.container}>
      <h1>{title === '' ? 'HOME' : title}</h1>
      <div>

        <button onClick={() => toggle()}>
          {darkMode ?
            <Image layout='fixed' src="/sun.svg" alt='activate light mode' width={32} height={32} /> :
            <Image layout='fixed' src="/moon.svg" alt='activate dark mode' width={32} height={32} />
          }
        </button>
        
        <button onClick={props.onSidebarButtenClick}>
          {props.isSidebarOpen ?
            <Image layout='fixed' src={getIconName('close', darkMode)} alt='close sidebar' width={32} height={32} /> :
            <Image layout='fixed' src={getIconName('bars', darkMode)} alt='open sidebar' width={32} height={32} />
          }
        </button>
      </div>
    </header>
  )
}

export default MobileHeader;