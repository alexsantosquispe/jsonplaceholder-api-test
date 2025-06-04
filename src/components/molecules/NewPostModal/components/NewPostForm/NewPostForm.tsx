import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { Control, FieldValues, useForm } from 'react-hook-form';

import {
  NewPostFormDefaultValues,
  NewPostFormSchema
} from './NewPostForm.schema';
import { NEW_POST_FORM_NAMES, NewPostFormValues } from './NewPostForm.types';
import { getUserAsOptions } from '../../../../../services/api';
import { CreatePostArgs, Option } from '../../../../../services/api.types';
import { Button } from '../../../../atoms/Button/Button';
import { InputField } from '../../../../atoms/InputField/InputField';
import { LoadingScreen } from '../../../../atoms/LoadingScreen/LoadingScreen';
import { SelectField } from '../../../../atoms/SelectField/SelectField';
import { TextAreaField } from '../../../../atoms/TextAreaField/TextAreaField';

interface NewPostFormProps {
  isLoading: boolean;
  onCreatePost: (formData: CreatePostArgs) => void;
}

export const NewPostForm = ({ isLoading, onCreatePost }: NewPostFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<NewPostFormValues>({
    resolver: zodResolver(NewPostFormSchema),
    defaultValues: NewPostFormDefaultValues
  });

  const { data: options } = useQuery<Option[]>({
    queryKey: ['users'],
    queryFn: getUserAsOptions
  });

  const onSubmit = (formData: NewPostFormValues) => {
    onCreatePost({
      userId: Number(formData.userId),
      title: formData.title,
      body: formData.description
    });
  };

  if (isLoading) return <LoadingScreen containerClassName="h-60" />;

  return (
    <form
      role="form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-y-4"
    >
      <SelectField
        label="User"
        name={NEW_POST_FORM_NAMES.USER_ID}
        control={control as unknown as Control<FieldValues>}
        placeholder="Select a user"
        errorMessage={errors[NEW_POST_FORM_NAMES.USER_ID]?.message}
        options={options || []}
        isRequired
      />
      <InputField
        label="Title"
        name={NEW_POST_FORM_NAMES.TITLE}
        control={control as unknown as Control<FieldValues>}
        placeholder="Enter title"
        errorMessage={errors[NEW_POST_FORM_NAMES.TITLE]?.message}
        isRequired
      />
      <TextAreaField
        label="Description"
        name={NEW_POST_FORM_NAMES.DESCRIPTION}
        control={control as unknown as Control<FieldValues>}
        placeholder="Enter description..."
        errorMessage={errors[NEW_POST_FORM_NAMES.DESCRIPTION]?.message}
        isRequired
      />
      <Button
        label="Create Post"
        type="submit"
        className="mt-2 w-fit self-end"
        ariaLabel="Create post button"
      />
    </form>
  );
};
