// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RequirementsTxt title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RequirementsTxt/i);
    expect(titleElement).toBeInTheDocument();
});
