import React, { useEffect, useState } from 'react';
import style from './stylesheets/StartModal.module.css';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function EndModal({ open, totalTime, onReset }) {
	const [isHighScore, setIsHighScore] = useState(false);
	const [playerName, setPlayerName] = useState('');
	const [leaderboard, setLeaderboard] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const { seconds, minutes } = totalTime || { seconds: 0, minutes: 0 };
	const timeInSeconds = minutes * 60 + seconds;

	const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
		seconds
	).padStart(2, '0')}`;

	async function fetchLeaderboard() {
		try {
			const { data, error } = await supabase
				.from('leaderboard')
				.select('*')
				.order('time', { ascending: true });
			if (error) throw error;
			setLeaderboard(data);
		} catch (error) {
			console.error('Error fetching leaderboard:', error);
			setErrorMessage('Failed to fetch leaderboard. Please try again later.');
		}
	}

	async function checkHighScore() {
		try {
			const { data: previousHighScore, error } = await supabase
				.from('leaderboard')
				.select('*')
				.lt('time', timeInSeconds)
				.order('time', { ascending: true })
				.limit(1);
			if (error) throw error;
			setIsHighScore(previousHighScore.length === 0);
		} catch (error) {
			console.error('Error checking high score:', error);
		}
	}

	async function saveHighScore() {
		if (!playerName.trim()) {
			setErrorMessage('Please enter your name before saving.');
			return;
		}

		try {
			const { error } = await supabase
				.from('leaderboard')
				.insert([{ name: playerName, time: timeInSeconds }]);
			if (error) throw error;
			setIsHighScore(false);
			fetchLeaderboard();
		} catch (error) {
			console.error('Error saving high score:', error);
			setErrorMessage('Failed to save your score. Please try again.');
		}
	}

	useEffect(() => {
		if (open) {
			fetchLeaderboard();
			checkHighScore();
		}
	}, [open, timeInSeconds]);

	if (!open) {
		return null;
	}

	return (
		<>
			<div className={style.overlay} />
			<div className={style.modal} role="dialog" aria-modal="true">
				<h2>
					{isHighScore
						? `New High Score! You finished in ${formattedTime}!`
						: `You finished in ${formattedTime}!`}
				</h2>

				{isHighScore && (
					<div>
						<input
							type="text"
							placeholder="Enter your name"
							value={playerName}
							onChange={(e) => setPlayerName(e.target.value)}
							className={style.nameInput}
						/>
						<button onClick={saveHighScore} className={style.modalButton}>
							Save High Score
						</button>
					</div>
				)}

				{errorMessage && <p className={style.error}>{errorMessage}</p>}

				<div className={style.buttonDiv}>
					<button
						className={style.modalButton}
						onClick={() => location.reload()}
					>
						Play Again
					</button>
					<button
						className={style.modalButton}
						onClick={() => console.log(leaderboard)}
					>
						View Leaderboards
					</button>
				</div>
			</div>
		</>
	);
}
