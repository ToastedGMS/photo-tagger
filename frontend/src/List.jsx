import React from 'react';
import style from './stylesheets/List.module.css';

export default function List({ open, checks }) {
	const {
		charmanderCheck,
		spearowCheck,
		teddiursaCheck,
		qwilfishCheck,
		caterpieCheck,
	} = checks;

	if (open) {
		return null;
	}
	return (
		<>
			<div className={style.listDiv}>
				<ul>
					<div className={style.liDiv}>
						<input type="checkbox" checked={charmanderCheck} readOnly />
						<li>Find Charmander</li>
					</div>
				</ul>
				<ul>
					<div className={style.liDiv}>
						<input type="checkbox" checked={spearowCheck} readOnly />
						<li>Find Spearow</li>
					</div>
				</ul>
				<ul>
					<div className={style.liDiv}>
						<input type="checkbox" checked={teddiursaCheck} readOnly />
						<li>Find Teddiursa</li>
					</div>
				</ul>
				<ul>
					<div className={style.liDiv}>
						<input type="checkbox" checked={qwilfishCheck === 6} readOnly />
						<li>Find all the Qwilfish ({qwilfishCheck} / 6)</li>
					</div>
				</ul>
				<ul>
					<div className={style.liDiv}>
						<input type="checkbox" checked={caterpieCheck === 3} readOnly />
						<li>Find Caterpie and all it's evolutions ({caterpieCheck} / 3)</li>
					</div>
				</ul>
			</div>
		</>
	);
}
