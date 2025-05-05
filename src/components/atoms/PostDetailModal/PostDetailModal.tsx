import useKeyPress from '../../../hooks/useKeyPress';
import { Comments } from '../../molecules/Comments/Comments';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { Modal } from '../Modal/Modal';
import { usePostDetails } from './hooks/usePostDetails';

interface PostDetailModalProps {
  postId: string;
  onClose: () => void;
}

const POST_DETAIL_STYLE =
  'flex w-full flex-col gap-6 rounded-lg px-4 md:gap-8 dark:text-white/90';
const POST_DETAIL_TITLE_STYLE =
  'line-clamp-5 text-xl leading-8 font-bold capitalize md:text-4xl md:leading-11';
const POST_DETAIL_BODY_STYLE = 'text-base leading-7 font-normal';

export const PostDetail = ({ postId }: { postId: string }) => {
  const { post, comments, isPostLoading, isCommentsLoading } =
    usePostDetails(postId);

  if (isPostLoading || isCommentsLoading) return <LoadingScreen />;

  return post ? (
    <div className={POST_DETAIL_STYLE}>
      <h3 className={POST_DETAIL_TITLE_STYLE}>{post?.title}</h3>
      <p className={POST_DETAIL_BODY_STYLE}>{post.body}.</p>

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
