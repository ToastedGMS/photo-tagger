import React from 'react';
import styles from './stylesheets/NotFound.module.css';

export default function NotFound() {
	return (
		<>
			<div className={styles.mainDiv}>
				<h1>PokeFinder</h1>
				<h2>Ooops, this page does not exist!</h2>
				<a href="/">Home</a>
			</div>
		</>
	);
}
