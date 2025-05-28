import type { Meta, StoryObj } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import NewPostModal from './NewPostModal';
import { AlertProvider } from '../../../contexts/AlertProvider';
import queryClient from '../../../services/queryClient';
import { Wrapper } from '../../../utils/stories-utils';
import { AlertStack } from '../../atoms/AlertStack/AlertStack';
import { Button } from '../../atoms/Button/Button';

const NewPostModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertProvider>
      <QueryClientProvider client={queryClient}>
        <Wrapper className="flex-col items-start justify-start">
          <Button label="Open New Post Modal" onClick={() => setIsOpen(true)} />
          <div className="flex items-baseline pt-6 text-sm text-neutral-600">
            <strong>Note:&nbsp;&nbsp;</strong>Press the
            <pre className="text-primary mx-1 rounded bg-gray-100 px-2 py-0.5">
              Esc
            </pre>
            key in order to close the modaL
          </div>
          {isOpen && <NewPostModal onClose={() => setIsOpen(false)} />}
        </Wrapper>
        <AlertStack />
      </QueryClientProvider>
    </AlertProvider>
  );
};

const meta = {
  title: 'Molecules/NewPostModal',
  component: NewPostModal
} satisfies Meta<typeof NewPostModal>;

export default meta;

type Story = StoryObj<typeof NewPostModal>;

export const Default: Story = () => {
  return <NewPostModalWrapper />;
};

Default.args = {};
