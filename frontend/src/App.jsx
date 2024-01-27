import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Countdown from './components/countdown/countdown.jsx';
import About from './components/about/about.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About /> {/* Render the About component with the ID */}
      <Countdown />
    </>
  );
};

export default App;
