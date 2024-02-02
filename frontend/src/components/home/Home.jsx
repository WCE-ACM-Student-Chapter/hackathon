import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './home.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Countdown from '../countdown/countdown'
import RegistrationForm from './RegistrationForm'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    useEffect(() => {
        var dataText = ["Battle of Development.", "Win Amazing Prizes.", "Separate Tracks.", "Novice and Expert."];
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
        // start the text animation
        StartTextAnimation(0);
    }, []);

    return (
        <div className='home_container' id="home">
            <div className="left_part">
                <div className="title">
                    <div id='college'><span>WCE</span></div>
                    <span id='main_title'>HACKATHON</span>
                    <div id='year'><span>16-17 MAR 24</span></div>
                    {/* <div id="tagline">IDEATE | BUILD | DEPLOY</div> */}
                    <div id="tagline">CODE | CREATE | CONQUER</div>
                    <div className='info_container'><span id='info'></span></div>
                    <div className='button_container'>
                        <button className='button' onClick={() => toggleTab(1)}>Participate</button>
                        <button className='button'>Become a Mentor</button>
                        <button className='button'>Become a Sponsor</button>
                    </div>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="form_container">
                            <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="form-close" />
                            <RegistrationForm />
                        </div>
                    </div>
                    <div className='icons_container'>
                        <a href=""><FontAwesomeIcon icon={faInstagram} className='social_icons' /></a>
                        <a href=""><FontAwesomeIcon icon={faXTwitter} className='social_icons' /></a>
                        <a href=""><FontAwesomeIcon icon={faLinkedinIn} className='social_icons' /></a>
                        <a href=""><FontAwesomeIcon icon={faEnvelope} className='social_icons' /></a>
                    </div>
                </div>
            </div>
            <div className="right_part">
                <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706690072/hackathon/o1vyqhxcv6yawv10gapw.png" alt="WCE Hackathon '24" />
                <Countdown />
            </div>
        </div>
    )
}

export default Home