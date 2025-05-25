import { useQuery } from '@tanstack/react-query';

import { getCommentsByPostId, getPostById } from '../../../../services/api';
import { Post, PostComment } from '../../../../services/api.types';

export const usePostDetails = (postId: number) => {
  const {
    data: post,
    isLoading: isPostLoading,
    error: postError
  } = useQuery<Post>({
    queryKey: ['postById', postId],
    queryFn: () => getPostById(postId),
    enabled: !!postId
  });

  const {
    data: comments,
    isLoading: isCommentsLoading,
    error: commentsError
  } = useQuery<PostComment[]>({
    queryKey: ['comments', postId],
    queryFn: () => getCommentsByPostId(postId),
    enabled: !!postId
  });

  return {
    post,
    comments,
    isLoading: isPostLoading || isCommentsLoading,
    error: postError || commentsError
  };
};
