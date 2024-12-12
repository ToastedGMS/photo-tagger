import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Leaderboards from './Leaderboards.jsx';
import NotFound from './NotFound.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/leaderboards" element={<Leaderboards />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
