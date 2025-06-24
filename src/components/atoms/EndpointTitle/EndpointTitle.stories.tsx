import type { Meta, StoryObj } from '@storybook/react';

import { EndpointTitle } from './EndpointTitle';
import { METHODS } from '../../../types';
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
    <Wrapper className="flex flex-col">
      <h1>Endpoints by method type</h1>
      <Wrapper>
        <EndpointTitle methodLabel={METHODS.GET} label="Posts" />
        <EndpointTitle methodLabel={METHODS.POST} label="Posts" />
        <EndpointTitle methodLabel={METHODS.PUT} label="Posts" />
        <EndpointTitle methodLabel={METHODS.DELETE} label="Posts" />
      </Wrapper>
    </Wrapper>
  );
};

Default.args = {};
