import cn from 'clsx';

import { usePosts } from './hooks/usePosts';
import { Container } from '../../atoms/Container/Container';
import { ErrorScreen } from '../../atoms/ErrorScreen/ErrorScreen';
import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';
import { PostDetailContainer } from '../../molecules/PostDetail/PostDetailContainer';
import { PostsSideBar } from '../../molecules/PostsSideBar/PostsSideBar';

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
    <div className="px-4 py-6 md:border-x md:border-dashed md:border-gray-200 md:px-6 md:py-12 md:dark:border-white/15">
      {posts.length ? (
        <Container className="flex md:grid md:h-[88dvh] md:grid-cols-9 md:overflow-hidden md:px-0">
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
  );
};

export default Posts;
