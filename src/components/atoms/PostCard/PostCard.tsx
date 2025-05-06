import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Post } from '../../../types';
import { PostDetailModal } from '../PostDetailModal/PostDetailModal';

type PostCardProps = Omit<Post, 'userId'>;

export const PostCard = ({ id, title, body }: PostCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    document.body.style.overflow = 'unset';
    setIsOpen(false);
  };

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };

  return (
    <>
      <a
        key={id}
        className={twMerge(
          'flex h-auto w-full flex-col gap-4 rounded-lg border px-4 py-6',
          'border-gray-200 text-black hover:cursor-pointer hover:bg-gray-100',
          'dark:border-white/10 dark:text-white dark:hover:border-white/10 dark:hover:bg-white/10'
        )}
        onClick={openModal}
      >
        <h4 className="text-base leading-7 font-semibold capitalize">
          {title}
        </h4>
        <p className="text-sm leading-6 font-normal normal-case">{body}.</p>
      </a>
      {isOpen && <PostDetailModal postId={String(id)} onClose={onClose} />}
    </>
  );
};
