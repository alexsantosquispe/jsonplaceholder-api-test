import { render } from '@testing-library/react';

import { ErrorScreen } from './ErrorScreen';

describe('ErrorScreen', () => {
  it('should render the component correctly', () => {
    const component = render(<ErrorScreen />);

    expect(component).toMatchSnapshot();
  });
});
