import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CellProps {
  children: ReactNode;
  className?: string;
  isHeadCell?: boolean;
}

const CELL_STYLES =
  'text-primary/80 min-w-[7.25rem] px-4 py-2 text-start dark:text-white/90';

export const Cell = ({
  children,
  isHeadCell = false,
  className
}: CellProps) => {
  if (isHeadCell)
    return (
      <th className={twMerge(CELL_STYLES, 'font-medium', className)}>
        {children}
      </th>
    );

  return <td className={twMerge(CELL_STYLES, className)}>{children}</td>;
};
