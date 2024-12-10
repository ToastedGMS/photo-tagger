import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	server: {
		host: '0.0.0.0', // Allow access from network devices
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/setupTests.js'],
	},
});
