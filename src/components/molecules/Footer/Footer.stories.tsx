import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Footer } from './Footer';
import { Wrapper } from '../../../utils/stories-utils';

const meta = {
  title: 'Molecules/Footer',
  component: Footer,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <Wrapper className="flex w-full flex-col rounded-lg border border-gray-200 p-0">
            <div className="flex h-[30rem] flex-col items-center justify-center">
              <div>Main Content</div>
            </div>
            <Story />
          </Wrapper>
        </BrowserRouter>
      );
    }
  ]
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
