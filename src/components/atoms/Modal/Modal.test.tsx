import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useState } from 'react';

import { Modal } from './Modal';
import { ModalProps } from './Modal.types';
import { Button } from '../Button/Button';

const TestComponentModal = (
  props: Omit<ModalProps, 'children' | 'onClose'>
) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button label="Open modal" onClick={() => setIsOpen(true)} />
      {isOpen && (
        <Modal {...props} onClose={() => setIsOpen(false)}>
          <div className="h-80 w-full">This is a content for a modal</div>;
        </Modal>
      )}
    </div>
  );
};

describe('Modal', () => {
  const onClose = jest.fn();
  const props = {
    title: 'Modal title',
    acceptLabel: 'Accept',
    cancelLabel: 'Cancel'
  };

  it('should render the component correctly', () => {
    const component = render(
      <Modal {...props} onClose={onClose}>
        <span>test</span>
      </Modal>
    );

    expect(component).toMatchSnapshot();
  });

  describe('Behavior', () => {
    it('should open the modal', async () => {
      render(<TestComponentModal {...props} />);

      const openModalButton = screen.getByText('Open modal');

      expect(openModalButton).toBeInTheDocument();

      await waitFor(() => {
        expect(screen.queryByText(props.title)).not.toBeInTheDocument();
      });

      fireEvent.click(openModalButton);

      await waitFor(() => {
        expect(screen.queryByText(props.title)).toBeInTheDocument();
      });
    });

    it('should close the modal', async () => {
      render(<TestComponentModal {...props} />);

      fireEvent.click(screen.getByText('Open modal'));

      await waitFor(() => {
        expect(screen.queryByText(props.title)).toBeInTheDocument();
      });

      const closeButton = screen.getAllByRole('button')[1];

      fireEvent.click(closeButton);

      await waitFor(() => {
        expect(screen.queryByText(props.title)).not.toBeInTheDocument();
      });
    });

    it('should close the modal using the Escape key', async () => {
      render(<TestComponentModal {...props} />);

      fireEvent.click(screen.getByText('Open modal'));

      const modal = screen.getByTestId('modal');

      expect(modal).toBeInTheDocument();

      fireEvent.keyDown(modal, {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27
      });

      await waitFor(() => {
        expect(screen.queryByText(props.title)).not.toBeInTheDocument();
      });
    });
  });
});
