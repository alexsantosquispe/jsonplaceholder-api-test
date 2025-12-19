import { ThemeProvider } from '@aes/use-theme-hook';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './Navbar';

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

describe('Navbar', () => {
  it('should render the component correctly', () => {
    const component = render(
      <ThemeProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <Navbar />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(component).toMatchSnapshot();
  });

  it('should display the nav items', () => {
    render(
      <ThemeProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <Navbar />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('JSON')).toBeInTheDocument();
    expect(screen.getByText('Placeholder')).toBeInTheDocument();
    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('Todos')).toBeInTheDocument();
    // expect(screen.getByTestId('moon-icon')).toBeInTheDocument(); TODO: Fix this issue in the next PR
  });
});
