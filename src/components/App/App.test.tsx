import { render, screen } from '@testing-library/react';

import App from './App';

it('should renders title', () => {
  render(<App />);
  const title = screen.getByText(/Chuck Chuck/i);
  expect(title).toBeInTheDocument();
});
