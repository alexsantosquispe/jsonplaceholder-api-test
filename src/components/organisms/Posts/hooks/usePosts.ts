import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useIsMobile } from '../../../../hooks/useIsMobile';
import { getPosts } from '../../../../services/api';
import { Post } from '../../../../types';

export const usePosts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { postId } = useParams();
  const isMobile = useIsMobile();

  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  useEffect(() => {
    if (
      !isMobile &&
      !isLoading &&
      data?.length &&
      location.pathname === '/posts'
    ) {
      navigate(`/posts/${data[0].id}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading, location.pathname, isMobile]);

  return { data, isLoading, error, isMobile, postId };
};
