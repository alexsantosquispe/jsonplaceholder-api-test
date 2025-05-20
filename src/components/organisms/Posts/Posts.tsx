import cn from 'clsx';

import { usePosts } from './hooks/usePosts';
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

  if (error) return null;

  return (
    <div className="px-4 md:p-6">
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
    </div>
  );
};

export default Posts;
