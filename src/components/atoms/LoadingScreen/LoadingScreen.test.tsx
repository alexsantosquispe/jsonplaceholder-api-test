import { render } from '@testing-library/react';

import { LoadingScreen } from './LoadingScreen';

describe('Loading Screen', () => {
  it('should render the component correctly', () => {
    const component = render(<LoadingScreen />);

    expect(component).toMatchSnapshot();
  });
});
