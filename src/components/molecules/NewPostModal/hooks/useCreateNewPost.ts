import { useMutation } from '@tanstack/react-query';

import { ALERT_TYPES } from '../../../../constants';
import { useAlert } from '../../../../hooks/useAlert';
import { createPost } from '../../../../services/api';
import queryClient from '../../../../services/queryClient';

export const useCreateNewPost = (onClose: () => void) => {
  const { addAlert } = useAlert();
  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      onClose();
      addAlert({
        id: crypto.randomUUID(),
        title: 'Success',
        message: 'Post successfully created',
        type: ALERT_TYPES.SUCCESS
      });
    },
    onError: () => {
      onClose();
      addAlert({
        id: crypto.randomUUID(),
        title: 'Error',
        message: 'Error creating post',
        type: ALERT_TYPES.ERROR
      });
    }
  });

  return {
    createPostTrigger: mutate,
    isLoading: isPending
  };
};
