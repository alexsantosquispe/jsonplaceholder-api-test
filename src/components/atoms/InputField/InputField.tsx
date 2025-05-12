import cn from 'clsx';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import {
  INPUT_FIELD_ERROR,
  INPUT_FIELD_STYLES
} from '../../../constants/styles';
import { InputProps } from '../../../types';

export const InputField = ({
  label,
  name,
  control,
  placeholder,
  type = 'text',
  isDisabled,
  errorMessage = '',
  isRequired = false
}: InputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <div className="flex flex-col">
            <label htmlFor={name} className="mb-0.5 text-sm">
              {label}
              {isRequired && <span className="text-rose-600">&nbsp;*</span>}
            </label>
            <input
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              placeholder={placeholder}
              type={type}
              disabled={isDisabled}
              className={twMerge(
                INPUT_FIELD_STYLES,
                cn({
                  'border-rose-600 dark:border-rose-400': !!errorMessage
                })
              )}
            />
            {errorMessage && (
              <span className={INPUT_FIELD_ERROR}>{errorMessage}</span>
            )}
          </div>
        );
      }}
    />
  );
};
