import './about.css';
import React, { useState, useRef, useEffect } from 'react';

const About = () => {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);

	useEffect(() => {
		const video = videoRef.current;

		if (isPlaying) {
			video.play();
		} else {
			video.pause();
		}
	}, [isPlaying]);

	const handleEnded = () => {
		const video = videoRef.current;
		video.currentTime = 0; // Reset video to start
		video.play();
	};

	return (
		<section id="about" data-aos="fade-up">
			<header>About Us</header>
			<video
				ref={videoRef}
				autoPlay
				controls
				loop
				onEnded={handleEnded}
			>
				<source src="https://res.cloudinary.com/dcevjlqv4/video/upload/v1706820965/hackathon/dkxpgbt8g4wt5ky6zxww.mp4" type="video/mp4" />
			</video>
			<p>WCE HACKATHON 24 will be conducted by WCE ACM Student Chapter. It is a developing venture in which participants are expected to complete the product development as per the selected problem statements.</p>

		</section>
	);
};

export default About;
