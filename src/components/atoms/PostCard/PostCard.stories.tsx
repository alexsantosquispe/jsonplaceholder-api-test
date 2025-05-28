import type { Meta, StoryObj } from '@storybook/react';

import { PostCard } from './PostCard';
import { Wrapper } from '../../../utils/stories-utils';

const meta = {
  title: 'Atoms/PostCard',
  component: PostCard,
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem', width: '300px' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof PostCard>;

export default meta;

type Story = StoryObj<typeof PostCard>;

export const Default: Story = () => {
  return (
    <Wrapper>
      <PostCard
        id={1}
        title="Lorem ipsum dolor sit amet"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      />
    </Wrapper>
  );
};

Default.args = {};
