import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
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
import RegistrationForm from './components/contact/RegistrationForm.jsx';
import Countdown from './components/countdown/countdown.jsx';
import standeewhite from './assets/standee-white.png';

const App = () => {
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		AOS.init();
		setIsLoading(false);

		var dataText = ["Moments ticking, solutions clicking!", "Clock's ticking, ideas sticking!", "Countdown to innovation!", "Coding against the clock!", "Time slipping, but ideas gripping!"];
		function typeWriter(text, i, fnCallback) {
			if (i < (text.length)) {
				document.getElementById("info").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
				setTimeout(function () {
					typeWriter(text, i + 1, fnCallback)
				}, 50);
			} else if (typeof fnCallback == 'function') {
				setTimeout(fnCallback, 1000);
			}
		}

		function StartTextAnimation(i) {
			if (typeof dataText[i] == 'undefined') {
				StartTextAnimation(0);
			}
			if (i < dataText[i].length) {
				typeWriter(dataText[i], 0, function () {
					StartTextAnimation(i + 1);
				});
			}
		}

		StartTextAnimation(0);
	}, []);

	return (
		<>
			{isLoading ? <Loader /> : null}
			<div className="container-23">
				<img src={standeewhite} />
				<h3>IMPLEMENTATION ROUND</h3>
				<span id="info"></span>
				<Countdown />
			</div>
		</>
	);
};

export default App;
