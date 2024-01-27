import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Countdown from './components/countdown/countdown.jsx';
import Prizes from './components/prizes/prizes.jsx';
import About from './components/about/about.jsx';
import Footer from './components/Footer/footer.jsx';
import Sponsors from './components/sponsors/sponsors.jsx';
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Prizes />
      <Sponsors />
      <Footer />
    </>
  );
};

export default App;
