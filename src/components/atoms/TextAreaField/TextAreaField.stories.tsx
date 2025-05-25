import { Meta, StoryObj } from '@storybook/react';
import { Control, FieldValues, useForm } from 'react-hook-form';

import { TextAreaField } from './TextAreaField';
import { Wrapper } from '../../../utils/stories-utils';

const meta = {
  title: 'Atoms/TextAreaField',
  component: TextAreaField,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TextAreaField>;

export default meta;

type Story = StoryObj<typeof TextAreaField>;

export const Default: Story = () => {
  const { control } = useForm();

  return (
    <div className="grid grid-cols-4 gap-4">
      <Wrapper>
        <TextAreaField
          label="Textarea label"
          name="textarea-1"
          control={control as Control<FieldValues>}
          placeholder="Enter text..."
        />
      </Wrapper>
      <Wrapper>
        <TextAreaField
          label="Textarea required"
          name="textarea-2"
          control={control as Control<FieldValues>}
          placeholder="Enter text..."
          isRequired
        />
      </Wrapper>
      <Wrapper>
        <TextAreaField
          control={control as Control<FieldValues>}
          label="Textarea disabled"
          name="textarea-3"
          placeholder="Enter text..."
          isDisabled
        />
      </Wrapper>
      <Wrapper>
        <TextAreaField
          control={control as Control<FieldValues>}
          label="Textarea with error message"
          name="textarea-4"
          placeholder="Enter text..."
          errorMessage="This field has an error"
        />
      </Wrapper>
    </div>
  );
};

Default.args = {};
