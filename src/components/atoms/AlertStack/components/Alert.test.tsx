import { render } from '@testing-library/react';

import { Alert } from './Alert';
import { ALERT_TYPES } from '../../../../constants';

describe('Alert', () => {
  const onCloseMock = jest.fn();
  const props = {
    type: ALERT_TYPES.INFO,
    title: 'Info',
    message: 'Info alert message',
    onClose: onCloseMock
  };

  it('should render the component correctly alert info', () => {
    const alert = render(<Alert {...props} />);

    expect(alert).toMatchSnapshot();
  });

  it('should render the component correctly alert success', () => {
    const alert = render(<Alert {...props} type={ALERT_TYPES.SUCCESS} />);

    expect(alert).toMatchSnapshot();
  });

  it('should render the component correctly alert error', () => {
    const alert = render(<Alert {...props} type={ALERT_TYPES.ERROR} />);

    expect(alert).toMatchSnapshot();
  });
});
