import type { Meta, StoryObj } from '@storybook/react';

import { LoadingScreen } from './LoadingScreen';
import { Wrapper } from '../../../utils/stories-utils';

const meta = {
  title: 'Atoms/LoadingScreen',
  component: LoadingScreen,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof LoadingScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = () => {
  return (
    <Wrapper className="w-full">
      <LoadingScreen />
    </Wrapper>
  );
};
Default.args = {};
