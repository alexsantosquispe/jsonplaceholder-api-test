import { Fragment } from 'react/jsx-runtime';
import { PostComment } from '../../../types';
import { CommentCard } from '../../atoms/CommentCard/CommentCard';

type CommentsProps = {
  comments: PostComment[];
};

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="flex w-full flex-col gap-2 md:gap-6 dark:text-white">
      <div className="flex items-center gap-2 border-b border-b-gray-200 py-3 md:py-4 dark:border-white/20">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
          Comments
        </h4>
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-900 dark:bg-gray-600 dark:text-white">
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
