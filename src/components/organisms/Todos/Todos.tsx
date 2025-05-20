import { useMemo, useState } from 'react';

import { TodoTable } from './components/TodoTable';
import { useTodos } from './hooks/useTodos';
import {
  DEFAULT_OPTION,
  INITIAL_PAGE_NUMBER,
  PAGE_SIZES,
  SORT_BY_TASK_TITLE
} from '../../../constants';
import { Option, SortByType } from '../../../services/api.types';
import { Button } from '../../atoms/Button/Button';
import { EndpointTitle } from '../../atoms/EndpointTitle/EndpointTitle';
import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';
import { Wrapper } from '../../atoms/Wrapper/Wrapper';
import { Dropdown } from '../../molecules/Dropdown/Dropdown';

const description = `This is an example of a task list for a team. By default, the tasks
are sorted by title. The table allows you to apply filters, sort by
columns, and adjust the number of tasks displayed per page.`;

const Todos = () => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_NUMBER);
  const [pageSize, setPageSize] = useState<Option>(DEFAULT_OPTION);
  const [sortBy, setSortBy] = useState<SortByType | null>(SORT_BY_TASK_TITLE);

  const { data, totalItems, users, error, isLoading } = useTodos({
    page: currentPage,
    limit: Number(pageSize.value),
    sortBy: sortBy || undefined
  });

  const totalPages = useMemo(
    () => Math.ceil(totalItems / Number(pageSize.value)),
    [totalItems, pageSize.value]
  );

  const isFirstPage = currentPage === INITIAL_PAGE_NUMBER;
  const isLastPage = currentPage === totalPages;

  const handleNext = () => {
    if (!isLastPage) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (!isFirstPage) setCurrentPage((prev) => prev - 1);
  };

  if (isLoading) return <LoadingScreen containerClassName="-mt-[4rem]" />;

  if (error) return null;

  return (
    <div className="px-4 md:p-6">
      <Wrapper className="flex flex-col gap-y-8 py-4">
        <div className="flex flex-col gap-y-2">
          <EndpointTitle label="TODOS" />
          <span className="text-primary/80 text-sm leading-7 md:w-3/4 md:text-base dark:text-white/80">
            {description}
          </span>
        </div>

        <div className="flex flex-col gap-y-4 text-sm">
          <div className="flex items-center justify-end">
            <Dropdown
              optionSelected={pageSize}
              options={PAGE_SIZES}
              onSelect={setPageSize}
            />
          </div>

          <TodoTable
            todos={data}
            users={users}
            onSortByColumn={setSortBy}
            sortByValue={sortBy}
          />

          <div className="flex items-center justify-end gap-8 dark:text-white/90">
            <span>{`Page ${currentPage} of ${totalPages}`}</span>

            <div className="flex justify-end gap-2">
              <Button
                label="Previous"
                onClick={handlePrevious}
                isSecondary
                isDisabled={currentPage === INITIAL_PAGE_NUMBER}
                className="py-[0.375rem]"
              />
              <Button
                label="Next"
                onClick={handleNext}
                isSecondary
                isDisabled={currentPage === totalPages}
                className="py-[0.375rem]"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Todos;
