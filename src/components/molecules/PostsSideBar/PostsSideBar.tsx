import { NavLink, useParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { PostsSideBarHeader } from './components/PostsSideBarHeader';
import { Post } from '../../../services/api.types';
import { Button } from '../../atoms/Button/Button';
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
          <Button
            label="Show more posts"
            onClick={showMore}
            isSecondary
            className="border-0 shadow-none"
          />
        )}
      </aside>
    </div>
  );
};
