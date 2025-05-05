import { ChevronRightIcon, FolderIcon } from '../../../icons';
import { Album } from '../../../types';

type AlbumItemProps = Omit<Album, 'userId'>;

export const AlbumItem = ({ id, title }: AlbumItemProps) => {
  return (
    <div
      key={id}
      className="flex h-[5rem] items-center gap-3 rounded-lg border border-gray-200 pr-2 pl-3 md:gap-4 dark:border-white/10 dark:text-white/90"
    >
      <div>
        <FolderIcon className="size-6 dark:text-white/90" />
      </div>
      <span className="line-clamp-2 w-full text-xs font-semibold uppercase">
        {title}
      </span>
      <div className="p-2 hover:cursor-pointer hover:rounded-md hover:bg-gray-100 dark:hover:bg-white/10">
        <ChevronRightIcon className="size-4 font-bold text-black/70 dark:text-white/60" />
      </div>
    </div>
  );
};
