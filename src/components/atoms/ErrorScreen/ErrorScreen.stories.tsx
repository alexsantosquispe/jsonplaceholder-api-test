import { Meta, StoryObj } from '@storybook/react';

import { ErrorScreen } from './ErrorScreen';
import { Wrapper } from '../../../utils/stories-utils';

const meta = {
  title: 'Atoms/ErrorScreen',
  component: ErrorScreen,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ErrorScreen>;

export default meta;

type Story = StoryObj<typeof ErrorScreen>;

export const Default: Story = () => {
  return (
    <Wrapper>
      <ErrorScreen />
    </Wrapper>
  );
};

Default.args = {};
