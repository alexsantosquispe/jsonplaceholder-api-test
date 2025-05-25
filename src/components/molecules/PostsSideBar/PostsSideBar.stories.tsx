import type { Meta, StoryObj } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { PostsSideBar } from './PostsSideBar';
import { AlertProvider } from '../../../contexts/AlertProvider';
import { PostsMock } from '../../../services/mocks';
import queryClient from '../../../services/queryClient';

const PostDetailWrapper = () => {
  return (
    <AlertProvider>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/posts']}>
          <Routes>
            <Route
              path="/posts"
              element={
                <PostsSideBar
                  data={PostsMock}
                  showMore={() => {}}
                  className="w-full md:border-0"
                  headerClassName="relative top-0"
                  hasNextPage
                />
              }
            />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    </AlertProvider>
  );
};

const meta = {
  title: 'molecules/PostsSideBar',
  component: PostsSideBar
} satisfies Meta<typeof PostsSideBar>;

export default meta;

type Story = StoryObj<typeof PostsSideBar>;

export const Default: Story = () => {
  return (
    <div className="flex overflow-hidden border-0 border-gray-200 p-0 md:h-[90dvh] md:rounded-lg md:border">
      <PostDetailWrapper />
    </div>
  );
};

Default.args = {};
