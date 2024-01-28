import React from 'react';
import './prizes.css';

const Prizes = () => {
	const prizesData = [
		{ id: 1, icon: '🥈', name: 'First Prize', description: 'Lorem ipsum dolor sit amet.' },
		{ id: 2, icon: '🥇', name: 'Second Prize', description: 'Consectetur adipiscing elit.' },
		{ id: 3, icon: '🥉', name: 'Third Prize', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
	];

	return (
		<div className="prizes-container">
			<header>Prizes</header>
			<div className="prizes-list">
				{prizesData.map((prize) => (
					<div key={prize.id} className='prize-card'>
						<div className="circle"></div>
						<span>{prize.icon}</span>
						<span>{prize.name}</span>
						<span>{prize.description}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Prizes;
