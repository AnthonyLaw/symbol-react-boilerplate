import App from './App';
import { render, screen } from '@testing-library/react';

test('renders learn symbol link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn symbol/i);
	expect(linkElement).toBeInTheDocument();
});
