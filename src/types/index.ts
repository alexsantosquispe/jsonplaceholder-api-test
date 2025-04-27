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
