import React from 'react';
import style from './stylesheets/List.module.css';

export default function List({ open, charmander }) {
	if (open) {
		return null;
	}
	return (
		<>
			<div className={style.listDiv}>
				<ul>
					<div className={style.liDiv}>
						<input type="checkbox" checked={charmander} />
						<li>Find Charmander</li>
					</div>
				</ul>
			</div>
		</>
	);
}
