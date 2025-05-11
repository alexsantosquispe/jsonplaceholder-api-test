import cn from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Post } from '../../../services/api.types';

type PostCardProps = Omit<Post, 'userId'> & {
  isPostSelected?: boolean;
};

export const PostCard = ({
  id,
  title,
  body,
  isPostSelected = false
}: PostCardProps) => {
  return (
    <div
      key={id}
      className={twMerge(
        'flex h-auto w-full flex-col gap-2 rounded-lg border p-3',
        'border-gray-200 hover:cursor-pointer hover:bg-gray-100',
        'dark:border-white/10 dark:hover:bg-white/10',
        cn({
          'md:border-gray-200 md:bg-gray-100 md:dark:border-white/10 md:dark:bg-white/10':
            isPostSelected
        })
      )}
    >
      <h4 className="text-base leading-7 font-medium capitalize md:text-sm md:leading-6">
        {title}
      </h4>
      <p className="text-primary/70 text-sm leading-6 font-normal normal-case md:text-xs md:leading-5 dark:text-white/70">
        {body}.
      </p>
    </div>
  );
};
