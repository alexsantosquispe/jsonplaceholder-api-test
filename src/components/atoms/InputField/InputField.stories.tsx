import type { Meta, StoryObj } from '@storybook/react';
import { Control, FieldValues, useForm } from 'react-hook-form';

import { InputField } from './InputField';
import { Wrapper } from '../../../utils/stories-utils';

const meta = {
  title: 'Atoms/InputField',
  component: InputField,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = () => {
  const { control } = useForm();

  return (
    <div className="grid grid-cols-4 gap-4">
      <Wrapper>
        <InputField
          control={control as Control<FieldValues>}
          label="Input label"
          name="firstName"
          placeholder="Enter text..."
        />
      </Wrapper>
      <Wrapper>
        <InputField
          control={control as Control<FieldValues>}
          label="Input required"
          name="lastName"
          placeholder="Enter text..."
          isRequired
        />
      </Wrapper>
      <Wrapper>
        <InputField
          control={control as Control<FieldValues>}
          label="Input disabled"
          name="desc"
          placeholder="Enter text..."
          isDisabled
        />
      </Wrapper>
      <Wrapper>
        <InputField
          control={control as Control<FieldValues>}
          label="Input with error message"
          name="desc"
          placeholder="Enter text..."
          errorMessage="This field has an error"
        />
      </Wrapper>
    </div>
  );
};

Default.args = {};
