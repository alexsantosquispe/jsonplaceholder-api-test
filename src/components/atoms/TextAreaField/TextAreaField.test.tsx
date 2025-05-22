import { render, screen } from '@testing-library/react';
import { Control, FieldValues, useForm } from 'react-hook-form';

import { TextAreaField } from './TextAreaField';
import { TextAreaProps } from '../../../types';

const TextAreaWrapper = (props: Omit<TextAreaProps, 'control'>) => {
  const { control } = useForm();
  return <TextAreaField {...props} control={control as Control<FieldValues>} />;
};

describe('TextAreaField', () => {
  const errorMessage = 'Field with error';
  const props = {
    label: 'Input text',
    name: 'firstName',
    placeholder: 'Enter text...'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', () => {
    let component = render(<TextAreaWrapper {...props} />);
    expect(component).toMatchSnapshot();

    component = render(<TextAreaWrapper {...props} isRequired />);
    expect(component).toMatchSnapshot();
  });

  it('should show required indicator when isRequired is true', () => {
    render(<TextAreaWrapper {...props} isRequired />);

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should the input be disabled', () => {
    render(<TextAreaWrapper {...props} isDisabled />);

    const textAreaDisabled = screen.getByPlaceholderText(props.placeholder);

    expect(textAreaDisabled).toBeInTheDocument();

    expect(textAreaDisabled).toBeDisabled();
  });

  it('should display error message and error styles', () => {
    render(<TextAreaWrapper {...props} errorMessage={errorMessage} />);

    const textArea = screen.getByPlaceholderText(props.placeholder);

    expect(textArea).toBeInTheDocument();

    expect(textArea).toHaveClass('border-rose-600');

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
