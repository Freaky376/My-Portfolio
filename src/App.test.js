import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-github-calendar', () => () => null);
jest.mock('react-pdf', () => ({ Document: () => null, Page: () => null, pdfjs: { GlobalWorkerOptions: {} } }));

test('renders name and experience on home', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /jhon christian bucio/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /sagelyn ai/i })).toBeInTheDocument();
});
