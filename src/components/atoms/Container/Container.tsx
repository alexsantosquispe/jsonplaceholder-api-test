import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={twMerge(
        'text-primary/90 rounded-lg border-gray-200 bg-white md:px-6 dark:border-white/10 dark:bg-black/95 dark:text-white/80',
        className
      )}
    >
      {children}
    </div>
  );
};
