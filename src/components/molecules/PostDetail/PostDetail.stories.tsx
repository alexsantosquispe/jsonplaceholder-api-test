import type { Meta, StoryObj } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { PostDetail } from './PostDetail';
import queryClient from '../../../services/queryClient';

const PostDetailWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/posts/1']}>
        <Routes>
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

const meta = {
  title: 'Molecules/PostDetail',
  component: PostDetail
} satisfies Meta<typeof PostDetail>;

export default meta;

type Story = StoryObj<typeof PostDetail>;

export const Default: Story = () => {
  return (
    <div className="h-[80dvh] w-3/4 overflow-auto rounded-lg border border-gray-200 p-4">
      <PostDetailWrapper />
    </div>
  );
};

Default.args = {};
