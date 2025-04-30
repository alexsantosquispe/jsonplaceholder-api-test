import { render, screen } from '@testing-library/react';

import { PostCard } from './PostCard';

describe('PostCard', () => {
  it('should render correctly', () => {
    render(<PostCard id={1} title="Test" body="Test" />);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard id={1} title="Test" body="Test" />);
    expect(container).toMatchSnapshot();
  });
});
