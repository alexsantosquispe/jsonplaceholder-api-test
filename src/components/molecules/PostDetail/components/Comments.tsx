import { Fragment } from 'react/jsx-runtime';

import { PostComment } from '../../../../services/api.types';
import { CommentCard } from '../../../atoms/CommentCard/CommentCard';

type CommentsProps = {
  comments: PostComment[];
};

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="flex w-full flex-col gap-5 md:gap-6">
      <div className="flex items-center gap-2 border-b border-gray-200 py-3 md:py-4 dark:border-white/10">
        <h3 className="text-primary/80 text-lg font-medium dark:text-white/80">
          Comments
        </h3>
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-900 dark:bg-white/20 dark:text-white/80">
          {comments.length || 0}
        </span>
      </div>

      {!!comments.length && (
        <div className="flex flex-col gap-8">
          {comments.map((comment) => (
            <Fragment key={comment.id}>
              <CommentCard {...comment} />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
