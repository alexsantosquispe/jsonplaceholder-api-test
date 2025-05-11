export const NEW_POST_FORM_NAMES = {
  TITLE: 'title',
  DESCRIPTION: 'description',
  USER_ID: 'userId'
} as const;

export type NewPostFormValues = {
  [NEW_POST_FORM_NAMES.TITLE]: string;
  [NEW_POST_FORM_NAMES.DESCRIPTION]: string;
  [NEW_POST_FORM_NAMES.USER_ID]: string;
};
