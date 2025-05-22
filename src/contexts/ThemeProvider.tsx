import { ReactNode, useEffect, useState } from 'react';

import ThemeContext, { Theme, ThemeType } from './ThemeContext';
import { THEME_KEY } from '../constants';
import {
  applyThemeToDocument,
  getStoredTheme,
  getSystemTheme,
  setLSValue
} from '../utils';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const initialTheme = getStoredTheme() ?? getSystemTheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(initialTheme);

  useEffect(() => {
    applyThemeToDocument(currentTheme);
    setLSValue(THEME_KEY, currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const storedTheme = getStoredTheme();
    if (storedTheme) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setCurrentTheme(e.matches ? Theme.dark : Theme.light);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === Theme.dark ? Theme.light : Theme.dark));
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
