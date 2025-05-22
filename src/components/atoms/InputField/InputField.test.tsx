import { render, screen } from '@testing-library/react';
import { Control, FieldValues, useForm } from 'react-hook-form';

import { InputField } from './InputField';
import { InputProps } from '../../../types';

const InputWrapper = (props: Omit<InputProps, 'control'>) => {
  const { control } = useForm();
  return <InputField {...props} control={control as Control<FieldValues>} />;
};

describe('InputField', () => {
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
    let component = render(<InputWrapper {...props} />);
    expect(component).toMatchSnapshot();

    //check the snapshot for required input
    component = render(<InputWrapper {...props} isRequired />);
    expect(component).toMatchSnapshot();
  });

  it('should show required indicator when isRequired is true', () => {
    render(<InputWrapper {...props} isRequired />);

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should the input be disabled', () => {
    render(<InputWrapper {...props} isDisabled />);

    const inputDisabled = screen.getByPlaceholderText(props.placeholder);

    expect(inputDisabled).toBeInTheDocument();

    expect(inputDisabled).toBeDisabled();
  });

  it('should display error message and error styles', () => {
    render(<InputWrapper {...props} errorMessage={errorMessage} />);

    const input = screen.getByPlaceholderText(props.placeholder);

    expect(input).toBeInTheDocument();

    expect(input).toHaveClass('border-rose-600');

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
