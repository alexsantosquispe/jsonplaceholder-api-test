type ModalClassName = {
  container?: string;
  body?: string;
};

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  title?: string;
  acceptLabel?: string;
  cancelLabel?: string;
  onAccept?: () => void;
  onCancel?: () => void;
  className?: ModalClassName;
}
