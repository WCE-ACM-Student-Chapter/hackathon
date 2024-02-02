
import React from 'react';
import './sponsors.css';

const Sponsors = () => {
	const sponsorCount = 4;
	const sponsorBaseUrl = 'https://res.cloudinary.com/dcevjlqv4/image/upload/v1706865741/hackathon/Sponsors/';


	return (
		<div className="sponsors-container" id='sponsors' data-aos="fade-up">
			<header>Previous Sponsors</header>
			<div className="sponsors-list">
				{Array.from({ length: sponsorCount }, (_, index) => (
					<div key={index} className="sponsor-card" data-aos="zoom-in">
						<img src={`${sponsorBaseUrl}${index + 1}${index + 1}.png`} alt={`Sponsor ${index + 1}`} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Sponsors;
