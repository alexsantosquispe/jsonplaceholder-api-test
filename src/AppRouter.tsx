import { Navigate, Route, Routes } from 'react-router-dom';

import { PostDetail } from './components/molecules/PostDetail/PostDetail';
import { Albums } from './components/organisms/Albums/Albums';
import { Posts } from './components/organisms/Posts/Posts';
import { Todos } from './components/organisms/Todos/Todos';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />} />

      <Route path="posts" element={<Posts />}>
        <Route path=":postId" element={<PostDetail />} />
      </Route>

      <Route path="albums" element={<Albums />} />
      <Route path="todos" element={<Todos />} />
    </Routes>
  );
};
