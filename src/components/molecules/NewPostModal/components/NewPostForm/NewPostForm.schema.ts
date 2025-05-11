import { z, ZodType } from 'zod';

import { NEW_POST_FORM_NAMES, NewPostFormValues } from './NewPostForm.types';

export const NewPostFormSchema: ZodType<NewPostFormValues> = z.object({
  [NEW_POST_FORM_NAMES.USER_ID]: z
    .string()
    .min(1, { message: 'User is required' }),
  [NEW_POST_FORM_NAMES.TITLE]: z
    .string()
    .min(1, { message: 'Title is required' }),
  [NEW_POST_FORM_NAMES.DESCRIPTION]: z
    .string()
    .min(1, { message: 'Description is required' })
});

export const NewPostFormDefaultValues: NewPostFormValues = {
  [NEW_POST_FORM_NAMES.USER_ID]: '',
  [NEW_POST_FORM_NAMES.TITLE]: '',
  [NEW_POST_FORM_NAMES.DESCRIPTION]: ''
};
