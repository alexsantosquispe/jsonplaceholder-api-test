import { CloseIcon, MenuIcon } from '../../../../icons';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <button className="block h-4.5 px-4 md:hidden md:p-0" onClick={onClick}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};
