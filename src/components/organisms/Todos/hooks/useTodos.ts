import { useQuery } from '@tanstack/react-query';

import { getTodos, getUsersMap } from '../../../../services/api';
import {
  GetTodosArgs,
  TodoResponse,
  User
} from '../../../../services/api.types';

const DEFAULT_TIME = 60000;

export const useTodos = ({ page, limit, sortBy }: GetTodosArgs) => {
  const { data: users } = useQuery<Record<string, User>>({
    queryKey: ['users-map'],
    queryFn: getUsersMap,
    gcTime: DEFAULT_TIME
  });

  const { data, error, isLoading } = useQuery<TodoResponse>({
    queryKey: ['todos', page, limit, sortBy],
    queryFn: () => getTodos({ page, limit, sortBy })
  });

  return {
    todos: data?.todos || [],
    totalItems: data?.totalItems || 0,
    users: users ?? {},
    error,
    isLoading
  };
};
