import cn from 'clsx';

import { usePosts } from './hooks/usePosts';
import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';
import { PostDetailContainer } from '../../molecules/PostDetail/PostDetailContainer';
import { PostsSideBar } from '../../molecules/PostsSideBar/PostsSideBar';

export const Posts = () => {
  const { data, isLoading, error, postId, isMobile } = usePosts();

  if (isLoading) return <LoadingScreen containerClassName="-mt-[4rem]" />;

  if (error || !data?.length) return null;

  return (
    <div className="text-primary/90 flex flex-col gap-y-6 px-4 md:h-screen md:p-6 dark:text-white/80">
      <div className="flex rounded-lg md:grid md:grid-cols-9 md:overflow-hidden md:border md:border-gray-200 md:dark:border-white/10">
        <PostsSideBar
          data={data}
          className={isMobile ? cn({ hidden: postId, flex: !postId }) : ''}
        />
        <PostDetailContainer
          className={isMobile ? cn({ hidden: !postId, flex: postId }) : ''}
        />
      </div>
    </div>
  );
};
