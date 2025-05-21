import { createContext } from 'react';

export const Theme = {
  light: 'light',
  dark: 'dark'
} as const;

export type ThemeType = keyof typeof Theme;

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;
