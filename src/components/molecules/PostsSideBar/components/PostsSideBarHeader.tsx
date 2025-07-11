import { Suspense, lazy, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { PlusCircleIcon } from '../../../../icons';
import { Button } from '../../../atoms/Button/Button';

const NewPostModal = lazy(() =>
  import('../../NewPostModal/NewPostModal').then((module) => ({
    default: module.default
  }))
);

export const PostsSideBarHeader = ({ className }: { className?: string }) => {
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
      <div
        className={twMerge(
          'sticky top-15 flex min-h-14 items-center justify-between bg-white/70 backdrop-blur-sm md:relative md:top-0 md:border-b md:border-gray-200 md:bg-transparent md:px-4 dark:bg-black/50 md:dark:border-white/10 md:dark:bg-transparent',
          className
        )}
      >
        <h2 className="text-primary text-2xl font-bold dark:text-white/80">
          POSTS
        </h2>
        <Button
          label="New Post"
          type="button"
          onClick={openModal}
          icon={<PlusCircleIcon className="size-4" />}
          ariaLabel="New post button"
        />
      </div>
      {isPostModalOpen && (
        <Suspense>
          <NewPostModal onClose={closeModal} />
        </Suspense>
      )}
    </>
  );
};
