import React, { useEffect, useState } from 'react';
import image1 from './public/image1.jpeg';
import styles from './stylesheets/App.module.css';
import imageMapResize from 'image-map-resizer';
import StartModal from './StartModal';
import List from './List';
import EndModal from './EndModal';
import Timer from './Timer';

function App() {
	useEffect(() => {
		imageMapResize();
	}, []);

	const [isModalOpen, setIsModalOpen] = useState(true);
	const [charmanderCheck, setCharmanderCheck] = useState(false);
	const [spearowCheck, setSpearowCheck] = useState(false);
	const [teddiursaCheck, setTeddiursaCheck] = useState(false);
	const [qwilfishCheck, setqwilfishCheck] = useState(0);
	const [caterpieCheck, setCaterpieCheck] = useState(0);
	const [endModalOpen, setEndModalOpen] = useState(false);
	const [checked, setChecked] = useState([]);
	const [totalTime, setTotalTime] = useState(null);

	useEffect(() => {
		if (
			charmanderCheck &&
			spearowCheck &&
			teddiursaCheck &&
			qwilfishCheck === 6 &&
			caterpieCheck === 3
		) {
			setEndModalOpen(true);
		}
	}, [
		charmanderCheck,
		spearowCheck,
		teddiursaCheck,
		qwilfishCheck,
		caterpieCheck,
	]);

	useEffect(() => {
		console.log('totalTime:', totalTime);
	}, [totalTime]);

	return (
		<>
			<Timer
				startModalOpen={isModalOpen}
				endModalOpen={endModalOpen}
				setTotalTime={setTotalTime}
			/>
			<StartModal
				open={isModalOpen}
				closeModal={() => {
					setIsModalOpen(false);
				}}
			/>

			<List
				open={isModalOpen}
				checks={{
					charmanderCheck,
					spearowCheck,
					teddiursaCheck,
					qwilfishCheck,
					caterpieCheck,
				}}
			/>

			<EndModal open={endModalOpen} totalTime={totalTime} />
			<div className={styles.container}>
				<img
					src={image1}
					alt="Example Image"
					className={styles.image1}
					useMap="#pokemon"
				/>
				<map name="pokemon">
					<area
						target=""
						alt="Charmander"
						title="Charmander"
						href=""
						coords="490,633,498,653,502,671,519,677,534,669,540,655,551,607,529,622,497,616"
						shape="poly"
						onClick={(e) => {
							e.preventDefault();
							setCharmanderCheck(true);
						}}
					/>
					<area
						target=""
						alt="Spearow"
						title="Spearow"
						href=""
						coords="167,853,183,841,184,815,175,810,153,817,151,834"
						shape="poly"
						onClick={(e) => {
							e.preventDefault();
							setSpearowCheck(true);
						}}
					/>
					<area
						target=""
						alt="Teddiursa"
						title="Teddiursa"
						href=""
						coords="653,578,663,594,660,612,685,615,688,588,685,571"
						shape="poly"
						onClick={(e) => {
							e.preventDefault();
							setTeddiursaCheck(true);
						}}
					/>
					<area
						target=""
						alt="Qwilfish"
						title="Qwilfish"
						href=""
						coords="208,76,28"
						shape="circle"
						onClick={(e) => {
							e.preventDefault();
							const id = 'Qwilfish1';

							if (!checked.includes(id)) {
								setqwilfishCheck((prevstate) => prevstate + 1);
								setChecked((prevstate) => [...prevstate, id]);
							}
						}}
					/>
					<area
						target=""
						alt="Qwilfish"
						title="Qwilfish"
						href=""
						coords="571,151,27"
						shape="circle"
						onClick={(e) => {
							e.preventDefault();
							const id = 'Qwilfish2';

							if (!checked.includes(id)) {
								setqwilfishCheck((prevstate) => prevstate + 1);
								setChecked((prevstate) => [...prevstate, id]);
							}
						}}
					/>
					<area
						target=""
						alt="Qwilfish"
						title="Qwilfish"
						href=""
						coords="453,262,29"
						shape="circle"
						onClick={(e) => {
							e.preventDefault();
							const id = 'Qwilfish3';

							if (!checked.includes(id)) {
								setqwilfishCheck((prevstate) => prevstate + 1);
								setChecked((prevstate) => [...prevstate, id]);
							}
						}}
					/>
					<area
						target=""
						alt="Qwilfish"
						title="Qwilfish"
						href=""
						coords="470,314,29"
						shape="circle"
						onClick={(e) => {
							e.preventDefault();
							const id = 'Qwilfish4';

							if (!checked.includes(id)) {
								setqwilfishCheck((prevstate) => prevstate + 1);
								setChecked((prevstate) => [...prevstate, id]);
							}
						}}
					/>
					<area
						target=""
						alt="Qwilfish"
						title="Qwilfish"
						href=""
						coords="358,301,29"
						shape="circle"
						onClick={(e) => {
							e.preventDefault();
							const id = 'Qwilfish5';

							if (!checked.includes(id)) {
								setqwilfishCheck((prevstate) => prevstate + 1);
								setChecked((prevstate) => [...prevstate, id]);
							}
						}}
					/>
					<area
						target=""
						alt="Qwilfish"
						title="Qwilfish"
						href=""
						coords="262,745,26"
						shape="circle"
						onClick={(e) => {
							e.preventDefault();
							const id = 'Qwilfish6';

							if (!checked.includes(id)) {
								setqwilfishCheck((prevstate) => prevstate + 1);
								setChecked((prevstate) => [...prevstate, id]);
							}
						}}
					/>
					<area
						target=""
						alt="Caterpie"
						title="Caterpie"
						href=""
						coords="17,45,7,79,32,95,61,80,56,43"
						shape="poly"
						onClick={(e) => {
							e.preventDefault();
							const id = 'Caterpie1';

							if (!checked.includes(id)) {
								setCaterpieCheck((prevstate) => prevstate + 1);
								setChecked((prevstate) => [...prevstate, id]);
							}
						}}
					/>
					<area
						target=""
						alt="Metapod"
						title="Metapod"
						href=""
						coords="152,508,150,546,174,556,207,553,227,526,192,538,198,519,173,522"
						shape="poly"
						onClick={(e) => {
							e.preventDefault();
							const id = 'Caterpie2';

							if (!checked.includes(id)) {
								setCaterpieCheck((prevstate) => prevstate + 1);
								setChecked((prevstate) => [...prevstate, id]);
							}
						}}
					/>
					<area
						target=""
						alt="Butterfree"
						title="Butterfree"
						href=""
						coords="173,412,169,462,160,482,134,489,121,494,90,471,91,427,116,447,143,420"
						shape="poly"
						onClick={(e) => {
							e.preventDefault();
							const id = 'Caterpie3';

							if (!checked.includes(id)) {
								setCaterpieCheck((prevstate) => prevstate + 1);
								setChecked((prevstate) => [...prevstate, id]);
							}
						}}
					/>
				</map>
			</div>
		</>
	);
}

export default App;
