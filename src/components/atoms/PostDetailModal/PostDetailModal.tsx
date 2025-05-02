import useKeyPress from '../../../hooks/useKeyPress';
import { Comments } from '../../molecules/Comments/Comments';
import { Modal } from '../Modal/Modal';
import { SkeletonForModal } from '../Skeleton/Skeleton';
import { usePostDetails } from './hooks/usePostDetails';

interface PostDetailModalProps {
  postId: string;
  onClose: () => void;
}

export const PostDetail = ({ postId }: { postId: string }) => {
  const { post, comments, isPostLoading, isCommentsLoading } =
    usePostDetails(postId);

  if (isPostLoading || isCommentsLoading) return <SkeletonForModal />;

  return post ? (
    <div className="flex w-full flex-col gap-6 rounded-lg px-4 md:gap-8 dark:text-white">
      <h3 className="line-clamp-5 text-xl leading-8 font-bold capitalize md:text-4xl md:leading-11">
        {post?.title}
      </h3>
      <p className="text-base leading-7 font-normal">{post.body}.</p>

      {comments && <Comments comments={comments || []} />}
    </div>
  ) : null;
};

export const PostDetailModal = ({ postId, onClose }: PostDetailModalProps) => {
  useKeyPress('Escape', onClose);

  return (
    <Modal onClose={onClose}>
      <PostDetail postId={postId} />
    </Modal>
  );
};
