import { render } from '@testing-library/react';

import { CommentCard } from './CommentCard';

describe('CommentCard', () => {
  it('should render the component correctly', () => {
    const component = render(
      <CommentCard
        name="Anthony Stark"
        email="tony.stark@gmail.com"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo ut magnam vero eum, sunt dolorem quibusdam eligendi? Pariatur, sint? Eaque nihil, vel modi ad qui voluptatibus error enim consequuntur"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
