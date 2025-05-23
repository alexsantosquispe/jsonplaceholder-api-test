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
    <header className="fixed z-40 flex w-full justify-center border-b border-b-gray-100 bg-white/70 backdrop-blur-sm md:h-14 dark:border-b-white/10 dark:bg-black/50">
      <nav className="flex w-full max-w-[80rem] flex-col items-center justify-between md:flex-row md:px-6">
        <div
          className={twMerge(
            'flex w-full items-center justify-between py-1 md:border-none',
            cn({
              'border-b border-b-gray-100 dark:border-b-white/10': isMenuOpen
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
