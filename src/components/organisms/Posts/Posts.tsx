import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

import { usePosts } from './hooks/usePosts';
import { STRIPPED_BG } from '../../../constants/styles';
import { METHODS } from '../../../types';
import { Container } from '../../atoms/Container/Container';
import { ErrorScreen } from '../../atoms/ErrorScreen/ErrorScreen';
import { JumboCard } from '../../atoms/JumboCard/JumboCard';
import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';
import { PostDetailContainer } from '../../molecules/PostDetail/PostDetailContainer';
import { PostsSideBar } from '../../molecules/PostsSideBar/PostsSideBar';

const POSTS_ENDPOINTS = [
  {
    label: 'posts',
    methodLabel: METHODS.GET
  },
  {
    label: 'posts/{id}',
    methodLabel: METHODS.GET
  },
  {
    label: 'posts/{id}/comments',
    methodLabel: METHODS.GET
  },
  {
    label: 'posts',
    methodLabel: METHODS.POST
  },
  {
    label: 'users',
    methodLabel: METHODS.GET
  }
];

const Posts = () => {
  const {
    posts,
    isLoading,
    error,
    postId,
    isMobile,
    fetchNextPage,
    hasNextPage
  } = usePosts();

  if (isLoading) return <LoadingScreen containerClassName="-mt-14" />;

  if (!isLoading && error) return <ErrorScreen />;

  return (
    <div
      className={twMerge(
        'px-4 py-6 md:border-x md:border-dashed md:border-gray-200 md:px-6 md:py-12 md:dark:border-white/15',
        STRIPPED_BG
      )}
    >
      <div className="flex flex-col md:gap-y-8">
        <JumboCard
          title="JSON Placeholder"
          badgeLabel="Posts"
          endpoints={POSTS_ENDPOINTS}
        />

        {posts.length ? (
          <Container className="flex md:grid md:h-[88dvh] md:grid-cols-9 md:overflow-hidden md:border md:px-0">
            <PostsSideBar
              data={posts}
              showMore={() => fetchNextPage()}
              hasNextPage={hasNextPage}
              className={isMobile ? cn({ hidden: postId, flex: !postId }) : ''}
            />
            <PostDetailContainer
              className={isMobile ? cn({ hidden: !postId, flex: postId }) : ''}
            />
          </Container>
        ) : (
          <div className="text-primary/80 flex h-[60dvh] items-center justify-center dark:text-white/80">
            There is no data to show
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
