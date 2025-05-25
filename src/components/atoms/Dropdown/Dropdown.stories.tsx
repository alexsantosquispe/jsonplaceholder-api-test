import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Dropdown } from './Dropdown';
import { LargeOptionsMock } from '../../../constants/mocks';
import { Wrapper } from '../../../utils/stories-utils';

const meta = {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = () => {
  const [dropdown1, setDropdown1] = useState(LargeOptionsMock[0]);
  const [dropdown2, setDropdown2] = useState(LargeOptionsMock[0]);
  const [dropdown3, setDropdown3] = useState(LargeOptionsMock[0]);
  const [dropdown4, setDropdown4] = useState(LargeOptionsMock[0]);

  return (
    <div className="flex w-full gap-4 text-sm">
      <Wrapper className="flex-col gap-2">
        <span>Bottom - Left</span>
        <Dropdown
          optionSelected={dropdown1}
          options={LargeOptionsMock}
          onSelect={setDropdown1}
        />
      </Wrapper>
      <Wrapper className="flex-col gap-2">
        <Dropdown
          optionSelected={dropdown2}
          options={LargeOptionsMock}
          onSelect={setDropdown2}
          verticalAlignment="top"
        />
        <span>Top - Left</span>
      </Wrapper>
      <Wrapper className="flex-col gap-2">
        <span>Bottom - Right</span>
        <Dropdown
          optionSelected={dropdown3}
          options={LargeOptionsMock}
          onSelect={setDropdown3}
          horizontalAlignment="right"
        />
      </Wrapper>
      <Wrapper className="flex-col gap-2">
        <Dropdown
          optionSelected={dropdown4}
          options={LargeOptionsMock}
          onSelect={setDropdown4}
          verticalAlignment="top"
          horizontalAlignment="right"
        />
        <span>Top - Right</span>
      </Wrapper>
    </div>
  );
};

Default.args = {};
