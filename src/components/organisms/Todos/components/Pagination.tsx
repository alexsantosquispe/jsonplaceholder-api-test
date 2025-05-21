import { useMemo } from 'react';

import { INITIAL_PAGE_NUMBER, PAGE_SIZES } from '../../../../constants';
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
}

export const Pagination = ({
  currentPage,
  totalItems,
  pageSize,
  setPageSize,
  handleNext,
  handlePrevious
}: PaginationProps) => {
  const totalPages = useMemo(
    () => Math.ceil(totalItems / Number(pageSize.value)),
    [totalItems, pageSize.value]
  );

  const isFirstPage = currentPage === INITIAL_PAGE_NUMBER;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="flex items-center justify-between dark:text-white/90">
      <Dropdown
        optionSelected={pageSize}
        options={PAGE_SIZES}
        onSelect={setPageSize}
        alignment="top"
      />

      <div className="flex items-center gap-x-8">
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <div className="flex justify-end gap-2">
          <Button
            label="Previous"
            onClick={handlePrevious}
            isSecondary
            isDisabled={isFirstPage}
            className="py-[0.375rem]"
          />
          <Button
            label="Next"
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
