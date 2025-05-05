import { twMerge } from 'tailwind-merge';

interface LoadingScreenProps {
  containerClassName?: string;
  dotClassName?: string;
}

const DOT_STYLE =
  'h-4 w-4 animate-[bounce_0.65s_ease-in-out_infinite] rounded-full bg-black/80 dark:bg-white/80';

export const LoadingScreen = ({
  containerClassName = '',
  dotClassName = ''
}: LoadingScreenProps) => {
  return (
    <div
      className={twMerge('flex h-screen w-full', containerClassName)}
      role="status"
      aria-label="Loading"
    >
      <div className="flex w-full items-center justify-center space-x-3">
        <span
          className={twMerge(
            DOT_STYLE,
            '[animation-delay:-0.4s]',
            dotClassName
          )}
        />
        <span
          className={twMerge(
            DOT_STYLE,
            '[animation-delay:-0.3s]',
            dotClassName
          )}
        />
        <span
          className={twMerge(
            DOT_STYLE,
            '[animation-delay:-0.2s]',
            dotClassName
          )}
        />
        <span
          className={twMerge(
            DOT_STYLE,
            '[animation-delay:-0.1s]',
            dotClassName
          )}
        />
        <span className={twMerge(DOT_STYLE, dotClassName)} />
      </div>
    </div>
  );
};
