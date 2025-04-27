import { useState } from 'react';
import { Post } from '../../../types';
import { PostDetailModal } from '../PostDetailModal/PostDetailModal';

type PostCardProps = Omit<Post, 'userId'>;

export const PostCard = ({ id, title, body }: PostCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen((prev) => !prev);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <a
        key={id}
        className="flex h-auto w-full flex-col gap-4 rounded-lg border border-gray-200 bg-white px-4 py-6 shadow-sm hover:cursor-pointer hover:bg-gray-100"
        onClick={openModal}
      >
        <h4 className="text-base leading-7 font-semibold capitalize">
          {title}
        </h4>
        <p className="text-sm leading-6 font-normal text-gray-800 normal-case">
          {body}
        </p>
      </a>
      {isOpen && <PostDetailModal postId={String(id)} onClose={onClose} />}
    </>
  );
};
