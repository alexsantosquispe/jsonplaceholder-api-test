import { useState } from 'react';

import { Pagination } from './components/Pagination';
import { TodoTable } from './components/TodoTable';
import { useTodos } from './hooks/useTodos';
import { DEFAULT_OPTION, INITIAL_PAGE_NUMBER } from '../../../constants';
import { Option, SortByType } from '../../../services/api.types';
import { EndpointTitle } from '../../atoms/EndpointTitle/EndpointTitle';
import { ErrorScreen } from '../../atoms/ErrorScreen/ErrorScreen';
import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';
import { Wrapper } from '../../atoms/Wrapper/Wrapper';

const description = `This is an example of a task list for a team. By default, the tasks
are sorted by title. The table allows you to apply filters, sort by
columns, and adjust the number of tasks displayed per page.`;

const Todos = () => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_NUMBER);
  const [pageSize, setPageSize] = useState<Option>(DEFAULT_OPTION);
  const [sortBy, setSortBy] = useState<SortByType | null>(null);

  const { todos, totalItems, users, error, isLoading } = useTodos({
    page: currentPage,
    limit: Number(pageSize.value),
    sortBy: sortBy || undefined
  });

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  if (isLoading) return <LoadingScreen containerClassName="-mt-[4rem]" />;

  if (!isLoading && error) return <ErrorScreen />;

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
          <TodoTable
            todos={todos}
            users={users}
            onSortByColumn={setSortBy}
            sortByValue={sortBy}
          />

          {!!todos.length && (
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              pageSize={pageSize}
              setPageSize={setPageSize}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default Todos;
