import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CellProps {
  children: ReactNode;
  className?: string;
  isHeadCell?: boolean;
}

const CELL_STYLES = 'px-4 py-[0.625rem] text-start';

export const Cell = ({
  children,
  isHeadCell = false,
  className
}: CellProps) => {
  if (isHeadCell)
    return (
      <th
        className={twMerge(
          'min-w-20 px-4 py-[0.625rem] text-start',
          'font-medium',
          className
        )}
      >
        {children}
      </th>
    );

  return <td className={twMerge(CELL_STYLES, className)}>{children}</td>;
};
