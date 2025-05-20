import clsx from 'clsx';
import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { useClickOutside } from '../../../hooks/useClickOutside';
import { ChevronDownIcon } from '../../../icons';
import { Option } from '../../../services/api.types';
import { Button } from '../../atoms/Button/Button';

interface DropdownProps {
  optionSelected: Option;
  options: Option[];
  onSelect: (option: Option) => void;
}

export const Dropdown = ({
  optionSelected,
  options,
  onSelect
}: DropdownProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsMenuOpen(false));

  const handleOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const onSelectOption = (option: Option) => {
    onSelect(option);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex flex-col justify-end gap-y-1">
        <Button
          label={optionSelected.label}
          onClick={handleOpenMenu}
          icon={<ChevronDownIcon className="size-4" />}
          className="w-fit flex-row-reverse items-center gap-x-4 self-end py-[0.375rem]"
          isSecondary
        />
        {isMenuOpen && (
          <div className="absolute top-full right-0 z-10 mt-1 flex flex-col gap-1 rounded-lg border border-gray-200 bg-white p-1 shadow-md dark:border-white/15 dark:bg-neutral-950">
            {options.map((item) => {
              const isSelected = item.value === optionSelected.value;
              return (
                <span
                  key={item.value}
                  onClick={() => onSelectOption(item)}
                  className={twMerge(
                    'flex min-w-28 items-center justify-between rounded-md px-3 py-2 hover:cursor-pointer hover:bg-gray-100 dark:text-white dark:hover:bg-white/15',
                    clsx({
                      'bg-gray-100 dark:bg-white/15': isSelected
                    })
                  )}
                >
                  {item.label}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
