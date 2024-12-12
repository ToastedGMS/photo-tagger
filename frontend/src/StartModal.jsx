import React from 'react';
import style from './stylesheets/StartModal.module.css';

export default function StartModal({ open, closeModal }) {
	if (!open) {
		return null;
	}
	return (
		<>
			<div className={style.overlay} />
			<div className={style.modal}>
				<h1>PokéFinder</h1>
				<p>Welcome to PokéFinder!</p>
				<p>
					Complete all the pokemon finding challenges! The clock is ticking!
				</p>
				<div className={style.buttonDiv}>
					<button
						className={style.modalButton}
						id="StartGame"
						onClick={closeModal}
					>
						Start
					</button>
				</div>
			</div>
		</>
	);
}
