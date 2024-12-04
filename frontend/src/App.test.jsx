import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
	describe('Test Image', () => {
		test('renders an image in the document', () => {
			render(<App />);
			const imageElement = document.querySelector('img');
			expect(imageElement).toBeInTheDocument();
		});

		test('image is not empty', () => {
			render(<App />);
			const imageElementSrc = document.querySelector('img').getAttribute('src');
			expect(imageElementSrc).not.toBe('');
		});

		test('src attribute is correct', () => {
			render(<App />);
			const imageElementSrc = document.querySelector('img').getAttribute('src');
			expect(imageElementSrc).include('image1');
		});
	});
});
