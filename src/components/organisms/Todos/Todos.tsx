import { TodoTable } from './components/TodoTable';
import { useTodos } from './hooks/useTodos';
import { EndpointTitle } from '../../atoms/EndpointTitle/EndpointTitle';
import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';

const Todos = () => {
  const { data, users, error, isLoading } = useTodos();

  if (isLoading) {
    return <LoadingScreen containerClassName="-mt-[4rem]" />;
  }

  if (error) return null;

  return (
    <div className="px-4 md:p-6">
      <div className="text-primary/90 flex flex-col gap-y-8 rounded-lg py-4 md:border md:border-gray-200 md:px-6 md:shadow-sm dark:text-white/80 md:dark:border-white/10">
        <div className="flex flex-col gap-y-2">
          <EndpointTitle label="TODOS" />
          <span className="text-primary/80 text-sm leading-7 md:w-3/4 md:text-base dark:text-white/80">
            This is an example of a task list for a team. By default, the tasks
            are sorted by title. The table allows you to apply filters, sort by
            columns, and adjust the number of tasks displayed per page.
          </span>
        </div>

        <div className="flex flex-col gap-y-4">
          <TodoTable todos={data} users={users} />
        </div>
      </div>
    </div>
  );
};

export default Todos;
