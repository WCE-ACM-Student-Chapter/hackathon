import React from 'react';
import './prizes.css';

const Prizes = () => {
	const prizesData = [
		{ id: 1, icon: '🥇', description: 'TO BE REVEALED SOON! STAY TUNED!', money: '40000' },
		{ id: 2, icon: '🥈', description: 'TO BE REVEALED SOON! STAY TUNED!', money: '30000' },
		{ id: 3, icon: '🥉', description: 'TO BE REVEALED SOON! STAY TUNED!', money: '20000' },
	];

	return (
		<div className="prizes-container" id='prizes' data-aos="fade-up">
			<header>Prizes</header>
			<div className="prizes-list">
				{prizesData.map((prize) => (
					<div key={prize.id} className='prize-card' data-aos="flip-left">
						<div className="circle"></div>
						<span className='medal'>{prize.icon}</span>
						<div className="main_prize">
							<p>INR</p>
							<span className='money'>{prize.money}</span>
							<strong>WITH CERTIFICATE</strong>
						</div>
					</div>
				))}
				<span id='prize_info'>Certificates for all the participants. Exciting prizes for Novice track too and their mentors.</span>
			</div>
		</div>
	);
};

export default Prizes;
