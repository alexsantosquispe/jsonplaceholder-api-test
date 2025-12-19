import { ThemeProvider } from '@aes/use-theme-hook';
import { Meta, StoryObj } from '@storybook/react';

import { ALERT_TYPES } from '../../../constants';
import { useAlert } from '../../../hooks/useAlert';
import { Wrapper } from '../../../utils/stories-utils';
import { AlertProviderWrapper } from '../../../utils/test-utils';
import { Button } from '../Button/Button';

const WrappedComponent = () => {
  const { addAlert } = useAlert();
  return (
    <Wrapper>
      <Button
        label="Success Alert"
        onClick={() =>
          addAlert({
            id: crypto.randomUUID(),
            title: 'Success',
            message: 'This is a success message.',
            type: ALERT_TYPES.SUCCESS
          })
        }
      />

      <Button
        label="Error Alert"
        onClick={() =>
          addAlert({
            id: crypto.randomUUID(),
            title: 'Error',
            message: 'This is an error message.',
            type: ALERT_TYPES.ERROR
          })
        }
      />

      <Button
        label="Info Alert"
        onClick={() =>
          addAlert({
            id: crypto.randomUUID(),
            title: 'Info',
            message: 'This is an info message.'
          })
        }
      />
    </Wrapper>
  );
};

const AlertStackStory = () => {
  return (
    <ThemeProvider>
      <AlertProviderWrapper>
        <WrappedComponent />
      </AlertProviderWrapper>
    </ThemeProvider>
  );
};

const meta = {
  title: 'Atoms/AlertStack',
  component: AlertStackStory,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof AlertStackStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
