import { Fragment } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';

interface SkeletonProps {
  countItems: number;
  classNames?: { container?: string; item?: string };
}

const TEXT_LINE_STYLE = 'mb-2.5 min-w-60 h-2 w-full rounded-full bg-gray-200';

export const SkeletonItem = ({ className = '' }: { className?: string }) => {
  return (
    <div className={twMerge('flex w-full animate-pulse p-4', className)}>
      <div className="w-full space-x-8 py-2">
        <div className={twMerge(TEXT_LINE_STYLE, 'h-2.5')}></div>
        <div className={twMerge(TEXT_LINE_STYLE, 'mb-8 h-2.5')}></div>

        <div className={TEXT_LINE_STYLE}></div>
        <div className={TEXT_LINE_STYLE}></div>
        <div className={TEXT_LINE_STYLE}></div>
        <div className={twMerge(TEXT_LINE_STYLE, 'max-w-7/8')}></div>
        <div className={twMerge(TEXT_LINE_STYLE, 'max-w-2/3')}></div>
      </div>
    </div>
  );
};

export const Skeleton = ({
  countItems = 1,
  classNames = { container: '', item: '' }
}: SkeletonProps) => {
  return (
    <div className={classNames.container}>
      {[...Array(countItems)].map((_, index) => (
        <Fragment key={index}>
          <SkeletonItem className={classNames.item} />
        </Fragment>
      ))}
    </div>
  );
};
