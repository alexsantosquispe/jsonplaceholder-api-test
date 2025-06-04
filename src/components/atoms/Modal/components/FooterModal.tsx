import { Button } from '../../Button/Button';
import { ModalProps } from '../Modal.types';

export const FooterModal = ({
  acceptLabel,
  cancelLabel,
  onAccept,
  onCancel
}: Pick<
  ModalProps,
  'acceptLabel' | 'cancelLabel' | 'onCancel' | 'onAccept'
>) => {
  if (!onCancel && !onAccept) {
    return null;
  }

  return (
    <div className="flex w-full justify-end space-x-4 px-4 py-2">
      {onCancel && (
        <Button
          label={cancelLabel || 'Cancel'}
          onClick={onCancel}
          isSecondary
          ariaLabel="Cancel button modal"
        />
      )}
      {onAccept && (
        <Button
          label={acceptLabel || 'Accept'}
          onClick={onAccept}
          type="submit"
          ariaLabel="Accept button modal"
        />
      )}
    </div>
  );
};
