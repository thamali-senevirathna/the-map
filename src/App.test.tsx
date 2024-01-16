import React from 'react';
import { render, screen } from '@testing-library/react';
import World from './Compenets/World';


test('renders learn react link', () => {
  render(<World />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
