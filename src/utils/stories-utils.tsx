import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export const Wrapper = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        'flex w-full min-w-[20rem] items-center justify-center gap-4 border border-gray-200 p-8',
        className
      )}
    >
      {children}
    </div>
  );
};
