import { ThemeProvider } from '@alexsantosquispe/use-theme-hook';
import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './Navbar';

const meta = {
  title: 'Molecules/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = () => {
  return (
    <ThemeProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <div className="dark:bg-primary/90 flex w-full flex-col bg-white">
          <Navbar />
          <main className="dark:bg-primary/90 mt-14 flex w-full grow justify-center border-b border-gray-200 bg-gray-50 md:p-0">
            <div className="text-primary flex h-[30rem] items-center justify-center dark:text-white">
              Main content
            </div>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

Default.args = {};
