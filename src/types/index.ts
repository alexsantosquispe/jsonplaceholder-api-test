import { Control, FieldValues } from 'react-hook-form';

export interface SvgIconProps {
  className?: string;
}

export interface InputProps {
  label: string;
  name: string;
  control: Control<FieldValues>;
  placeholder?: string;
  type?: string;
  errorMessage?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
}

export type TextAreaProps = Omit<InputProps, 'type'> & {
  rows?: number;
  cols?: number;
};

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
} as const;

export type MethodsTypes = (typeof METHODS)[keyof typeof METHODS];
