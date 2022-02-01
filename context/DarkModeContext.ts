import { createContext } from 'react';
import DarkModeContextProvider from './DartkModeContextProvider';

export interface DarkModeContextValue {
  darkMode: boolean;
  enable: () => void;
  disable: () => void;
  toggle: () => void;
}

const defaultValue: DarkModeContextValue = {
  darkMode: true,
  enable: () => {},
  disable: () => {},
  toggle: () => {}
}

const DarkModeContext = createContext(defaultValue);

export default DarkModeContext;