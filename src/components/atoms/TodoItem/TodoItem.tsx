import cn from 'clsx';
import { ChangeEvent, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Todo } from '../../../types';

type TodoItemProps = Omit<Todo, 'userId'>;

export const TodoItem = ({ id, title, completed }: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsCompleted(event.target.checked);
  };

  return (
    <div className="flex h-[4rem] items-center gap-x-4 rounded-lg border border-gray-200 px-4 dark:border-white/10 dark:text-white">
      <div className="relative">
        <input
          id={id.toString()}
          type="checkbox"
          checked={isCompleted}
          onChange={onChange}
          className={twMerge(
            'size-4 cursor-pointer appearance-none rounded-sm border border-black bg-transparent checked:bg-black',
            'dark:border-white dark:checked:bg-white'
          )}
        />
        {isCompleted && (
          <svg
            className="pointer-events-none absolute top-[1.5px] h-4 w-4 text-white dark:text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>

      <label
        htmlFor={id.toString()}
        className={twMerge(
          'line-clamp-2 w-full text-sm leading-5 font-medium capitalize hover:cursor-pointer',
          cn({
            'text-black/30 line-through dark:text-white/30': isCompleted
          })
        )}
      >
        {title}
      </label>
    </div>
  );
};
