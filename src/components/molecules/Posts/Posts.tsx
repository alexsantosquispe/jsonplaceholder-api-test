import { Fragment } from 'react';
import { getPosts } from '../../../services/api';
import { Post } from '../../../types';
import { PostCard } from '../../atoms/PostCard/PostCard';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '../../atoms/Skeleton/Skeleton';
import { EndpointTitle } from '../../atoms/EndpointTitle/EndpointTitle';

const GRID_STYLES = 'grid gap-4 md:grid-cols-2 lg:grid-cols-4';

export const Posts = () => {
  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  if (isLoading) {
    return (
      <Skeleton
        countItems={12}
        classNames={{
          container: GRID_STYLES
        }}
      />
    );
  }

  if (error || !data?.length) return null;

  return (
    <div className="flex flex-col gap-y-6 rounded-lg px-6 md:py-6">
      <EndpointTitle methodLabel="GET" label="POSTS" />

      <div className={GRID_STYLES}>
        {data.map((post: Post) => (
          <Fragment key={post.id}>
            <PostCard {...post} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
