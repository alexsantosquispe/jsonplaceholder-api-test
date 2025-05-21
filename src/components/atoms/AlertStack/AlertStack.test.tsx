import {
  fireEvent,
  render,
  screen,
  waitFor,
  within
} from '@testing-library/react';
import { act } from 'react';

import { ALERT_TIMEOUT_DEFAULT, ALERT_TYPES } from '../../../constants';
import { useAlert } from '../../../hooks/useAlert';
import { AlertProviderWrapper } from '../../../utils/test-utils';

const TestComponent = ({ timeout }: { timeout?: number }) => {
  const { addAlert } = useAlert();

  return (
    <button
      onClick={() =>
        addAlert({
          id: 'test-alert',
          title: 'Error',
          message: 'Error alert message',
          type: ALERT_TYPES.ERROR,
          timeout: timeout || ALERT_TIMEOUT_DEFAULT
        })
      }
    >
      Show Alert
    </button>
  );
};

jest.useFakeTimers();

describe('AlertStack', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should add an alert and it should be removed after 3000ms', async () => {
    render(
      <AlertProviderWrapper>
        <TestComponent />
      </AlertProviderWrapper>
    );

    fireEvent.click(screen.getByText('Show Alert'));

    await waitFor(() => {
      expect(screen.getByText('Error alert message')).toBeInTheDocument();
    });

    act(() => {
      jest.advanceTimersByTime(ALERT_TIMEOUT_DEFAULT);
    });

    await waitFor(() => {
      expect(screen.queryByText('Error alert message')).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  it('should add an alert and remove manually', async () => {
    render(
      <AlertProviderWrapper>
        <TestComponent timeout={5000} />
      </AlertProviderWrapper>
    );

    fireEvent.click(screen.getByText('Show Alert'));

    const alert = await waitFor(() => screen.findByTestId('alert'));

    expect(alert).toBeInTheDocument();

    const closeButton = await within(alert).findByRole('button');

    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText('Error alert message')).not.toBeInTheDocument();
    });
  });
});
