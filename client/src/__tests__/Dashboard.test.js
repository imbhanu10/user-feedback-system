import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';
import axios from 'axios';

jest.mock('axios');

test('renders dashboard list', async () => {
  axios.get.mockResolvedValueOnce({ data: [{ userName:'A', feedback:'x', category:'Bug' }] });
  render(<Dashboard />);
  expect(await screen.findByText(/A/)).toBeInTheDocument();
});
