import { CloseIcon, MenuIcon } from '../../../../icons';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <button
      aria-label={`${isOpen ? 'close menu button' : 'menu button'}`}
      className="block h-4.5 px-4 md:hidden md:p-0 dark:text-white"
      onClick={onClick}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};
