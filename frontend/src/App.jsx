import React from 'react';
import image1 from './public/image1.jpeg';
import styles from './stylesheets/App.module.css';

function App() {
	return (
		<>
			<div className={styles.container}>
				<img src={image1} alt="Example Image" className={styles.image1} />
			</div>
		</>
	);
}

export default App;
