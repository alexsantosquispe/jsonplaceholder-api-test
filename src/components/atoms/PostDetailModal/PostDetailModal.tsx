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
    <div className="flex w-full flex-col gap-6 rounded-lg px-4 md:gap-8">
      <h3 className="line-clamp-5 text-lg leading-8 font-medium capitalize md:text-4xl md:leading-11">
        {post?.title}
      </h3>
      <p className="text-base leading-7 font-normal text-gray-800">
        {post.body}.
      </p>

      {comments && <Comments comments={comments} />}
    </div>
  ) : null;
};

export const PostDetailModal = ({ postId, onClose }: PostDetailModalProps) => {
  return (
    <Modal onClose={onClose}>
      <PostDetail postId={postId} />
    </Modal>
  );
};
