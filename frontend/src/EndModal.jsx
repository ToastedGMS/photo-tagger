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
	const [showLeaderboard, setShowLeaderboard] = useState(false);

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
				{showLeaderboard ? (
					<div className={style.leaderboard}>
						<h2>Leaderboard</h2>
						<table className={style.leaderboardTable}>
							<thead>
								<tr>
									<th>Rank</th>
									<th>Player</th>
									<th>Time</th>
								</tr>
							</thead>
							<tbody>
								{leaderboard.map((entry, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{entry.name}</td>
										<td>{`${Math.floor(entry.time / 60)}:${String(
											entry.time % 60
										).padStart(2, '0')}`}</td>
									</tr>
								))}
							</tbody>
						</table>
						<button
							className={style.modalButton}
							onClick={() => setShowLeaderboard(false)}
						>
							Back
						</button>
					</div>
				) : (
					<>
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
								onClick={() => setShowLeaderboard(true)}
							>
								View Leaderboards
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
}
