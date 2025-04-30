import axios from 'axios';
import { Album, Photo, Post, PostComment, Todo, User } from '../types';

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

export const getPostById = async (id: string): Promise<Post> => {
  const response = await apiClient.get<Post>(`/posts/${id}`);
  return response.data;
};

export const getCommentsByPostId = async (
  id: string
): Promise<PostComment[]> => {
  const response = await apiClient.get<PostComment[]>(`/posts/${id}/comments`);
  return response.data;
};

export const getAlbums = async (): Promise<Album[]> => {
  const response = await apiClient.get<Album[]>('/albums');
  return response.data;
};

export const getPhotosByAlbumId = async (albumId: string): Promise<Photo[]> => {
  const response = await apiClient.get<Photo[]>(`/albums/${albumId}/photos`);
  return response.data;
};

export const getTodos = async (): Promise<Todo[]> => {
  const response = await apiClient.get<Todo[]>('/todos');
  return response.data;
};

export const getTodosByUserId = async (userId: string): Promise<Todo[]> => {
  const response = await apiClient.get<Todo[]>(`/users/${userId}/todos`);
  return response.data;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await apiClient.get<User[]>('/users');
  return response.data;
};
