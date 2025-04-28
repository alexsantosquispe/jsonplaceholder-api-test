import { twMerge } from 'tailwind-merge';
import { BaseIconProps } from '../types';

export const AvatarIcon = ({ className = '' }: BaseIconProps) => {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100">
      <svg
        className={twMerge(
          'absolute -left-1 h-12 w-12 text-gray-400',
          className
        )}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};
