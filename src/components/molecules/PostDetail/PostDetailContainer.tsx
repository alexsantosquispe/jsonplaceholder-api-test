import { Outlet, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { ArrowLeftIcon } from '../../../icons';

export const PostDetailContainer = ({
  className = ''
}: {
  className?: string;
}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/posts', { replace: true });
  };

  return (
    <div
      className={twMerge(
        'w-full flex-col md:col-span-6 md:flex md:overflow-hidden',
        className
      )}
    >
      <button
        className="flex items-center gap-x-2 py-4 font-medium md:hidden"
        onClick={goBack}
      >
        <ArrowLeftIcon className="size-5" />
        Back
      </button>

      <div className="md:overflow-auto md:p-4">
        <Outlet />
      </div>
    </div>
  );
};
