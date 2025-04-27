import { useQuery } from '@tanstack/react-query';
import { getCommentsByPostId, getPostById } from '../../../../services/api';
import { Post, PostComment } from '../../../../types';

export const usePostDetails = (postId: string) => {
  const { data: post, isLoading: isPostLoading } = useQuery<Post>({
    queryKey: ['postById'],
    queryFn: () => getPostById(postId),
    staleTime: 0
  });

  const { data: comments, isLoading: isCommentsLoading } = useQuery<
    PostComment[]
  >({
    queryKey: ['comments'],
    queryFn: () => getCommentsByPostId(postId),
    staleTime: 0
  });

  return { post, comments, isLoading: isPostLoading || isCommentsLoading };
};
