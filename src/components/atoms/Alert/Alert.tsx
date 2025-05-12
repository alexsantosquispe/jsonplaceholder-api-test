import { twMerge } from 'tailwind-merge';

import {
  CheckCircleIcon,
  CloseIcon,
  ExclamationIcon,
  InfoIcon
} from '../../../icons';

interface AlertProps {
  type?: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

const ICONS_MAP = {
  success: <CheckCircleIcon className="text-green-600 dark:text-emerald-500" />,
  error: <ExclamationIcon className="text-red-600 dark:text-red-500" />,
  info: <InfoIcon className="text-primary/90 dark:text-white/90" />
};
const TEXT_STYLES_MAP = {
  success: 'text-emerald-700 dark:text-emerald-500',
  error: 'text-red-700 dark:text-red-500',
  info: 'text-primary/90 dark:text-white/90'
};

export const Alert = ({ type = 'info', title, message }: AlertProps) => {
  const Icon = ICONS_MAP[type];

  return (
    <div
      className={twMerge(
        'flex w-fit items-center justify-between gap-x-3 rounded-xl border p-3 shadow-lg dark:shadow-neutral-800',
        'border-neutral-300 bg-neutral-100 dark:border-white/10 dark:bg-neutral-800'
      )}
    >
      {Icon}
      <div className="flex flex-col gap-2 text-sm">
        <span className={twMerge('font-medium', TEXT_STYLES_MAP[type])}>
          {title}
        </span>
        <span className="text-neutral-500 dark:text-white/80">{message}</span>
      </div>

      <button className="text-primary/60 hover:text-primary self-start hover:cursor-pointer dark:text-white/70 dark:hover:text-white">
        <CloseIcon className="size-5" />
      </button>
    </div>
  );
};
