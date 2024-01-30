import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Prizes from './components/prizes/prizes.jsx';
import About from './components/about/about.jsx';
import Footer from './components/Footer/footer.jsx';
import Sponsors from './components/sponsors/sponsors.jsx';
import Timeline from './components/timeline/Timeline.jsx';
import FAQ from './components/faq/FAQ.jsx';
import Themes from './components/themes/Themes.jsx';
import Contact from './components/contact/Contact.jsx';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

const App = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Header />
			<Home />
			<About />
			<Timeline />
			<Themes />
			<Prizes />
			<Sponsors />
			<FAQ />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
