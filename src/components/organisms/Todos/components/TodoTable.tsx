import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

import { Cell } from './Cell';
import {
  CheckCircleOutlineIcon,
  ChevronUpDownIcon,
  ClockIcon
} from '../../../../icons';
import { Todo, User } from '../../../../services/api.types';
import { Button } from '../../../atoms/Button/Button';

const COLUMNS_MAP = [
  { label: 'Id', isSortEnabled: true },
  { label: 'User', isSortEnabled: false },
  { label: 'Title', isSortEnabled: true },
  { label: 'Completed', isSortEnabled: true }
];
const DIGITS_LENGTH = 3;

interface TodoTableProps {
  todos: Todo[];
  users: Record<string, User>;
}

export const TodoTable = ({ todos, users }: TodoTableProps) => {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-white/10">
      <table className="w-full">
        <thead>
          <tr className="text-[0.8125rem]">
            {COLUMNS_MAP.map(({ label, isSortEnabled }, index) => (
              <Fragment key={`${label}-${index}`}>
                <Cell
                  isHeadCell
                  className={twMerge(isSortEnabled ? 'px-0 py-1' : '')}
                >
                  {isSortEnabled ? (
                    <Button
                      label={label}
                      isSecondary
                      className="flex flex-row-reverse border-0 py-2 text-[0.8125rem]"
                      icon={<ChevronUpDownIcon className="size-4" />}
                    />
                  ) : (
                    label
                  )}
                </Cell>
              </Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => {
            const user = users?.[item.userId] || {};
            return (
              <tr
                key={item.id}
                className="border-t border-gray-200 text-sm hover:bg-gray-100 dark:border-white/10 dark:hover:bg-neutral-800"
              >
                <Cell>{`TASK-${String(item.id).padStart(DIGITS_LENGTH, '0')}`}</Cell>
                <Cell>
                  <div className="flex flex-col">
                    <span>{user?.name || 'Unknown'}</span>
                    <span className="text-xs text-neutral-500 lowercase dark:text-white/70">
                      {user?.email || '--'}
                    </span>
                  </div>
                </Cell>
                <Cell className="font-medium first-letter:uppercase">
                  {item.title}
                </Cell>
                <Cell>
                  <span className="flex items-center gap-x-1">
                    {item.completed ? (
                      <>
                        <CheckCircleOutlineIcon className="size-5 text-green-600 dark:text-emerald-500" />
                        Done
                      </>
                    ) : (
                      <>
                        <ClockIcon className="size-5 text-neutral-500 dark:text-white/90" />
                        Pending
                      </>
                    )}
                  </span>
                </Cell>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
