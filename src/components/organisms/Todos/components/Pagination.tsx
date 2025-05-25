import { useMemo } from 'react';

import { INITIAL_PAGE_NUMBER, PAGE_SIZES } from '../../../../constants';
import { ChevronRightIcon } from '../../../../icons';
import { Option } from '../../../../services/api.types';
import { Button } from '../../../atoms/Button/Button';
import { Dropdown } from '../../../molecules/Dropdown/Dropdown';

interface PaginationProps {
  currentPage: number;
  pageSize: Option;
  totalItems: number;
  setPageSize: (option: Option) => void;
  handleNext: () => void;
  handlePrevious: () => void;
  resetPage: () => void;
}

export const Pagination = ({
  currentPage,
  totalItems,
  pageSize,
  setPageSize,
  handleNext,
  handlePrevious,
  resetPage
}: PaginationProps) => {
  const totalPages = useMemo(() => {
    return totalItems && pageSize.value
      ? Math.ceil(totalItems / Number(pageSize.value))
      : 0;
  }, [totalItems, pageSize.value]);

  const isFirstPage = currentPage === INITIAL_PAGE_NUMBER;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex items-center justify-between dark:text-white/90">
      <Dropdown
        optionSelected={pageSize}
        options={PAGE_SIZES}
        onSelect={(option: Option) => {
          resetPage();
          setPageSize(option);
        }}
        alignment="top"
      />

      <div className="flex items-center gap-x-2 md:gap-x-8">
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <div className="flex justify-end gap-2">
          <Button
            icon={<ChevronRightIcon className="size-4 rotate-180" />}
            onClick={handlePrevious}
            isSecondary
            isDisabled={isFirstPage}
            className="py-[0.375rem]"
          />
          <Button
            icon={<ChevronRightIcon className="size-4" />}
            onClick={handleNext}
            isSecondary
            isDisabled={isLastPage}
            className="py-[0.375rem]"
          />
        </div>
      </div>
    </div>
  );
};
