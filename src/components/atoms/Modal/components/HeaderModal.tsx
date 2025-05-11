import { ModalProps } from '../Modal.types';

export const HeaderModal = ({
  onClose,
  title = ''
}: Pick<ModalProps, 'onClose' | 'title'>) => {
  return (
    <div className="flex w-full items-start justify-between gap-8 px-4 py-2">
      {title && <span className="py-1 text-lg font-medium">{title}</span>}
      <button
        className="text-gray-700 hover:cursor-pointer hover:text-black dark:text-white/70 dark:hover:text-white"
        onClick={onClose}
      >
        &#x2715;
      </button>
    </div>
  );
};
