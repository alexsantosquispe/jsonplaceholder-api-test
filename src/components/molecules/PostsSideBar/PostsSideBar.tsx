import { NavLink, useParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { Post } from '../../../types';
import { Button } from '../../atoms/Button/Button';
import { EndpointTitle } from '../../atoms/EndpointTitle/EndpointTitle';
import { PostCard } from '../../atoms/PostCard/PostCard';

interface PostsSideBarProps {
  data: Post[];
  className?: string;
}

export const PostsSideBar = ({ data, className = '' }: PostsSideBarProps) => {
  const { postId } = useParams();
  const currentPostId = Number(postId);

  const openModal = () => {
    //TODO: Functionality for create a post
  };

  return (
    <div
      className={twMerge(
        'flex flex-col md:col-span-3 md:overflow-hidden md:border-r md:border-gray-200 md:dark:border-white/10',
        className
      )}
    >
      <div className="flex items-center justify-between pb-2 md:min-h-14 md:border-b md:border-gray-200 md:px-4 md:pb-0 md:dark:border-white/10">
        <EndpointTitle label="POSTS" />
        <div className="hidden md:block">
          <Button label="New Post" type="button" onClick={openModal} />
        </div>
        <div className="fixed right-6 bottom-6 z-10 md:hidden">
          <Button label="New Post" type="button" onClick={openModal} />
        </div>
      </div>
      <aside className="flex w-full flex-col gap-y-3 md:gap-y-2 md:overflow-auto md:p-4">
        {data.map((post: Post) => (
          <NavLink key={post.id} to={`/posts/${post.id}`}>
            <PostCard {...post} isPostSelected={post.id === currentPostId} />
          </NavLink>
        ))}
      </aside>
    </div>
  );
};
