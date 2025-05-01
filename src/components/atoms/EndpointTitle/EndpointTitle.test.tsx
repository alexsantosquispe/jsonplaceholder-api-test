import { render, screen } from '@testing-library/react';

import { EndpointTitle } from './EndpointTitle';

describe('EndpointTitle', () => {
  describe('Styles', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <EndpointTitle methodLabel="GET" label="Posts" />
      );
      expect(container).toMatchSnapshot();
    });

    it('should render correctly', () => {
      render(<EndpointTitle methodLabel="GET" label="Posts" />);

      expect(screen.getByText('GET')).toBeInTheDocument();
      expect(screen.getByText('Posts')).toBeInTheDocument();
    });
  });
});
