import { THEME_TYPES, type ThemeType } from '@alexsantosquispe/use-theme-hook';

import { DIGITS_LENGTH, THEME_KEY } from '../constants';

export const getLSValue = (key: string) => localStorage.getItem(key);

export const setLSValue = (key: string, value: string | number | boolean) =>
  localStorage.setItem(key, String(value));

export const getSystemTheme = (): ThemeType => {
  if (typeof window === 'undefined') return THEME_TYPES.LIGHT;

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME_TYPES.DARK
    : THEME_TYPES.LIGHT;
};

export const applyThemeToDocument = (theme: ThemeType) => {
  const root = window.document.documentElement;

  if (theme === THEME_TYPES.DARK) {
    root.classList.add(THEME_TYPES.DARK);
  } else {
    root.classList.remove(THEME_TYPES.DARK);
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
