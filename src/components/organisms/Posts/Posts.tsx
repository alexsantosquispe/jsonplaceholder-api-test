import cn from 'clsx';

import { usePosts } from './hooks/usePosts';
import { ErrorScreen } from '../../atoms/ErrorScreen/ErrorScreen';
import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';
import { Wrapper } from '../../atoms/Wrapper/Wrapper';
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
    <div className="px-4 md:p-6">
      {posts.length ? (
        <Wrapper className="flex md:grid md:h-[85dvh] md:grid-cols-9 md:overflow-hidden md:px-0">
          <PostsSideBar
            data={posts}
            showMore={() => fetchNextPage()}
            hasNextPage={hasNextPage}
            className={isMobile ? cn({ hidden: postId, flex: !postId }) : ''}
          />
          <PostDetailContainer
            className={isMobile ? cn({ hidden: !postId, flex: postId }) : ''}
          />
        </Wrapper>
      ) : (
        <div className="text-primary/80 flex h-[60dvh] items-center justify-center dark:text-white/80">
          There is no data to show
        </div>
      )}
    </div>
  );
};

export default Posts;
