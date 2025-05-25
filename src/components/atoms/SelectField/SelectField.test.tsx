import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';

import { SelectField, SelectFieldProps } from './SelectField';
import { OptionsMock } from '../../../constants/mocks';

const SelectFieldWrapper = (props: Omit<SelectFieldProps, 'control'>) => {
  const { control } = useForm();
  return <SelectField {...props} control={control as Control<FieldValues>} />;
};

describe('SelectField', () => {
  const errorMessage = 'Field with error';
  const props = {
    label: 'Select field',
    name: 'options',
    options: OptionsMock
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component correctly', () => {
    let component = render(<SelectFieldWrapper {...props} />);
    expect(component).toMatchSnapshot();

    component = render(<SelectFieldWrapper {...props} isRequired />);
    expect(component).toMatchSnapshot();
  });

  it('should show required indicator when isRequired is true', () => {
    render(<SelectFieldWrapper {...props} isRequired />);

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should display option and select one', async () => {
    render(<SelectFieldWrapper {...props} />);

    const selectField = screen.getByRole('combobox');

    expect(selectField).toBeInTheDocument();

    await act(async () => {
      await userEvent.selectOptions(selectField, '3');
    });

    const selectedOption = screen.getByRole('option', {
      name: 'Option 3'
    }) as HTMLOptionElement;

    expect(selectedOption.selected).toBe(true);

    expect((selectField as HTMLSelectElement).value).toBe('3');
  });

  it('should the select field be disabled', () => {
    render(<SelectFieldWrapper {...props} isDisabled />);

    const selectField = screen.getByRole('combobox');

    expect(selectField).toBeInTheDocument();

    expect(selectField).toBeDisabled();
  });

  it('should display the error message and error styles', () => {
    render(<SelectFieldWrapper {...props} errorMessage={errorMessage} />);

    const selectField = screen.getByRole('combobox');

    expect(selectField).toBeInTheDocument();

    expect(selectField).toHaveClass('border-rose-600');

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
