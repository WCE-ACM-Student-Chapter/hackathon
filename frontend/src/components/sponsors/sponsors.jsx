// sponsors.jsx
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
    { id: 1, name: 'Sponsor 1', description: 'Description for Sponsor 1', logoSrc: 'sponsor1.jpg' },
    { id: 2, name: 'Sponsor 2', description: 'Description for Sponsor 2', logoSrc: 'sponsor2.jpg' },
    { id: 3, name: 'Sponsor 3', description: 'Description for Sponsor 3', logoSrc: 'sponsor3.jpg' },
    // Add more sponsors as needed
  ];

  return (
    <div className="sponsors-container">
      <h2>Sponsors</h2>
      <div className="sponsors-list">
        {sponsorsData.map((sponsor) => (
          <SponsorCard key={sponsor.id} {...sponsor} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
