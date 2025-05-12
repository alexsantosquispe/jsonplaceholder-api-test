import cn from 'clsx';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import {
  INPUT_FIELD_ERROR,
  INPUT_FIELD_STYLES
} from '../../../constants/styles';
import { TextAreaProps } from '../../../types';

export const TextAreaField = ({
  label,
  name,
  control,
  placeholder,
  rows = 6,
  cols = 50,
  isDisabled,
  errorMessage = '',
  isRequired = false
}: TextAreaProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <div className="flex flex-col gap-y-0.5">
            <label htmlFor={name} className="mb-0.5 text-sm">
              {label}
              {isRequired && <span className="text-rose-600">&nbsp;*</span>}
            </label>
            <textarea
              id={name}
              name={name}
              placeholder={placeholder}
              disabled={isDisabled}
              onChange={onChange}
              value={value}
              rows={rows}
              cols={cols}
              className={twMerge(
                INPUT_FIELD_STYLES,
                'resize-none',
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
