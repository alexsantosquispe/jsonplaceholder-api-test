import { DIGITS_LENGTH, THEME_KEY } from '../constants';
import { Theme, ThemeType } from '../contexts/ThemeContext';

export const getLSValue = (key: string) => localStorage.getItem(key);

export const setLSValue = (key: string, value: string | number | boolean) =>
  localStorage.setItem(key, String(value));

export const getSystemTheme = (): ThemeType => {
  if (typeof window === 'undefined') return Theme.light;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.dark
    : Theme.light;
};

export const applyThemeToDocument = (theme: ThemeType) => {
  const root = window.document.documentElement;

  if (theme === Theme.dark) {
    root.classList.add(Theme.dark);
  } else {
    root.classList.remove(Theme.dark);
  }
};

export const getStoredTheme = (): ThemeType | null => {
  if (typeof window === 'undefined') return null;

  const storedTheme = getLSValue(THEME_KEY);

  return (storedTheme as ThemeType) || null;
};

export const getFormattedDigits = (value: number): string => {
  return String(value).padStart(DIGITS_LENGTH, '0');
};
