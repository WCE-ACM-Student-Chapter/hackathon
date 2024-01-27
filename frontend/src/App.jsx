import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/about.jsx';
import Footer from './components/Footer/footer.jsx';
import Timeline from './components/timeline/Timeline.jsx';

const App = () => {
	return (
		<>
			<Header />
			<Home />
			<About />
			<Timeline />
			<Footer />
		</>
	);
};

export default App;
