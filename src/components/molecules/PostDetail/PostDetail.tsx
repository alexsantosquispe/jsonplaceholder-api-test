import { useParams } from 'react-router-dom';

import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';
import { Comments } from '../Comments/Comments';
import { usePostDetails } from './hooks/usePostDetails';
import { ErrorScreen } from '../../atoms/ErrorScreen/ErrorScreen';

export const PostDetail = () => {
  const params = useParams();
  const postId = Number(params?.postId);
  const { post, comments, isLoading, error } = usePostDetails(postId);

  if (isLoading) return <LoadingScreen />;

  if (error) return <ErrorScreen />;

  return post ? (
    <div className="flex w-full flex-col gap-4 rounded-lg md:gap-5">
      <h2 className="text-xl leading-7 font-bold capitalize md:text-2xl md:leading-10">
        {post?.title}
      </h2>
      <p className="text-primary/80 text-sm leading-6 md:text-base md:leading-8 dark:text-white/70">
        {post.body}.
      </p>

      {comments && <Comments comments={comments || []} />}
    </div>
  ) : null;
};
