import { createContext } from 'react';

import { ALERT_TYPES } from '../constants';

export type AlertType = {
  id: string;
  title: string;
  message: string;
  type?: (typeof ALERT_TYPES)[keyof typeof ALERT_TYPES];
  timeout?: number;
};

interface AlertContextType {
  alerts: AlertType[];
  addAlert: (alert: AlertType) => void;
  removeAlert: (alertId: string) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

export default AlertContext;
