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
        'text-primary/90 rounded-lg md:border md:border-gray-200 md:px-6 md:shadow-xs dark:text-white/80 md:dark:border-white/10',
        className
      )}
    >
      {children}
    </div>
  );
};
