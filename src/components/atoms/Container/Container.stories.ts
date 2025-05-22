import { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';

const meta = {
  title: 'Atoms/Container',
  component: Container,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'h-[35rem] p-10 flex items-center',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
};
