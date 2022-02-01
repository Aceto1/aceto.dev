import { FC, useEffect, useState } from "react";
import DarkModeContext, { DarkModeContextValue } from "./DarkModeContext";

const DarkModeContextProvider: FC = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedSetting = localStorage.getItem('dark-mode-enabled');

    if (savedSetting)
      setDarkMode(savedSetting === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('dark-mode-enabled', darkMode ? 'true' : 'false');
  }, [darkMode]);

  const contextValue: DarkModeContextValue = {
    darkMode: darkMode,
    disable: () => setDarkMode(false),
    enable: () => setDarkMode(true),
    toggle: () => setDarkMode(prev => !prev)
  }

  return (
    <DarkModeContext.Provider value={contextValue}>
      {props.children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContextProvider;