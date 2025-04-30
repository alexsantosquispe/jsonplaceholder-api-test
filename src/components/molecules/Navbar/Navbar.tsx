import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import cn from 'clsx';
import { NavbarLogo } from './components/NavbarLogo';
import { NavbarMenu } from './components/NavbarMenu';
import { MenuButton } from './components/MenuButton';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed flex w-full justify-center border-b border-b-gray-100 bg-white/60 backdrop-blur-sm md:h-[4rem]">
      <nav className="flex w-full max-w-[80rem] flex-col items-center justify-between md:flex-row md:px-6">
        <div
          className={twMerge(
            'flex w-full items-center justify-between py-2 md:border-none',
            cn({ 'border-b border-b-gray-100': isMenuOpen })
          )}
        >
          <NavbarLogo />
          <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        <NavbarMenu isMenuOpen={isMenuOpen} onSelectOption={closeMenu} />
      </nav>
    </header>
  );
};
