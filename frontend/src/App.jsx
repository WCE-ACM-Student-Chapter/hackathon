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
import Organizers from './components/organizers/Organizers.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import Loader from './components/loader/Loader.jsx';

const App = () => {
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		AOS.init();

		window.onload = () => {
			setIsLoading(false);
		};

		return () => window.onload = null;
	}, []);

	return (
		<>
			{isLoading ? <Loader /> : null}
			<Header />
			<Home />
			<About />
			<Timeline />
			<Themes />
			<Prizes />
			<Sponsors />
			<Gallery />
			<Organizers />
			<FAQ />
			<Footer />
		</>
	);
};

export default App;
