import { useQuery } from '@tanstack/react-query';
import { Fragment } from 'react';

import { getAlbums } from '../../../services/api';
import { Album } from '../../../types';
import { AlbumItem } from '../../atoms/AlbumItem/AlbumItem';
import { EndpointTitle } from '../../atoms/EndpointTitle/EndpointTitle';
import { LoadingScreen } from '../../atoms/LoadingScreen/LoadingScreen';

const GRID_STYLE =
  'grid gap-2 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5';

export const Albums = () => {
  const { data, error, isLoading } = useQuery<Album[]>({
    queryKey: ['albums'],
    queryFn: getAlbums
  });

  if (isLoading) {
    return <LoadingScreen containerClassName="-mt-[4rem]" />;
  }

  if (error || !data?.length) return null;

  return (
    <div className="flex flex-col gap-y-6 px-4 md:px-6 md:py-6">
      <EndpointTitle methodLabel="GET" label="ALBUMS" />

      <div className={GRID_STYLE}>
        {data.map((album: Album) => (
          <Fragment key={album.id}>
            <AlbumItem {...album} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
