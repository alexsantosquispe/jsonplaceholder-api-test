import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Modal } from './Modal';
import { Wrapper } from '../../../utils/stories-utils';
import { Button } from '../Button/Button';

const meta = {
  title: 'Atoms/Modal',
  component: Modal
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper className="flex">
      <Button label="Open modal" onClick={() => setIsOpen(true)} />
      {isOpen && (
        <Modal title="Modal test" onClose={() => setIsOpen(false)}>
          <div className="text-primary flex w-full flex-col py-4 dark:text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            deserunt dicta voluptates ipsam in modi dignissimos facilis nesciunt
            ab, voluptatibus incidunt autem tempora nostrum veritatis doloremque
            reprehenderit ipsum iste earum.
            <div className="flex items-baseline pt-8 text-sm text-neutral-600">
              <strong>Note:&nbsp;&nbsp;</strong>Press the
              <pre className="text-primary mx-1 rounded bg-gray-100 px-2 py-0.5">
                Esc
              </pre>
              key in order to close the modaL
            </div>
          </div>
        </Modal>
      )}
    </Wrapper>
  );
};

Default.args = {};
