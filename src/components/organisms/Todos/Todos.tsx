import { TodoTable } from './components/TodoTable';
import { useTodos } from './hooks/useTodos';
import { Button } from '../../atoms/Button/Button';
import { EndpointTitle } from '../../atoms/EndpointTitle/EndpointTitle';
import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';
import { Wrapper } from '../../atoms/Wrapper/Wrapper';

const Todos = () => {
  const { data, users, error, isLoading } = useTodos();

  if (isLoading) {
    return <LoadingScreen containerClassName="-mt-[4rem]" />;
  }

  if (error) return null;

  return (
    <div className="px-4 md:p-6">
      <Wrapper className="flex flex-col gap-y-8 py-4">
        <div className="flex flex-col gap-y-2">
          <EndpointTitle label="TODOS" />
          <span className="text-sm leading-7 md:w-3/4 md:text-base dark:text-white/80">
            This is an example of a task list for a team. By default, the tasks
            are sorted by title. The table allows you to apply filters, sort by
            columns, and adjust the number of tasks displayed per page.
          </span>
        </div>

        <div className="flex flex-col gap-y-4">
          <TodoTable todos={data} users={users} />
          <div className="flex items-center justify-end gap-8 text-sm dark:text-white/90">
            <span>Page 1 of 20</span>

            <div className="flex justify-end gap-2">
              <Button label="Previous" onClick={() => {}} isSecondary />
              <Button label="Next" onClick={() => {}} isSecondary />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Todos;
