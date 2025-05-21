import { ExclamationOutlineIcon } from '../../../icons';

interface ErrorScreenProps {
  message?: string;
}

const defaultMessage = 'Ups! Something went wrong. Please try again later.';

export const ErrorScreen = ({ message }: ErrorScreenProps) => {
  return (
    <div className="-mt-[4rem] flex w-full items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center gap-y-4 rounded-xl border border-gray-200 p-8 shadow-xs md:p-40 dark:border-white/10">
        <ExclamationOutlineIcon className="size-8 text-red-600 md:size-10" />
        <span className="text-primary text-center font-medium md:text-2xl dark:text-white">
          {message || defaultMessage}
        </span>
      </div>
    </div>
  );
};
