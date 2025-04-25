import { render, screen, fireEvent } from '@testing-library/react';
import FeedbackForm from '../components/FeedbackForm';
import axios from 'axios';

jest.mock('axios');

test('renders form and handles submission', async () => {
  axios.post.mockResolvedValueOnce({});
  render(<FeedbackForm />);
  fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'User' } });
  fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'user@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/Feedback/i), { target: { value: 'Hello' } });
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Bug' } });
  fireEvent.click(screen.getByText(/Submit/i));
  expect(axios.post).toHaveBeenCalled();
});
