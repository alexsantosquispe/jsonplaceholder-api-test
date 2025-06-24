import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PostDetail } from './components/molecules/PostDetail/PostDetail';
import Posts from './components/organisms/Posts/Posts';

const Todos = lazy(() =>
  import('./components/organisms/Todos/Todos').then((module) => ({
    default: module.default
  }))
);

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />} />

      <Route path="posts" element={<Posts />}>
        <Route path=":postId" element={<PostDetail />} />
      </Route>

      <Route
        path="todos"
        element={
          <Suspense>
            <Todos />
          </Suspense>
        }
      />
    </Routes>
  );
};
