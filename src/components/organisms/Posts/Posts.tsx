import { useQuery } from '@tanstack/react-query';
import { Fragment } from 'react';

import { getPosts } from '../../../services/api';
import { Post } from '../../../types';
import { EndpointTitle } from '../../atoms/EndpointTitle/EndpointTitle';
import { PostCard } from '../../atoms/PostCard/PostCard';
import { Skeleton } from '../../atoms/Skeleton/Skeleton';

const GRID_STYLE = 'grid gap-4 md:grid-cols-2 lg:grid-cols-4';
const SKELETON_COUNT_ITEMS = 15;

export const Posts = () => {
  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  if (isLoading) {
    return (
      <Skeleton
        countItems={SKELETON_COUNT_ITEMS}
        classNames={{
          container: GRID_STYLE
        }}
      />
    );
  }

  if (error || !data?.length) return null;

  return (
    <div className="flex flex-col gap-y-6 rounded-lg px-4 md:px-6 md:py-6 dark:text-white">
      <EndpointTitle methodLabel="GET" label="POSTS" />

      <div className={GRID_STYLE}>
        {data.map((post: Post) => (
          <Fragment key={post.id}>
            <PostCard {...post} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
