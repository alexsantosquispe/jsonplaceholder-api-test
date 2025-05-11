import { NewPostForm } from './components/NewPostForm/NewPostForm';
import { useCreateNewPost } from './hooks/useCreateNewPost';
import { Modal } from '../../atoms/Modal/Modal';
import { ModalProps } from '../../atoms/Modal/Modal.types';

export const NewPostModal = ({ onClose }: Pick<ModalProps, 'onClose'>) => {
  const { createPostTrigger, isLoading } = useCreateNewPost(onClose);

  return (
    <Modal
      onClose={onClose}
      title="New Post"
      acceptLabel="Create Post"
      className={{ container: 'md:w-[32rem]', body: 'pb-4 md:pb-2' }}
    >
      <NewPostForm isLoading={isLoading} onCreatePost={createPostTrigger} />
    </Modal>
  );
};
