import React, { useEffect, useState } from 'react';
import image1 from './public/image1.jpeg';
import styles from './stylesheets/App.module.css';
import imageMapResize from 'image-map-resizer';
import StartModal from './StartModal';

function App() {
	useEffect(() => {
		imageMapResize();
	}, []);

	const [isModalOpen, setIsModalOpen] = useState(true);

	return (
		<>
			<StartModal
				open={isModalOpen}
				closeModal={() => {
					setIsModalOpen(false);
				}}
			/>
			<div className={styles.container}>
				<img
					src={image1}
					alt="Example Image"
					className={styles.image1}
					useMap="#charmander"
				/>
				<map name="charmander">
					<area
						shape="rect"
						coords="481,615,545,680"
						title="Charmander"
						className={styles.pokemon}
						onClick={() => {
							console.log('Charmander');
						}}
					/>
				</map>
			</div>
		</>
	);
}

export default App;
