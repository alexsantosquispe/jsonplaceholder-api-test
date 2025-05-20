import axios from 'axios';

import { PAGE_SIZES, SORT_BY_NAME, SORT_BY_TASK_TITLE } from './../constants';
import {
  Post,
  PostComment,
  Todo,
  User,
  Option,
  CreatePostArgs,
  PostResponse,
  TodoResponse,
  GetTodosArgs
} from './api.types';
import { LAST_PAGE_NUMBER, ORDER_ASC } from '../constants';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 3000
});

export const getPosts = async ({
  pageParam
}: {
  pageParam: number;
}): Promise<PostResponse> => {
  const response = await apiClient.get<Post[]>('/posts', {
    params: {
      _page: pageParam,
      _limit: PAGE_SIZES[0].value
    }
  });
  const nextPage = pageParam + 1;

  return {
    data: response.data,
    nextPage: nextPage > LAST_PAGE_NUMBER ? undefined : nextPage
  };
};

export const getPostById = async (id: number): Promise<Post> => {
  const response = await apiClient.get<Post>(`/posts/${id}`);
  return response.data;
};

export const createPost = async (newPost: CreatePostArgs): Promise<Post> => {
  const response = await apiClient.post<Post>('/posts', { data: newPost });
  return response.data;
};

export const getCommentsByPostId = async (
  postId: number
): Promise<PostComment[]> => {
  const response = await apiClient.get<PostComment[]>(
    `/posts/${postId}/comments`
  );
  return response.data;
};

export const getTodos = async ({
  page,
  limit,
  sortBy = SORT_BY_TASK_TITLE
}: GetTodosArgs): Promise<TodoResponse> => {
  const response = await apiClient.get<Todo[]>('/todos', {
    params: {
      _page: page,
      _limit: limit,
      _sort: sortBy
    }
  });

  return {
    todos: response.data ?? [],
    totalItems: response.headers['x-total-count'] ?? 0
  };
};

export const getTodosByUserId = async (userId: number): Promise<Todo[]> => {
  const response = await apiClient.get<Todo[]>(`/users/${userId}/todos`);
  return response.data;
};

export const getUsersMap = async (): Promise<Record<string, User>> => {
  const response = await apiClient.get<User[]>('/users');

  const usersMap: Record<string, User> =
    response.data?.reduce((acc, curr) => {
      return { ...acc, [curr.id]: curr };
    }, {}) || {};

  return usersMap;
};

export const getUserAsOptions = async (): Promise<Option[]> => {
  const response = await apiClient.get<User[]>('/users', {
    params: {
      _sort: SORT_BY_NAME,
      _order: ORDER_ASC
    }
  });

  return (
    response.data?.map(({ id, name }) => ({
      value: id.toString(),
      label: name
    })) ?? []
  );
};
