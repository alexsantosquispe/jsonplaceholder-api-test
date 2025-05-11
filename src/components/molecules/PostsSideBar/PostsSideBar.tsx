import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { PlusCircle } from '../../../icons';
import { Post } from '../../../services/api.types';
import { Button } from '../../atoms/Button/Button';
import { EndpointTitle } from '../../atoms/EndpointTitle/EndpointTitle';
import { PostCard } from '../../atoms/PostCard/PostCard';
import { NewPostModal } from '../NewPostModal/NewPostModal';

interface PostsSideBarProps {
  data: Post[];
  className?: string;
}

export const PostsSideBarHeader = () => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const openModal = () => {
    setIsPostModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsPostModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="sticky top-15 flex min-h-14 items-center justify-between bg-white md:relative md:top-0 md:border-b md:border-gray-200 md:px-4 dark:bg-black md:dark:border-white/10">
        <EndpointTitle label="POSTS" />
        <Button
          label="New Post"
          type="button"
          onClick={openModal}
          icon={<PlusCircle className="size-4" />}
        />
      </div>
      {isPostModalOpen && <NewPostModal onClose={closeModal} />}
    </>
  );
};

export const PostsSideBar = ({ data, className = '' }: PostsSideBarProps) => {
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
      </aside>
    </div>
  );
};
