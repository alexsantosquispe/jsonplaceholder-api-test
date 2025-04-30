import { useQuery } from '@tanstack/react-query';
import { Fragment } from 'react';

import { getTodos } from '../../../services/api';
import { Todo } from '../../../types';
import { EndpointTitle } from '../../atoms/EndpointTitle/EndpointTitle';
import { TodoItem } from '../../atoms/TodoItem';

export const Todos = () => {
  const { data, error } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: getTodos
  });

  if (error || !data?.length) return null;

  return (
    <div className="flex flex-col gap-y-6 px-4 md:px-6 md:py-6">
      <EndpointTitle methodLabel="GET" label="TODOS" />

      <div className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {data.map((todo: Todo) => (
          <Fragment key={todo.id}>
            <TodoItem {...todo} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
