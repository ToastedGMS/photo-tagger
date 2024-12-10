import React, { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import style from './stylesheets/Timer.module.css';

export default function Timer({ startModalOpen, endModalOpen, setTotalTime }) {
	const { seconds, minutes, hours, start, pause } = useStopwatch({
		autoStart: false,
	});

	useEffect(() => {
		if (!startModalOpen && !endModalOpen) {
			start();
		}
	}, [startModalOpen, start]);

	useEffect(() => {
		if (endModalOpen) {
			pause();
			setTotalTime({ hours, minutes, seconds });
		}
	}, [endModalOpen, pause]);

	return (
		<div className={style.timerDiv}>
			<div>
				<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
			</div>
		</div>
	);
}
