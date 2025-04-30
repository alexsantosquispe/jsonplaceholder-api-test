import { Fragment } from 'react';
import cn from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useQuery } from '@tanstack/react-query';

import { getTodos } from '../../../services/api';
import { Todo } from '../../../types';
import { EndpointTitle } from '../../atoms/EndpointTitle/EndpointTitle';

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
        {data.map((todo: Todo) => {
          return (
            <Fragment key={todo.id}>
              {/* TODO: Move to a new component and handle onChange */}
              <div className="flex h-[4rem] items-center gap-x-4 rounded-lg border border-gray-200 p-4">
                <div className="h-5 w-5">
                  <input
                    id={todo.id.toString()}
                    type="checkbox"
                    checked={todo.completed}
                    disabled={todo.completed}
                    value=""
                    onChange={() => {}}
                    className="h-4 w-4 cursor-pointer rounded border-gray-300 bg-gray-100 accent-black"
                  />
                </div>
                <label
                  htmlFor={todo.id.toString()}
                  className={twMerge(
                    'line-clamp-2 w-full py-3 text-sm font-normal capitalize hover:cursor-pointer',
                    cn({ 'text-gray-400 line-through': todo.completed })
                  )}
                >
                  {todo.title}
                </label>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
