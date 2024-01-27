import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/esm/Container'
import './home.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Countdown from '../countdown/countdown'

const Home = () => {
    useEffect(() => {
        var dataText = ["Battle of Development.", "Win Amazing Prizes.", "Separate Tracks.", "Novice and Expert."];
        function typeWriter(text, i, fnCallback) {
            if (i < (text.length)) {
                document.getElementById("info").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
                setTimeout(function () {
                    typeWriter(text, i + 1, fnCallback)
                }, 100);
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
        // start the text animation
        StartTextAnimation(0);
    }, []);

    return (
        <Container className='home_container' id="home">
            <div className="left_part">
                <div className="title">
                    <div id='college'><span>WCE</span></div>
                    <span id='main_title'>HACKATHON</span>
                    <div id='year'><span>16 MAR 24</span></div>
                    {/* <div id="tagline">IDEATE | BUILD | DEPLOY</div> */}
                    <div id="tagline">CODE | CREATE | CONQUER</div>
                    <div className='info_container'><span id='info'></span></div>
                    <div className='button_container'>
                        <button className='button'>Participate</button>
                        <button className='button'>Become a Mentor</button>
                    </div>
                    <div className='icons_container'>
                        <FontAwesomeIcon icon={faDiscord} className='social_icons' />
                        <FontAwesomeIcon icon={faInstagram} className='social_icons' />
                        <FontAwesomeIcon icon={faXTwitter} className='social_icons' />
                        <FontAwesomeIcon icon={faLinkedinIn} className='social_icons' />
                        <FontAwesomeIcon icon={faEnvelope} className='social_icons' />
                    </div>
                </div>
            </div>
            <div className="right_part">
                <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706379596/hackathon/sdzjeyfnes8xxuxwdahv.png" alt="WCE Hackathon '24" />
                <Countdown />
            </div>
        </Container>
    )
}

export default Home