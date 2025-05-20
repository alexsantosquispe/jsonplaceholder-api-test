import cn from 'clsx';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import {
  INPUT_FIELD_ERROR,
  INPUT_FIELD_STYLES
} from '../../../constants/styles';
import { ChevronUpDownIcon } from '../../../icons';
import { Option } from '../../../services/api.types';
import { InputProps } from '../../../types';

type SelectFieldProps = Omit<InputProps, 'type'> & {
  options: Option[];
};

export const SelectField = ({
  label,
  name,
  options,
  control,
  placeholder = 'Select an option',
  errorMessage,
  isDisabled,
  isRequired
}: SelectFieldProps) => {
  const defaultValueOption = {
    value: '',
    label: placeholder
  } satisfies Option;
  const optionsWithPlaceholder = [defaultValueOption, ...options];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <div className="flex flex-col">
            <label htmlFor={name} className="mb-0.5 text-sm">
              {label}
              {isRequired && (
                <span className="text-rose-600 dark:text-rose-400">
                  &nbsp;*
                </span>
              )}
            </label>
            <div className="relative">
              <select
                id={name}
                name={name}
                onChange={onChange}
                value={value}
                disabled={isDisabled}
                className={twMerge(
                  INPUT_FIELD_STYLES,
                  'appearance-none hover:cursor-pointer',
                  cn({
                    'border-rose-600 dark:border-rose-400': !!errorMessage
                  })
                )}
              >
                {optionsWithPlaceholder.map((option: Option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="text-red-300"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronUpDownIcon
                className="text-primary/80 pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 dark:text-white/80"
                aria-hidden="true"
              />
            </div>
            {errorMessage && (
              <span className={INPUT_FIELD_ERROR}>{errorMessage}</span>
            )}
          </div>
        );
      }}
    />
  );
};
