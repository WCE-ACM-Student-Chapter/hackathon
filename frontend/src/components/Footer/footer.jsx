import React, { useEffect, useState } from "react";
import "./footer.css";

export default function Footer() {
	const [template, setTemplate] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);

		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);

	const listenScrollEvent = () => {
		setTemplate(window.scrollY > 2800);
	};

	const hideTemplate = () => {
		setTemplate(false);
	};

	return (
		<footer>
			<img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706693846/hackathon/a5vxbuguvzjrq0gnlr4x.png" alt="" />
			<div className="copyright_text">
				<span>Copyright ©2024. All rights reserved by</span>
				<span>WCE ACM Student Chapter</span>
			</div>
		</footer>
	);
}
