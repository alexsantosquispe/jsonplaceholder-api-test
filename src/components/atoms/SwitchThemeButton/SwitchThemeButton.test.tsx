import { ThemeProvider } from '@aes/use-theme-hook';
import { fireEvent, render, screen } from '@testing-library/react';

import { SwitchThemeButton } from './SwitchThemeButton';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

// TODO: Fix this issue in the next PR
describe.skip('SwitchThemeButton', () => {
  it('should switch the theme between light and dark', () => {
    const component = render(
      <ThemeProvider>
        <SwitchThemeButton />
      </ThemeProvider>
    );

    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();

    expect(component).toMatchSnapshot();

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();

    expect(component).toMatchSnapshot();
  });
});
