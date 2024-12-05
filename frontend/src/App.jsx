import React from 'react';
import image1 from './public/image1.jpeg';
import styles from './stylesheets/App.module.css';

function App() {
	return (
		<>
			<h1>Hello world</h1>
			<img src={image1} alt="Example Image" className={styles.image1} />
		</>
	);
}

export default App;
