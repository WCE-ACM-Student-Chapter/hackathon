import React, { useEffect, useState } from 'react';
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
import NoviceThemes from './components/noviceThemes/NoviceThemes.jsx';
import ExpertPS from './components/expertPS/ExpertPS.jsx';
import Organizers from './components/organizers/Organizers.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import Loader from './components/loader/Loader.jsx';
import Contact from './components/contact/Contact.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		AOS.init();
		setIsLoading(false);
		toast.info('Expert Track results are out. Congratulations to the shortlisted teams! Novice Track results will be announced on 8th March, 2025. Stay Tuned!', {
			className: 'custom-toast', 
			position: 'top-center',
			autoClose: 10000,
		});
		// Swal.fire({
		// 	title: 'Round 1 Results Announced!',
		// 	html: 'Here are the list of shortlisted teams for Round 2. See you on 15th and 16th March 2025. Do checkout the website for further updates. All the best!',	
		// 	icon: 'info',
		// 	confirmButtonText: 'Download Results',
		// 	confirmButtonColor: 'rgb(113, 5, 255)',
		// 	cancelButtonText: 'Close',
		// 	showCancelButton: true,
		// 	allowOutsideClick: false,
		// }).then((result) => {
		// 	if (result.isConfirmed)
		// 		window.open('https://tinyurl.com/Hackathon24Round1Shortlisted', '_blank');
		// });
	}, []);

	return (
		<>
			<div className="gradient-container"></div>
			{isLoading ? <Loader /> : null}
			<ToastContainer />
			<Header />
			<Home />
			<About />
			<Timeline />
			<NoviceThemes />
			<ExpertPS />
			<Prizes />
			<Sponsors />
			<Gallery />
			<Organizers />
			<FAQ />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
