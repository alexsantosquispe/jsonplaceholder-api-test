import { Meta } from '@storybook/react';
import { useState } from 'react';

import * as Icons from './index';
import { INPUT_FIELD_STYLES } from '../constants/styles';

export default {
  title: 'Icons'
} as Meta;

export const IconGallery = () => {
  const [filter, setFilter] = useState('');

  const filteredIcons = Object.entries(Icons).filter(([name]) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6 p-4">
      <div className="flex w-1/2 flex-col gap-y-1">
        <label>Icons Gallery</label>
        <input
          placeholder="Search icons..."
          className={INPUT_FIELD_STYLES}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-4">
        {filteredIcons.map(([name, IconComponent]) => (
          <div
            key={name}
            className="flex h-[10rem] w-[10rem] flex-col items-center justify-center gap-4 rounded-lg border border-gray-200"
          >
            <IconComponent className="size-6" />
            <span className="text-xs font-medium text-gray-600">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
