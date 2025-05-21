import { Meta, StoryObj } from '@storybook/react';

import { ErrorScreen } from './ErrorScreen';

const meta = {
  title: 'Atoms/ErrorScreen',
  component: ErrorScreen,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ErrorScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
