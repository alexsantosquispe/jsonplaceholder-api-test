import { useMutation } from '@tanstack/react-query';

import { createPost } from '../../../../services/api';
import queryClient from '../../../../services/queryClient';

export const useCreateNewPost = (onClose: () => void) => {
  const { mutate, isPending, error } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onSettled: () => {
      onClose();
    }
  });

  return { createPostTrigger: mutate, isLoading: isPending, error };
};
