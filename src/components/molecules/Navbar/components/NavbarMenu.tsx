import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

import { NavbarLink } from './NavbarLink';
import { SwitchThemeButton } from '../../../atoms/SwitchThemeButton/SwitchThemeButton';

interface NavbarMenuProps {
  isMenuOpen: boolean;
  onSelectOption: () => void;
}

export const NavbarMenu = ({ isMenuOpen, onSelectOption }: NavbarMenuProps) => {
  return (
    <div
      className={twMerge(
        'flex w-full flex-col items-start overflow-hidden text-[0.9375rem] md:flex-row md:items-center md:justify-end md:gap-x-2 md:text-black/50 dark:text-white/60',
        cn({ 'h-0 md:h-auto': !isMenuOpen, 'h-auto': isMenuOpen })
      )}
    >
      <NavbarLink label="Posts" path="/posts" onClick={onSelectOption} />
      <NavbarLink label="Todos" path="/todos" onClick={onSelectOption} />
      <SwitchThemeButton
        classNameIcon="size-4"
        classNameContainer="hidden md:block"
      />
    </div>
  );
};
