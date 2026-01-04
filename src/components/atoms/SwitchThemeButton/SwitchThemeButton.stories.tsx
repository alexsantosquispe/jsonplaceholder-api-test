import { ThemeProvider } from '@alexsantosquispe/use-theme-hook';
import type { Meta, StoryObj } from '@storybook/react';

import { SwitchThemeButton } from './SwitchThemeButton';
import { EndpointTitle } from '../EndpointTitle/EndpointTitle';

const meta: Meta<typeof SwitchThemeButton> = {
  title: 'Atoms/SwitchThemeButton',
  component: SwitchThemeButton,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="dark:bg-primary flex h-[30rem] w-full items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <EndpointTitle label="Switch theme button" />
            <Story />
          </div>
        </div>
      </ThemeProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof SwitchThemeButton>;

export const Default: Story = {
  args: {
    classNameContainer: '',
    classNameIcon: ''
  }
};
