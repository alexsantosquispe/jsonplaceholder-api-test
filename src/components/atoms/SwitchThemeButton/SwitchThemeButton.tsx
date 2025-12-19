import { THEME_TYPES, useTheme } from '@aes/use-theme-hook';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

import { MoonIcon, SunIcon } from '../../../icons';

interface SwitchThemeButtonProps {
  classNameContainer?: string;
  classNameIcon?: string;
}

const SwitchThemeButtonComponent = ({
  classNameContainer = '',
  classNameIcon = ''
}: SwitchThemeButtonProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(
      theme === THEME_TYPES.LIGHT ? THEME_TYPES.DARK : THEME_TYPES.LIGHT
    );
  };

  return (
    <button
      aria-label={`${theme === THEME_TYPES.LIGHT ? 'dark mode icon' : 'light mode icon'}`}
      onClick={toggleTheme}
      className={twMerge(
        'transition-color cursor-pointer rounded-md p-4 text-black duration-150 ease-in-out hover:bg-gray-100 md:p-2 dark:text-white dark:hover:bg-white/10',
        classNameContainer
      )}
    >
      {theme === THEME_TYPES.LIGHT ? (
        <MoonIcon className={twMerge('size-5', classNameIcon)} />
      ) : (
        <SunIcon className={twMerge('size-5', classNameIcon)} />
      )}
    </button>
  );
};

export const SwitchThemeButton = memo(SwitchThemeButtonComponent);
