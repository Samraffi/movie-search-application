export interface AlertProps {
  message: string;
  type?: AlertType;
  isOpen: boolean;
  onClose: () => void;
}

export type AlertType = 'error' | 'success' | 'warning' | 'info';

export interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}
