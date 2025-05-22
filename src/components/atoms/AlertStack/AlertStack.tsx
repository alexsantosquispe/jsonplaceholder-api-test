import { Alert } from './components/Alert';
import { useAlert } from '../../../hooks/useAlert';

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
