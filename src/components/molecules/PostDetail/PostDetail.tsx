import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';
import { Comments } from '../Comments/Comments';
import { usePostDetails } from './hooks/usePostDetails';
import { ArrowLeftIcon } from '../../../icons';

export const PostDetail = () => {
  const params = useParams();
  const postId = Number(params?.postId);

  const { post, comments, isPostLoading, isCommentsLoading } =
    usePostDetails(postId);

  if (isPostLoading || isCommentsLoading) return <LoadingScreen />;

  return post ? (
    <div className="flex w-full flex-col gap-4 rounded-lg md:gap-5">
      <h3 className="text-xl leading-7 font-bold capitalize md:text-2xl md:leading-10">
        {post?.title}
      </h3>
      <p className="text-primary/80 text-sm leading-6 md:text-base md:leading-8 dark:text-white/70">
        {post.body}.
      </p>

      {comments && <Comments comments={comments || []} />}
    </div>
  ) : null;
};

export const PostDetailContainer = ({
  className = ''
}: {
  className?: string;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={twMerge(
        'w-full flex-col gap-y-4 md:col-span-6 md:flex md:overflow-hidden',
        className
      )}
    >
      <button
        className="flex items-center gap-x-2 md:hidden"
        onClick={() => {
          navigate('/posts', { replace: true });
        }}
      >
        <ArrowLeftIcon className="size-4" />
        Go back
      </button>
      <div className="md:overflow-auto md:p-4">
        <Outlet />
      </div>
    </div>
  );
};
