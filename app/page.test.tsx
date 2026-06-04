import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';

describe('Home page', () => {
  // Mounting the whole page tree is the cheapest way to surface runtime errors:
  // anything that throws on render trips the uncaught-error guard in setup.
  it('renders every section without runtime errors', () => {
    render(<Home />);

    expect(screen.getByText('EMANUELE')).toBeInTheDocument();
    expect(screen.getByText('COLABELLO')).toBeInTheDocument();
  });
});
