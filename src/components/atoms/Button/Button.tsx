import cn from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit';
  icon?: ReactNode;
  onClick?: () => void;
  isSecondary?: boolean;
  isDisabled?: boolean;
  className?: string;
}

export const Button = ({
  label,
  type = 'button',
  onClick,
  icon = null,
  isDisabled = false,
  isSecondary = false,
  className = ''
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex cursor-pointer items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium',
        cn({
          'bg-primary dark:text-primary text-white dark:bg-white/90':
            !isSecondary,
          'hover:bg-primary/80 dark:hover:bg-white/80': !isDisabled,
          'text-primary/90 border border-black/10 bg-transparent hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/15':
            isSecondary,
          'bg-primary/65 cursor-not-allowed dark:bg-white/25': isDisabled
        }),
        className
      )}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {icon && <span className="size-4">{icon}</span>}
      {label}
    </button>
  );
};
