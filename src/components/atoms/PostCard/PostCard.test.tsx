import { render, screen } from '@testing-library/react';

import { PostCard } from './PostCard';

describe('PostCard', () => {
  const props = {
    id: 1,
    title: 'post card test',
    body: 'post card test body'
  };
  it('should render correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
