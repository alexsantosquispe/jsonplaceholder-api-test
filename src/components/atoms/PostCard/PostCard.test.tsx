import { render, screen } from '@testing-library/react';

import { PostCard } from './PostCard';

describe('PostCard', () => {
  const props = {
    id: 1,
    title: 'post card test',
    body: 'post card test body'
  };

  it('should match snapshot', () => {
    const component = render(<PostCard {...props} />);

    expect(component).toMatchSnapshot();

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});
