import type { Meta, StoryObj } from '@storybook/react';

import { EndpointTitle } from './EndpointTitle';

const meta = {
  title: 'Atoms/EndpointTitle',
  component: EndpointTitle,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof EndpointTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    methodLabel: 'GET',
    label: 'Posts'
  }
};
