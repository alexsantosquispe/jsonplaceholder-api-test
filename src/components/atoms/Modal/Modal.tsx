import { twMerge } from 'tailwind-merge';

import { FooterModal } from './components/FooterModal';
import { HeaderModal } from './components/HeaderModal';
import { ModalProps } from './Modal.types';

const MODAL_STYLES =
  'fixed inset-0 z-50 flex items-end md:items-center md:justify-center bg-black/80 backdrop-blur-xs dark:bg-black/15';
const MODAL_BODY_STYLES = 'flex flex-col overflow-auto px-2 md:px-4';

export const Modal = ({
  title,
  children,
  acceptLabel,
  cancelLabel,
  onClose,
  onCancel,
  onAccept,
  className
}: ModalProps) => {
  return (
    <div className={MODAL_STYLES}>
      <div
        className={twMerge(
          'flex w-full flex-col justify-between rounded-t-lg border md:rounded-lg',
          'md:w-[40rem]',
          'border-gray-100 bg-white',
          'dark:border-white/10 dark:bg-black',
          className?.container
        )}
      >
        <HeaderModal title={title} onClose={onClose} />

        <div className={twMerge(MODAL_BODY_STYLES, className?.body)}>
          {children}
        </div>

        <FooterModal
          acceptLabel={acceptLabel}
          cancelLabel={cancelLabel}
          onCancel={onCancel}
          onAccept={onAccept}
        />
      </div>
    </div>
  );
};
