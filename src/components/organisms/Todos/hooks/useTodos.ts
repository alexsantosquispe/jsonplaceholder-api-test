import { useQuery } from '@tanstack/react-query';

import { getTodos, getUsersMap } from '../../../../services/api';
import { Todo, User } from '../../../../services/api.types';

const DEFAULT_TIME = 60000;

export const useTodos = () => {
  const { data: users } = useQuery<Record<string, User>>({
    queryKey: ['users-map'],
    queryFn: getUsersMap,
    gcTime: DEFAULT_TIME
  });

  const { data, error, isLoading } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: getTodos
  });

  return { data: data ?? [], users: users ?? {}, error, isLoading };
};
