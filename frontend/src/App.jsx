
import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Countdown from './components/countdown/countdown.jsx';
import About from './components/about/about.jsx'; // Import the About component

const App = () => {
  return (
    <>
      <Header />
      <About /> {/* Render the About component with the ID */}
      <Countdown />
      {/* Other components or sections */}
    </>
  );
};

export default App;
