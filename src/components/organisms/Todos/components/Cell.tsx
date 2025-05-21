import { ReactNode, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CellProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  className?: string;
  isHeadCell?: boolean;
}

const CELL_STYLES =
  'text-primary/80 md:min-w-[7rem] px-4 py-2 text-start whitespace-nowrap dark:text-white/90';

export const Cell = ({
  children,
  isHeadCell = false,
  className,
  ...rest
}: CellProps) => {
  const mergedClasses = twMerge(
    CELL_STYLES,
    isHeadCell && 'font-medium',
    className
  );

  if (isHeadCell) {
    return (
      <th scope="col" className={mergedClasses} {...rest}>
        {children}
      </th>
    );
  }

  return (
    <td className={mergedClasses} {...rest}>
      {children}
    </td>
  );
};
