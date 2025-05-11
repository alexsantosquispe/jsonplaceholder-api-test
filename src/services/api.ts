import axios from 'axios';

import {
  Album,
  Photo,
  Post,
  PostComment,
  Todo,
  User,
  SelectOption,
  CreatePostArgs
} from './api.types';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 3000
});

export const getPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get<Post[]>('/posts');
  return response.data;
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

export const getAlbums = async (): Promise<Album[]> => {
  const response = await apiClient.get<Album[]>('/albums');
  return response.data;
};

export const getPhotosByAlbumId = async (albumId: number): Promise<Photo[]> => {
  const response = await apiClient.get<Photo[]>(`/albums/${albumId}/photos`);
  return response.data;
};

export const getTodos = async (): Promise<Todo[]> => {
  const response = await apiClient.get<Todo[]>('/todos');
  return response.data;
};

export const getTodosByUserId = async (userId: number): Promise<Todo[]> => {
  const response = await apiClient.get<Todo[]>(`/users/${userId}/todos`);
  return response.data;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await apiClient.get<User[]>('/users');
  return response.data;
};

export const getUserAsOptions = async (): Promise<SelectOption[]> => {
  const response = await apiClient.get<User[]>('/users');
  return (
    response.data?.map(({ id, name }) => ({
      value: id.toString(),
      label: name
    })) ?? []
  );
};
