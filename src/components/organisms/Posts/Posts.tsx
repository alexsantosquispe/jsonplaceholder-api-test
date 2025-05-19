import cn from 'clsx';

import { usePosts } from './hooks/usePosts';
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

  if (error) return null;

  return (
    <div className="px-4 md:p-6">
      <div className="text-primary/90 flex rounded-lg md:grid md:h-[85vh] md:grid-cols-9 md:overflow-hidden md:border md:border-gray-200 md:shadow-sm dark:text-white/80 md:dark:border-white/10">
        <PostsSideBar
          data={posts}
          showMore={() => fetchNextPage()}
          hasNextPage={hasNextPage}
          className={isMobile ? cn({ hidden: postId, flex: !postId }) : ''}
        />
        <PostDetailContainer
          className={isMobile ? cn({ hidden: !postId, flex: postId }) : ''}
        />
      </div>
    </div>
  );
};

export default Posts;
