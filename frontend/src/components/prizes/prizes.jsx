// prizes.jsx

import React from 'react';
import './prizes.css';

const Prizes = () => {
  const prizesData = [
    { id: 1, position: '1st', name: 'First Prize', description: 'Lorem ipsum dolor sit amet.' },
    { id: 2, position: '2nd', name: 'Second Prize', description: 'Consectetur adipiscing elit.' },
    { id: 3, position: '3rd', name: 'Third Prize', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // You can add more prizes or customize as needed
  ];

  return (
    <div className="prizes-container">
      <h2>Prizes</h2>
      <div className="prizes-list">
        {prizesData.map((prize) => (
          <div key={prize.id} className={`prize-card ${prize.position.toLowerCase()}`}>
            <h3>{prize.position}</h3>
            <h4>{prize.name}</h4>
            <p>{prize.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prizes;
