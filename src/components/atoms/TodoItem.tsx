import { twMerge } from 'tailwind-merge';
import cn from 'clsx';
import { Todo } from '../../types';

type TodoItemProps = Omit<Todo, 'userId'>;

export const TodoItem = ({ id, title, completed }: TodoItemProps) => {
  return (
    <div className="flex h-[4rem] items-center gap-x-4 rounded-lg border border-gray-200 px-4 dark:border-white/30 dark:text-white">
      <div className="h-5 w-5">
        <input
          id={id.toString()}
          type="checkbox"
          checked={completed}
          value=""
          onChange={() => {}}
          className="h-4 w-4 cursor-pointer rounded border-gray-300 bg-gray-100 accent-black dark:border-white/25 dark:bg-white/10 dark:accent-yellow-400"
        />
      </div>
      <label
        htmlFor={id.toString()}
        className={twMerge(
          'line-clamp-2 w-full text-sm leading-5 font-medium capitalize hover:cursor-pointer',
          cn({
            'text-black/30 line-through dark:text-white/30': completed
          })
        )}
      >
        {title}
      </label>
    </div>
  );
};
