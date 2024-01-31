import React from 'react';
import './prizes.css';

const Prizes = () => {
	const prizesData = [
		{ id: 1, icon: '🥇', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, hic facilis ut laboriosam nam explicabo omnis officia atque voluptates impedit.' },
		{ id: 2, icon: '🥈', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, hic facilis ut laboriosam nam explicabo omnis officia atque voluptates impedit.' },
		{ id: 3, icon: '🥉', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, hic facilis ut laboriosam nam explicabo omnis officia atque voluptates impedit.'},
	];

	return (
		<div className="prizes-container" id='prizes'>
			<header>Prizes</header>
			<div className="prizes-list">
				{prizesData.map((prize) => (
					<div key={prize.id} className='prize-card'>
						<div className="circle"></div>
						<span className='medal'>{prize.icon}</span>
						<span className='description'>{prize.description}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Prizes;
