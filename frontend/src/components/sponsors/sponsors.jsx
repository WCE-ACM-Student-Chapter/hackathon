
import React from 'react';
import './sponsors.css';

const SponsorCard = ({ name, description, logoSrc }) => (
	<div className="sponsor-card">
		<img src={logoSrc} alt={name} />
		<h3>{name}</h3>
		<p>{description}</p>
	</div>
);

const Sponsors = () => {
	const sponsorsData = [
		{ logoSrc: 'https://res.cloudinary.com/dcevjlqv4/image/upload/v1706436395/hackathon/bbweainbgay4dqtlmeyy.png' },
		{ logoSrc: 'https://res.cloudinary.com/dcevjlqv4/image/upload/v1706436395/hackathon/bbweainbgay4dqtlmeyy.png' },
		{ logoSrc: 'https://res.cloudinary.com/dcevjlqv4/image/upload/v1706436395/hackathon/bbweainbgay4dqtlmeyy.png' },
	];

	return (
		<div className="sponsors-container" id='sponsors'>
			<header>Sponsors</header>
			<div className="sponsors-list">
				{sponsorsData.map((sponsor) => (
					<SponsorCard key={sponsor.logoSrc} {...sponsor} />
				))}
			</div>
		</div>
	);
};

export default Sponsors;
