import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Footer } from './Footer';

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
          <div className="flex w-full flex-col rounded-lg border border-gray-200">
            <div className="flex h-[30rem] flex-col items-center justify-center">
              <div>Main Content</div>
            </div>
            <Story />
          </div>
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
