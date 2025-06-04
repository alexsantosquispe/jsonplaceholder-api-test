import cn from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit';
  icon?: ReactNode;
  onClick?: () => void;
  isSecondary?: boolean;
  isDisabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const Button = ({
  label,
  type = 'button',
  onClick,
  icon = null,
  isDisabled = false,
  isSecondary = false,
  className = '',
  ariaLabel
}: ButtonProps) => {
  return (
    <button
      role="button"
      aria-disabled={isDisabled}
      aria-label={ariaLabel}
      className={twMerge(
        'flex cursor-pointer items-center justify-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 ease-in-out',
        cn({
          'bg-primary dark:text-primary text-white shadow-xs dark:bg-white/90':
            !isSecondary,
          'hover:bg-primary/80 dark:hover:bg-white/80': !isDisabled,
          'text-primary/80 hover:text-primary border border-black/10 bg-transparent shadow-xs hover:bg-gray-100 dark:border-white/15 dark:text-white dark:hover:bg-white/15':
            isSecondary,
          'text-primary/40 hover:text-primary/40 cursor-not-allowed border-black/5 hover:bg-transparent dark:border-white/10 dark:text-white/25 dark:hover:bg-transparent':
            isSecondary && isDisabled,
          'bg-primary/65 cursor-not-allowed dark:bg-white/25':
            !isSecondary && isDisabled
        }),
        className
      )}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
    >
      {icon && <span className="size-4">{icon}</span>}
      {label && label}
    </button>
  );
};
