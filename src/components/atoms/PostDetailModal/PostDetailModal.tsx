import { Modal } from '../Modal/Modal';
import { usePostDetails } from './hooks/usePostDetails';

interface PostDetailModalProps {
  postId: string;
  onClose: () => void;
}

export const PostDetailModal = ({ postId, onClose }: PostDetailModalProps) => {
  const { post, comments, isLoading } = usePostDetails(postId);

  if (isLoading) return <>loading...</>;

  return (
    <Modal onClose={onClose}>
      {post && (
        <div className="flex w-full flex-col gap-6 rounded-lg px-4">
          <h3 className="line-clamp-3 text-xl leading-7 font-medium capitalize">
            {post?.title}
          </h3>
          <p className="text-md leading-7 font-normal text-gray-800">
            {post.body}
          </p>

          {comments?.length &&
            comments.map((comment, index) => {
              return (
                <div key={index} className="text-lg">
                  {`${comment.id}.- ${comment.body}`}
                </div>
              );
            })}
        </div>
      )}
    </Modal>
  );
};
