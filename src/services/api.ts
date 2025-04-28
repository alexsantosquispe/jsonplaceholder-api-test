import { Post, PostComment } from '../types';
import axios from 'axios';

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
