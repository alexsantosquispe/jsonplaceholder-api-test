import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta = {
  title: 'Atoms/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof CommentCard>;

export const Default: Story = {
  args: {
    name: 'Anthony Stark',
    email: 'tony.stark@gmail.com',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
};
