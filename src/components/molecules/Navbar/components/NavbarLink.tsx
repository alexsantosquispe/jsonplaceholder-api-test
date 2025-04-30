import cn from 'clsx';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface NavbarLinkProps {
  label: string;
  path: string;
  onClick?: () => void;
}

export const NavbarLink = ({ label, path, onClick }: NavbarLinkProps) => {
  const linkActiveHandler = ({ isActive }: NavLinkRenderProps) =>
    twMerge(
      'w-full py-3 px-4 md:w-fit',
      cn({
        'text-black dark:text-white': isActive,
        'hover:text-black dark:hover:text-white': !isActive
      })
    );

  return (
    <NavLink
      to={path}
      className={linkActiveHandler}
      onClick={onClick ? onClick : undefined}
    >
      {label}
    </NavLink>
  );
};
