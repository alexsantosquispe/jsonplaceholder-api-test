import { twMerge } from 'tailwind-merge';

import { METHODS, MethodsTypes } from '../../../types';

export interface EndpointTitleProps {
  label: string;
  methodLabel?: MethodsTypes;
}

const METHODS_COLORS = {
  [METHODS.GET]:
    'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-400',
  [METHODS.POST]:
    'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-400',
  [METHODS.PUT]:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-400',
  [METHODS.DELETE]: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-400'
};

export const EndpointTitle = ({ methodLabel, label }: EndpointTitleProps) => {
  const methodStyles = methodLabel ? METHODS_COLORS[methodLabel] : '';

  return (
    <div className="flex gap-x-2 rounded border border-gray-200 bg-gray-50 p-1 text-xs md:text-sm dark:border-white/10 dark:bg-white/10">
      {methodLabel && (
        <code
          className={twMerge(
            'min-w-[4rem] rounded-xs px-2 py-0.5 text-center uppercase',
            methodStyles
          )}
        >
          {methodLabel}
        </code>
      )}
      <code className="text-primary font-bold dark:text-white/80">{`/${label}`}</code>
    </div>
  );
};
