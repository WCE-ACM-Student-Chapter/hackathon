import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';
import './about.css';

const About = () => {
	return (
		<div id="about" data-aos="fade-up">
			<header>About Us</header>
			<YoutubeEmbed />
			<div className="about_container">
				<div data-aos="fade-up">
					<p><b>Walchand College of Engineering Sangli (WCE)</b>, established in 1947 and aided by the Government of Maharashtra, is one of the <b>oldest</b> and <b>premier</b> engineering institutions in India. With a rich history of over 70 years and a beautiful campus of over 90-acres, WCE Sangli is providing transformational learning experiences in various disciplines of engineering.</p>
				</div>
				<div data-aos="fade-up">
					<p><b>WCE ACM Student Chapter</b>, authorized by ACM INDIA COUNCIL on March 18, 2016, aims to impart knowledge and promote innovation in the field of computer science. Deriving inspiration from the parent organization ACM, we thrive to achieve the aim by conducting various technical & non-technical activities.</p>
				</div>
				<div data-aos="fade-up">
					<p>The highlight of the VISION event at WCE, Sangli is the <b>WCE Hackathon</b>, organized by WCE ACM Student Chapter. As we are celebrating 9 years of WCE ACM, the <b>WCE Hackathon 2025</b> is more than just a coding competition; it's a celebration of innovation, creativity, and collaboration. Our mission is to bring together passionate individuals from diverse backgrounds and skill sets, providing a platform for them to turn their ideas into reality.</p>
				</div>
			</div>
		</div>
	);
};

export default About;
