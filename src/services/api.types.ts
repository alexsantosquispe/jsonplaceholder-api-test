type GeoType = {
  lat: string;
  lng: string;
};

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export interface PostResponse {
  data: Post[];
  nextPage?: number;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export type SortByType = keyof Todo;

export interface TodoResponse {
  todos: Todo[];
  totalItems: number;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
}

export interface Option {
  value: number | string;
  label: string;
}

export type CreatePostArgs = Omit<Post, 'id'>;

export type GetTodosArgs = {
  page: number;
  limit: number;
  sortBy?: string;
  order?: string;
};
