import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import { Wrapper } from '../../../utils/stories-utils';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = (args: Partial<ButtonProps>) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Wrapper className="flex-col">
        <Button label={args.label} />
        <span className="text-sm">Default</span>
      </Wrapper>
      <Wrapper className="flex-col">
        <Button label={args.label} isDisabled />
        <span className="text-sm">Disabled</span>
      </Wrapper>
      <Wrapper className="flex-col">
        <Button label="Secondary" isSecondary />
        <span className="text-sm">Secondary</span>
      </Wrapper>
      <Wrapper className="flex-col">
        <Button label="Secondary" isSecondary isDisabled />
        <span className="text-sm">Disabled</span>
      </Wrapper>
    </div>
  );
};

Default.args = {
  label: 'Button',
  onClick: () => alert('Button clicked!')
};
