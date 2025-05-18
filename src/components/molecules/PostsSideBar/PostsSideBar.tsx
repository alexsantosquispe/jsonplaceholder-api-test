import { NavLink, useParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { PostsSideBarHeader } from './components/PostsSideBarHeader';
import { Post } from '../../../services/api.types';
import { PostCard } from '../../atoms/PostCard/PostCard';

interface PostsSideBarProps {
  data: Post[];
  showMore: () => void;
  hasNextPage?: boolean;
  className?: string;
}

export const PostsSideBar = ({
  data,
  showMore,
  hasNextPage = false,
  className = ''
}: PostsSideBarProps) => {
  const { postId } = useParams();
  const currentPostId = Number(postId);

  return (
    <div
      className={twMerge(
        'flex flex-col md:col-span-3 md:overflow-hidden md:border-r md:border-gray-200 md:dark:border-white/10',
        className
      )}
    >
      <PostsSideBarHeader />
      <aside className="flex w-full flex-col gap-y-3 md:gap-y-2 md:overflow-auto md:p-4">
        {data.map((post: Post) => (
          <NavLink key={post.id} to={`/posts/${post.id}`}>
            <PostCard {...post} isPostSelected={post.id === currentPostId} />
          </NavLink>
        ))}
        {hasNextPage && (
          <button
            className={twMerge(
              'text-primary/70 hover:text-primary cursor-pointer rounded-lg py-2 text-sm font-medium hover:bg-gray-100 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white',
              'transition-colors duration-150 ease-in-out'
            )}
            onClick={showMore}
          >
            Show more posts
          </button>
        )}
      </aside>
    </div>
  );
};
