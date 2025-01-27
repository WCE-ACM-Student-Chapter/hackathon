
import React from 'react';
import './sponsors.css';

const Sponsors = () => {
	const sponsorCount = 2;
	const sponsorUrls = ['https://res.cloudinary.com/dcevjlqv4/image/upload/v1737933452/hackathon/Sponsors/11.png', 'https://res.cloudinary.com/dcevjlqv4/image/upload/v1737933452/hackathon/Sponsors/22.png'];


	return (
		<div className="sponsors-container" id='sponsors' data-aos="fade-up">
			<header>Our Sponsors</header>
			<div className="sponsors-list">
				{Array.from({ length: sponsorCount }, (_, index) => (
					<div key={index} className="sponsor-card" data-aos="zoom-in">
						<img src={sponsorUrls[index]} alt={`Sponsor ${index + 1}`} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Sponsors;
