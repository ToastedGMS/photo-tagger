import React from 'react';
import style from './stylesheets/StartModal.module.css';

export default function EndModal({ open }) {
	if (!open) {
		return null;
	}
	return (
		<>
			<div className={style.overlay} />
			<div className={style.modal}>
				<h2>You finished in x time!</h2>

				<div className={style.buttonDiv}>
					<button className={style.modalButton}>Play Again</button>
					<button className={style.modalButton}>View Leaderboards</button>
				</div>
			</div>
		</>
	);
}
