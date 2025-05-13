import { useState } from 'react';

import AlertContext, { AlertType } from './AlertContext';
import { ALERT_TIMEOUT_DEFAULT, ALERT_TYPES } from '../constants';

interface AlertProviderProps {
  children: React.ReactNode;
}

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alerts, setAlerts] = useState<AlertType[]>([]);

  const addAlert = ({
    title,
    message,
    type = ALERT_TYPES.INFO,
    timeout = ALERT_TIMEOUT_DEFAULT
  }: Omit<AlertType, 'id'>) => {
    const id = crypto.randomUUID();
    setAlerts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => removeAlert(id), timeout);
  };

  const removeAlert = (alertId: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== alertId));
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
