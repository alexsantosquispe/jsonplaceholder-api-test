import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Cell } from './Cell';
import { COLUMNS_MAP } from '../../../../constants';
import {
  CheckCircleIcon,
  ChevronUpDownIcon,
  ClockIcon
} from '../../../../icons';
import { SortByType, Todo, User } from '../../../../services/api.types';
import { getFormattedDigits } from '../../../../utils';
import { Button } from '../../../atoms/Button/Button';

interface TodoTableProps {
  todos: Todo[];
  users: Record<string, User>;
  sortByValue: SortByType | null;
  onSortByColumn: (column: SortByType | null) => void;
}

const renderCompletedStatus = (completed: boolean) => {
  return (
    <div className="flex items-center gap-2 rounded-md border border-gray-200 px-2 py-0.5 text-xs dark:border-white/10">
      {completed ? (
        <>
          <CheckCircleIcon className="size-4 text-green-600 dark:text-emerald-500" />
          Done
        </>
      ) : (
        <>
          <ClockIcon className="size-4 text-neutral-500 dark:text-white/90" />
          Pending
        </>
      )}
    </div>
  );
};

export const TodoTable = ({
  todos,
  users,
  sortByValue,
  onSortByColumn
}: TodoTableProps) => {
  return (
    <div className="w-[90dvw] self-center overflow-auto rounded-lg border border-gray-200 md:w-full dark:border-white/10">
      {todos.length ? (
        <table className="w-full text-sm">
          <thead>
            <tr>
              {COLUMNS_MAP.map(({ key, label, isSortEnabled }) => (
                <Cell
                  key={key}
                  isHeadCell
                  className={twMerge(
                    isSortEnabled ? 'px-0 py-1' : 'text-[0.8125rem]'
                  )}
                >
                  {isSortEnabled ? (
                    <Button
                      label={label}
                      isSecondary
                      onClick={() => {
                        onSortByColumn(
                          sortByValue === key ? null : (key as SortByType)
                        );
                      }}
                      className={twMerge(
                        'flex flex-row-reverse border-0 py-2 text-[0.8125rem] shadow-none',
                        cn({
                          'bg-gray-100 dark:bg-white/15': sortByValue === key
                        })
                      )}
                      icon={<ChevronUpDownIcon className="size-4" />}
                      ariaLabel={`Short button by ${label}`}
                    />
                  ) : (
                    label
                  )}
                </Cell>
              ))}
            </tr>
          </thead>

          <tbody>
            {todos.map((item) => {
              const user = users?.[item.userId] || {};
              return (
                <tr
                  key={item.id}
                  className="border-t border-gray-200 hover:bg-gray-100 dark:border-white/10 dark:hover:bg-neutral-800"
                >
                  <Cell>{`TASK-${getFormattedDigits(item.id)}`}</Cell>
                  <Cell>
                    <div className="flex flex-col">
                      <span>{user.name || 'Unknown'}</span>
                      <span className="text-xs text-neutral-500 lowercase dark:text-white/70">
                        {user.email || '--'}
                      </span>
                    </div>
                  </Cell>
                  <Cell className="min-w-[15rem] whitespace-normal first-letter:uppercase">
                    {item.title}
                  </Cell>
                  <Cell>
                    <span className="flex items-center gap-x-1">
                      {renderCompletedStatus(item.completed)}
                    </span>
                  </Cell>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="text-primary/80 flex h-[50dvh] items-center justify-center dark:text-white/80">
          There is no data to show
        </div>
      )}
    </div>
  );
};
