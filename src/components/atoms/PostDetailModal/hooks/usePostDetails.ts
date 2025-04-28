import { useQuery } from '@tanstack/react-query';
import { getCommentsByPostId, getPostById } from '../../../../services/api';
import { Post, PostComment } from '../../../../types';

export const usePostDetails = (postId: string) => {
  const { data: post, isLoading: isPostLoading } = useQuery<Post>({
    queryKey: ['postById', postId],
    queryFn: () => getPostById(postId),
    staleTime: 0,
    enabled: !!postId
  });

  const { data: comments, isLoading: isCommentsLoading } = useQuery<
    PostComment[]
  >({
    queryKey: ['comments', postId],
    queryFn: () => getCommentsByPostId(postId),
    staleTime: 0,
    enabled: !!postId
  });

  return { post, comments, isPostLoading, isCommentsLoading };
};
