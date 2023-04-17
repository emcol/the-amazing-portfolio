import { render } from '@testing-library/react';
import App from '../_app';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
