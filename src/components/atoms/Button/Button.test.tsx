import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './Button';
import { PlusCircleIcon } from '../../../icons';

describe('Button', () => {
  describe('Styles', () => {
    const onClickMock = jest.fn();
    const props = {
      icon: <PlusCircleIcon />,
      onClick: onClickMock
    };

    it('should render the component correctly for primary type', () => {
      const button = render(<Button {...props} label="Primary button" />);

      expect(button).toMatchSnapshot();
    });

    it('should render the component correctly for secondary type', () => {
      const button = render(
        <Button {...props} label="Secondary button" isSecondary />
      );

      expect(button).toMatchSnapshot();
    });

    it('should click the button', () => {
      render(<Button {...props} label="Secondary button" />);

      const button = screen.getByRole('button');

      fireEvent.click(button);

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
