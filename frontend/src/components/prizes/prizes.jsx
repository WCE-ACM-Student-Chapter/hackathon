import React, { useState, useEffect } from 'react';
import './prizes.css';

const Prizes = () => {
	const [activeTrack, setActiveTrack] = useState('expert');
	const [data, setData] = useState([]);
	const expertPrizes = [
		{ id: 1, icon: '🥇', description: 'TO BE REVEALED SOON! STAY TUNED!', money: '35000' },
		{ id: 2, icon: '🥈', description: 'TO BE REVEALED SOON! STAY TUNED!', money: '25000' },
		{ id: 3, icon: '🥉', description: 'TO BE REVEALED SOON! STAY TUNED!', money: '15000' },
	];

	const novicePrizes = [
		{ id: 1, icon: '🥇', description: 'TO BE REVEALED SOON! STAY TUNED!', money: '12000' },
		{ id: 2, icon: '🥈', description: 'TO BE REVEALED SOON! STAY TUNED!', money: '8000' },
		{ id: 3, icon: '🥉', description: 'TO BE REVEALED SOON! STAY TUNED!', money: '5000' },
	];

	useEffect(() => {
		setData(activeTrack === 'novice' ? novicePrizes : expertPrizes);
	}, []);

	return (
		<div className="prizes-container" id='prizes' data-aos="fade-up">
			<header>Prizes</header>

			<div className="themes__tabs">
				<span className={activeTrack === 'expert' ? 'themes__tab active-tab' : 'themes__tab'} onClick={() => { setActiveTrack('expert'); setData(expertPrizes); }}>Expert</span>
				<div id='vertical__line'></div>
				<span className={activeTrack === 'novice' ? 'themes__tab active-tab' : 'themes__tab'} onClick={() => { setActiveTrack('novice'); setData(novicePrizes); }}>Novice</span>
			</div>

			<div className="prizes-list">
				{data.map((prize) => (
					<div key={prize.id} className={`${prize.id == 1 ? 'take-up' : ''} prize-card`} data-aos="flip-left">
						<div className="circle"></div>
						<span className='medal'>{prize.icon}</span>
						<div className="main_prize">
							<p>INR</p>
							<span className='money'>{prize.money}</span>
							<strong>WITH CERTIFICATE</strong>
						</div>
					</div>
				))}
			</div>
			<span id='prize_info'>Participation certificates for all the participants.</span>
		</div>
	);
};

export default Prizes;
