import { twMerge } from 'tailwind-merge';

interface ModalProps {
  children: React.ReactNode;
  containerClassName?: string;
  onClose: () => void;
  onCancel?: () => void;
  onAccept?: () => void;
}

const HeaderModal = ({ onClose }: Pick<ModalProps, 'onClose'>) => {
  return (
    <div className="flex w-full justify-end gap-8 px-4 py-2">
      <button
        className="self-end text-gray-700 hover:cursor-pointer hover:text-black"
        onClick={onClose}
      >
        &#x2715;
      </button>
    </div>
  );
};

const FooterModal = ({
  onCancel,
  onAccept
}: Omit<ModalProps, 'children' | 'onClose'>) => {
  if (!onCancel || !onAccept) {
    return null;
  }

  return (
    <div className="flex w-full justify-end space-x-4 px-4 py-2">
      <button
        className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-black hover:cursor-pointer hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 focus:outline-none"
        onClick={onCancel}
      >
        Cancel
      </button>
      <button
        type="button"
        className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:cursor-pointer hover:bg-black/80 focus:ring-4 focus:ring-gray-500 focus:outline-none"
        onClick={onAccept}
      >
        Accept
      </button>
    </div>
  );
};

export const Modal = ({
  children,
  onClose,
  onCancel,
  onAccept,
  containerClassName
}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
      <div className="flex w-[700px] flex-col rounded-lg bg-white">
        <HeaderModal onClose={onClose} />

        <div
          className={twMerge(
            'flex w-full flex-col rounded-b-lg p-4',
            containerClassName
          )}
        >
          {children}
        </div>

        <FooterModal onCancel={onCancel} onAccept={onAccept} />
      </div>
    </div>
  );
};
