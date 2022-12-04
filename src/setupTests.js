
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import TaskForm from './Table/TaskForm';
import TaskTable from './Table/TaskTable';

test('renders TaskForm', () => {
  render(<TaskForm />);
  const linkElement = screen.getByText(/Description/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders TaskTable and Get Item List from API', () => {
    render(<TaskTable />);
    const linkElement = screen.getByText(/S/i);
    expect(linkElement).toBeInTheDocument();
  });