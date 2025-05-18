import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { INITIAL_PAGE_NUMBER } from '../../../../constants';
import { useIsMobile } from '../../../../hooks/useIsMobile';
import { getPosts } from '../../../../services/api';
import { PostResponse } from '../../../../services/api.types';

export const usePosts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { postId } = useParams();
  const isMobile = useIsMobile();

  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery<PostResponse>({
      queryKey: ['posts'],
      queryFn: ({ pageParam }) => getPosts({ pageParam: pageParam as number }),
      initialPageParam: INITIAL_PAGE_NUMBER,
      getNextPageParam: (lastPage) => lastPage.nextPage
    });

  useEffect(() => {
    if (
      !isMobile &&
      !isLoading &&
      data?.pages?.length &&
      location.pathname === '/posts'
    ) {
      navigate(`/posts/${data.pages[0].data[0].id}`, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.pages, isLoading, location.pathname, isMobile]);

  return {
    posts: data?.pages.flatMap((page) => page.data) ?? [],
    isLoading,
    error,
    isMobile,
    postId,
    fetchNextPage,
    hasNextPage
  };
};
