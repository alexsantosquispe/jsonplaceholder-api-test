import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Pagination } from './components/Pagination';
import { TodoTable } from './components/TodoTable';
import { useTodos } from './hooks/useTodos';
import { DEFAULT_PAGE_SIZE, INITIAL_PAGE_NUMBER } from '../../../constants';
import { STRIPPED_BG } from '../../../constants/styles';
import { Option, SortByType } from '../../../services/api.types';
import { METHODS } from '../../../types';
import { Container } from '../../atoms/Container/Container';
import { ErrorScreen } from '../../atoms/ErrorScreen/ErrorScreen';
import { JumboCard } from '../../atoms/JumboCard/JumboCard';
import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';

const description = `This is an example of a task list for a team. By default, the tasks
are sorted by title. The table allows you to apply filters, sort by
columns, and adjust the number of tasks displayed per page.`;

const TODOS_ENDPOINTS = [
  {
    label: 'users',
    methodLabel: METHODS.GET
  },
  {
    label: 'todos',
    methodLabel: METHODS.GET
  }
];

const Todos = () => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_NUMBER);
  const [pageSize, setPageSize] = useState<Option>(DEFAULT_PAGE_SIZE);
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

  const resetPage = () => {
    setCurrentPage(INITIAL_PAGE_NUMBER);
  };

  if (!isLoading && error) return <ErrorScreen />;

  return (
    <div
      className={twMerge(
        'px-4 py-6 md:border md:border-y-0 md:border-dashed md:border-gray-200 md:px-6 md:py-12 md:dark:border-white/15',
        STRIPPED_BG
      )}
    >
      <div className="flex flex-col md:gap-y-8">
        <JumboCard
          title="JSON Placeholder"
          badgeLabel="Todos"
          endpoints={TODOS_ENDPOINTS}
        />

        <Container className="flex flex-col gap-y-8 py-4 md:border">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-primary text-2xl font-bold dark:text-white/80">
              TODOS
            </h2>
            <span className="text-primary/80 text-sm leading-7 md:w-3/4 md:text-base dark:text-white/80">
              {description}
            </span>
          </div>

          {isLoading && <LoadingScreen containerClassName="md:h-[68dvh]" />}

          {!isLoading && (
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
                  resetPage={resetPage}
                />
              )}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Todos;
