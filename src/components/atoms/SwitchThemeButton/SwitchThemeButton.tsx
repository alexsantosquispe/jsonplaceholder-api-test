import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

import { Theme } from '../../../context/ThemeContext';
import { useTheme } from '../../../hooks/useTheme';
import { MoonIcon, SunIcon } from '../../../icons';

interface SwitchThemeButtonProps {
  classNameContainer?: string;
  classNameIcon?: string;
}

const SwitchThemeButtonComponent = ({
  classNameContainer = '',
  classNameIcon = ''
}: SwitchThemeButtonProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label={`${theme === Theme.light ? 'dark mode icon' : 'light mode icon'}`}
      onClick={toggleTheme}
      className={twMerge(
        'transition-color cursor-pointer rounded-md p-4 text-black duration-150 ease-in-out hover:bg-gray-100 md:p-2 dark:text-white dark:hover:bg-white/10',
        classNameContainer
      )}
    >
      {theme === Theme.light ? (
        <MoonIcon className={twMerge('size-5', classNameIcon)} />
      ) : (
        <SunIcon className={twMerge('size-5', classNameIcon)} />
      )}
    </button>
  );
};

export const SwitchThemeButton = memo(SwitchThemeButtonComponent);
