import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Button label="Open modal" onClick={() => setIsOpen(true)} />
      {isOpen && (
        <Modal title="Modal test" onClose={() => setIsOpen(false)}>
          <div className="flex w-full py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            deserunt dicta voluptates ipsam in modi dignissimos facilis nesciunt
            ab, voluptatibus incidunt autem tempora nostrum veritatis doloremque
            reprehenderit ipsum iste earum.
          </div>
        </Modal>
      )}
    </div>
  );
};

Default.args = {};
