import { useState, useEffect } from 'react';
import './countdown.css';

const Countdown = () => {
	const [days, setDays] = useState('00');
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');
	const [seconds, setSeconds] = useState('00');

	useEffect(() => {
		const targetDate = new Date(2024, 2, 16, 0, 0, 0, 0).getTime();
		const pad = (n) => (n < 10 ? '0' : '') + n;

		const interval = setInterval(() => {
			const currentDate = new Date().getTime();
			const secondsLeft = Math.max(0, (targetDate - currentDate) / 1000);

			setDays(pad(parseInt(secondsLeft / 86400)));
			setHours(pad(parseInt((secondsLeft % 86400) / 3600)));
			setMinutes(pad(parseInt((secondsLeft % 3600) / 60)));
			setSeconds(pad(parseInt(secondsLeft % 60)));

			if (secondsLeft === 0) {
				clearInterval(interval);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="countdown-container">
			<div className="countdown-box">
				<span>{days}</span>
				<p>DAYS</p>
			</div>
			<div className="countdown-box">
				<span>{hours}</span>
				<p>HRS</p>
			</div>
			<div className="countdown-box">
				<span>{minutes}</span>
				<p>MINS</p>
			</div>
			<div className="countdown-box">
				<span>{seconds}</span>
				<p>SECS</p>
			</div>
		</div>
	);
};

export default Countdown;
