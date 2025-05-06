import { Comments } from '../../molecules/Comments/Comments';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { usePostDetails } from './hooks/usePostDetails';

interface PostDetailProps {
  postId: number;
}

export const PostDetail = ({ postId }: PostDetailProps) => {
  const { post, comments, isPostLoading, isCommentsLoading } =
    usePostDetails(postId);

  if (isPostLoading || isCommentsLoading) return <LoadingScreen />;

  return post ? (
    <div className="flex w-full flex-col gap-6 rounded-lg px-4 md:gap-8">
      <h3 className="line-clamp-5 text-2xl leading-8 font-bold capitalize md:text-4xl md:leading-11">
        {post?.title}
      </h3>
      <p className="text-primary/80 text-base leading-7 font-normal dark:text-white/70">
        {post.body}.
      </p>

      {comments && <Comments comments={comments || []} />}
    </div>
  ) : null;
};
