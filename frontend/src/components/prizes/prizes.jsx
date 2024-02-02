import React from 'react';
import './prizes.css';

const Prizes = () => {
	const prizesData = [
		{ id: 1, icon: '🥇', description: 'TO BE REVEALED SOON! STAY TUNED!' },
		{ id: 2, icon: '🥈', description: 'TO BE REVEALED SOON! STAY TUNED!' },
		{ id: 3, icon: '🥉', description: 'TO BE REVEALED SOON! STAY TUNED!' },
	];

	return (
		<div className="prizes-container" id='prizes' data-aos="fade-up">
			<header>Prizes</header>
			<div className="prizes-list">
				{prizesData.map((prize) => (
					<div key={prize.id} className='prize-card' data-aos="flip-left">
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
