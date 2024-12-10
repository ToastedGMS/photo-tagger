import React from 'react';
import style from './stylesheets/StartModal.module.css';

export default function EndModal({ open, totalTime }) {
	if (!open) {
		return null;
	}

	const { seconds, minutes } = totalTime || { seconds: 0, minutes: 0 };

	return (
		<>
			<div className={style.overlay} />
			<div className={style.modal}>
				<h2>
					You finished in {minutes}:{seconds}!
				</h2>

				<div className={style.buttonDiv}>
					<button className={style.modalButton}>Play Again</button>
					<button className={style.modalButton}>View Leaderboards</button>
				</div>
			</div>
		</>
	);
}
