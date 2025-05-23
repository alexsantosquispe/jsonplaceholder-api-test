import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Footer } from './Footer';

describe('Footer', () => {
  it('should render the component correctly', () => {
    const component = render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <Footer />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });

  it('should display the content', () => {
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText(/Built by/i)).toBeInTheDocument();

    expect(screen.getByText('Alex Santos.')).toBeInTheDocument();

    expect(screen.getByText(/Source code available on/i)).toBeInTheDocument();

    expect(screen.getByText('Github')).toBeInTheDocument();
  });

  it('should have the correct GitHub link with target and rel attributes', () => {
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <Footer />
      </BrowserRouter>
    );

    const githubLink = screen.getByText('Github');

    expect(githubLink).toBeInTheDocument();

    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/alexsantosquispe/jsonplaceholder-api-test'
    );

    expect(githubLink).toHaveAttribute('target', '_blank');

    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
