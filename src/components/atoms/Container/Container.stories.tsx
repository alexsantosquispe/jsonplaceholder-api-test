import { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';
import { Wrapper } from '../../../utils/stories-utils';

const meta = {
  title: 'Atoms/Container',
  component: Container,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = () => {
  return (
    <Wrapper>
      <Container className="flex h-[35rem] items-center p-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Container>
    </Wrapper>
  );
};

Default.args = {};
