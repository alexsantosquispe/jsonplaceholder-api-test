import type { Meta, StoryObj } from '@storybook/react';

import { EndpointTitle } from './EndpointTitle';
import { Wrapper } from '../../../utils/stories-utils';

const meta = {
  title: 'Atoms/EndpointTitle',
  component: EndpointTitle,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof EndpointTitle>;

export default meta;

type Story = StoryObj<typeof EndpointTitle>;

export const Default: Story = () => {
  return (
    <Wrapper>
      <EndpointTitle methodLabel="GET" label="Posts" />
    </Wrapper>
  );
};

Default.args = {};
