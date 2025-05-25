import type { Meta, StoryObj } from '@storybook/react';
import { Control, FieldValues, useForm } from 'react-hook-form';

import { SelectField } from './SelectField';
import { OptionsMock } from '../../../constants/mocks';
import { Wrapper } from '../../../utils/stories-utils';

const meta = {
  title: 'Atoms/SelectField',
  component: SelectField,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof SelectField>;

export const Default: Story = () => {
  const { control } = useForm();

  return (
    <div className="flex w-full gap-4">
      <Wrapper className="w-full">
        <SelectField
          label="Select field default"
          name="select-1"
          control={control as Control<FieldValues>}
          options={OptionsMock}
        />
      </Wrapper>
      <Wrapper className="w-full">
        <SelectField
          label="Select field required"
          name="select-2"
          control={control as Control<FieldValues>}
          options={OptionsMock}
          isRequired
        />
      </Wrapper>
      <Wrapper className="w-full">
        <SelectField
          label="Select field disabled"
          name="select-3"
          control={control as Control<FieldValues>}
          options={OptionsMock}
          isDisabled
        />
      </Wrapper>
      <Wrapper className="w-full">
        <SelectField
          label="Select with error"
          name="select-4"
          control={control as Control<FieldValues>}
          options={OptionsMock}
          errorMessage="This field has an error"
        />
      </Wrapper>
    </div>
  );
};

Default.args = {};
