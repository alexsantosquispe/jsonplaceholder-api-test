import { ChevronRightIcon, FolderIcon } from '../../../icons';
import { Album } from '../../../types';

type AlbumItemProps = Omit<Album, 'userId'>;

export const AlbumItem = ({ id, title }: AlbumItemProps) => {
  return (
    <div
      key={id}
      className="flex h-[5rem] items-center gap-3 rounded-lg border border-gray-200 pr-1 pl-3 md:gap-4"
    >
      <div>
        <FolderIcon className="size-6" />
      </div>
      <span className="line-clamp-2 w-full text-xs font-medium uppercase">
        {title}
      </span>
      <div className="p-2 hover:cursor-pointer hover:rounded-md hover:bg-gray-100">
        <ChevronRightIcon className="size-4 text-black/70" />
      </div>
    </div>
  );
};
