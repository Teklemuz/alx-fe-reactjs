import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App'; // Import the App component

describe('App Component', () => {
  test('renders the TodoList component', () => {
    render(<App />);
    expect(screen.getByText('Add a new todo')).toBeInTheDocument();
  });
});
