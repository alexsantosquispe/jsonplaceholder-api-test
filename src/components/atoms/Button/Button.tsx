import cn from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  label: string;
  type: 'button' | 'submit';
  icon?: ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
}

export const Button = ({
  label,
  type = 'button',
  onClick,
  isDisabled,
  className = '',
  icon = null
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 text-sm font-medium',
        'bg-primary text-white',
        'dark:text-primary dark:bg-white/90',
        cn({
          'bg-primary/65 cursor-not-allowed dark:bg-white/25': isDisabled,
          'hover:bg-primary/80 dark:hover:bg-white/80': !isDisabled
        }),
        className
      )}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};
