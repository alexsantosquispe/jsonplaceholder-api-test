import { twMerge } from 'tailwind-merge';

import { ALERT_TYPES } from '../../../constants';
import { AlertType } from '../../../context/AlertContext';
import { useAlert } from '../../../hooks/useAlert';
import {
  CheckCircleIcon,
  CloseIcon,
  ExclamationIcon,
  InfoIcon
} from '../../../icons';

type AlertProps = Omit<AlertType, 'id' | 'timeout'> & {
  onClose: () => void;
};

const ICONS_MAP = {
  [ALERT_TYPES.SUCCESS]: (
    <CheckCircleIcon className="text-green-600 dark:text-emerald-500" />
  ),
  [ALERT_TYPES.ERROR]: (
    <ExclamationIcon className="text-red-600 dark:text-red-500" />
  ),
  [ALERT_TYPES.INFO]: (
    <InfoIcon className="text-primary/90 dark:text-white/90" />
  )
};

const TEXT_STYLES_MAP = {
  [ALERT_TYPES.SUCCESS]: 'text-emerald-700 dark:text-emerald-500',
  [ALERT_TYPES.ERROR]: 'text-red-700 dark:text-red-500',
  [ALERT_TYPES.INFO]: 'text-primary/90 dark:text-white/90'
};

export const Alert = ({
  type = ALERT_TYPES.INFO,
  title,
  message,
  onClose
}: AlertProps) => {
  const Icon = ICONS_MAP[type];

  return (
    <div
      className={twMerge(
        'shadow-primary/30 flex min-w-[18.75rem] items-center justify-between gap-x-2 rounded-lg border px-3 py-2 shadow-lg dark:shadow-white/15',
        'border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-neutral-800'
      )}
    >
      {Icon}
      <div className="flex w-full flex-col text-sm">
        <span
          className={twMerge('text-left font-medium', TEXT_STYLES_MAP[type])}
        >
          {title}
        </span>
        <span className="text-neutral-600 dark:text-white/80">{message}</span>
      </div>

      <button
        className="text-primary/60 hover:text-primary self-start hover:cursor-pointer dark:text-white/70 dark:hover:text-white"
        onClick={onClose}
      >
        <CloseIcon className="size-5" />
      </button>
    </div>
  );
};

export const AlertStack = () => {
  const { alerts, removeAlert } = useAlert();

  return (
    <div className="fixed top-[8.5rem] z-40 flex w-full flex-col items-center gap-y-2 md:top-[4.5rem]">
      {alerts.map((alert) => (
        <Alert
          key={alert.id}
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={() => removeAlert(alert.id)}
        />
      ))}
    </div>
  );
};
