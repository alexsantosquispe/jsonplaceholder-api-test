import useKeyPress from '../../../hooks/useKeyPress';
import { Modal } from '../Modal/Modal';
import { PostDetail } from '../PostDetail/PostDetail';

interface PostDetailModalProps {
  postId: number;
  onClose: () => void;
}

export const PostDetailModal = ({ postId, onClose }: PostDetailModalProps) => {
  useKeyPress('Escape', onClose);

  return (
    <Modal onClose={onClose}>
      <PostDetail postId={postId} />
    </Modal>
  );
};
