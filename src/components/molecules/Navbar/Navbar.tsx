import cn from 'clsx';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { MenuButton } from './components/MenuButton';
import { NavbarLogo } from './components/NavbarLogo';
import { NavbarMenu } from './components/NavbarMenu';
import { useIsMobile } from '../../../hooks/useIsMobile';
import { SwitchThemeButton } from '../../atoms/SwitchThemeButton/SwitchThemeButton';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed z-40 flex w-full justify-center border-b border-dashed border-gray-200 bg-white md:h-14 md:bg-white/70 md:backdrop-blur-sm dark:border-white/15 dark:bg-black/95 md:dark:bg-black/50">
      <nav className="flex w-full max-w-[80rem] flex-col items-center justify-between md:flex-row md:border-x md:border-dashed md:border-gray-200 md:px-6 md:dark:border-white/15">
        <div
          className={twMerge(
            'flex w-full items-center justify-between py-1 md:border-none',
            cn({
              'border-b border-dashed border-gray-200 dark:border-b-white/15':
                isMenuOpen
            })
          )}
        >
          {isMobile && <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />}
          <NavbarLogo />
          {isMobile && <SwitchThemeButton />}
        </div>

        <NavbarMenu isMenuOpen={isMenuOpen} onSelectOption={closeMenu} />
      </nav>
    </header>
  );
};
