import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';

import NewPostModal from './NewPostModal';
import {
  AlertProviderWrapper,
  QueryClientProviderWrapper
} from '../../../utils/test-utils';
import { Button } from '../../atoms/Button/Button';

const NewPostModalWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AlertProviderWrapper>
      <QueryClientProviderWrapper>
        <>
          <Button label="Open modal" onClick={() => setIsOpen(true)} />
          {isOpen && <NewPostModal onClose={() => setIsOpen(false)} />}
        </>
      </QueryClientProviderWrapper>
    </AlertProviderWrapper>
  );
};

describe('NewPostModal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', () => {
    const component = render(<NewPostModalWrapper />);

    expect(component).toMatchSnapshot();
  });

  describe('Behavior', () => {
    it('it should open/close the NewPostModal', () => {
      render(<NewPostModalWrapper />);

      const openModalButton = screen.getByRole('button');

      expect(openModalButton).toBeInTheDocument();

      fireEvent.click(openModalButton);

      expect(screen.getByRole('form')).toBeInTheDocument();
    });
  });
});
