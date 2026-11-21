import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./Student_Information/Student_Review', () => ({
  __esModule: true,
  default: () => null
}));

jest.mock('./Trainer/trainer', () => ({
  __esModule: true,
  default: () => null
}));

jest.mock('./Student_Information/Placed_Student', () => ({
  __esModule: true,
  default: () => null
}));

test('renders the training institute landing page', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /build the skills to move your career forward/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /explore courses/i })).toHaveAttribute('href', '#courses');
});
