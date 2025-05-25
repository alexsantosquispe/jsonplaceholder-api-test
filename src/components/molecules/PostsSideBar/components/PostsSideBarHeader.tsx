import { lazy, Suspense, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { PlusCircleIcon } from '../../../../icons';
import { Button } from '../../../atoms/Button/Button';
import { EndpointTitle } from '../../../atoms/EndpointTitle/EndpointTitle';

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
          'sticky top-15 flex min-h-14 items-center justify-between bg-white md:relative md:top-0 md:border-b md:border-gray-200 md:px-4 dark:bg-black md:dark:border-white/10',
          className
        )}
      >
        <EndpointTitle label="POSTS" />
        <Button
          label="New Post"
          type="button"
          onClick={openModal}
          icon={<PlusCircleIcon className="size-4" />}
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
