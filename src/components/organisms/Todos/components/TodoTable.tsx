import { Fragment } from 'react';

import { Cell } from './Cell';
import { Todo, User } from '../../../../services/api.types';

const COLUMNS_MAP = ['id', 'user', 'task', 'status'];
const DIGITS_LENGTH = 3;

interface TodoTableProps {
  todos: Todo[];
  users: Record<string, User>;
}

export const TodoTable = ({ todos, users }: TodoTableProps) => {
  return (
    <div className="rounded-lg border border-gray-200">
      <table className="w-full">
        <thead>
          <tr className="text-xs uppercase">
            {COLUMNS_MAP.map((title, index) => (
              <Fragment key={`${title}-${index}`}>
                <Cell isHeadCell>{title}</Cell>
              </Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => {
            return (
              <tr
                key={item.id}
                className="text-primary/80 border-t border-gray-200 text-sm hover:bg-gray-50"
              >
                <Cell>{`TASK-${String(item.id).padStart(DIGITS_LENGTH, '0')}`}</Cell>
                <Cell>{users?.[item.userId].name}</Cell>
                <Cell className="first-letter:uppercase">{item.title}</Cell>
                <Cell>{item.completed.toString()}</Cell>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
