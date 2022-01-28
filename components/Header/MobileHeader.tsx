import { FC, useCallback, useEffect, useState } from 'react';
import styles from '../../styles/MobileHeader.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { getIconName } from '../../lib/helper';

export interface MobileHeaderProps {
  onSidebarButtenClick: () => void;
  onColorModeButtonClick: () => void;
  isSidebarOpen: boolean;
  darkMode: boolean;
}

const MobileHeader: FC<MobileHeaderProps> = (props) => {
  const [title, setTitle] = useState('');
  const router = useRouter();

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

        <button onClick={props.onColorModeButtonClick}>
          {props.darkMode ?
            <Image layout='fixed' src="/sun.svg" alt='activate light mode' width={32} height={32} /> :
            <Image layout='fixed' src="/moon.svg" alt='activate dark mode' width={32} height={32} />
          }
        </button>
        
        <button onClick={props.onSidebarButtenClick}>
          {props.isSidebarOpen ?
            <Image layout='fixed' src={getIconName('close', props.darkMode)} alt='close sidebar' width={32} height={32} /> :
            <Image layout='fixed' src={getIconName('bars', props.darkMode)} alt='open sidebar' width={32} height={32} />
          }
        </button>
      </div>
    </header>
  )
}

export default MobileHeader;