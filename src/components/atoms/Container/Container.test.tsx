import { render } from '@testing-library/react';

import { Container } from './Container';

describe('ErrorScreen', () => {
  it('should render the component correctly', () => {
    const component = render(
      <Container className="bg-yellow-300">
        <div>test</div>
      </Container>
    );

    expect(component).toMatchSnapshot();
  });
});
