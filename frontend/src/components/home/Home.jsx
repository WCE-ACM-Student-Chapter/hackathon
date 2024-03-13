import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './home.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Countdown from '../countdown/countdown'
import RegistrationForm from '../contact/RegistrationForm'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

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
                    <div id='year'><span>23-24 MAR 24</span></div>
                    <div id="tagline">CODE | CREATE | CONQUER</div>
                    <div className='info_container'><span id='info'></span></div>
                    <div className='button_container'>
                        <a href="https://tinyurl.com/Hackathon24Round1Shortlisted" target='_blank'><button className='button'>Round 1 Results</button></a>
                        <a href="https://drive.google.com/file/d/1OfTi5WrcSDNyDWmt292hK77fmzK7VeGG/view?usp=sharing" target='_blank'><button className='button'>Round 1 Waitlisted</button></a>
                    </div>
                    <div className='icons_container'>
                        <a href="https://www.youtube.com/@wceacm?sub_confirmation=1" target='blank'><FontAwesomeIcon icon={faYoutube} className='social_icons' /></a>
                        <a href="https://www.instagram.com/wce_acm/" target='blank'><FontAwesomeIcon icon={faInstagram} className='social_icons' /></a>
                        <a href="https://twitter.com/wce_acm" target='blank'><FontAwesomeIcon icon={faXTwitter} className='social_icons' /></a>
                        <a href="https://www.linkedin.com/company/wce-acm-student-chapter/mycompany/" target='blank'><FontAwesomeIcon icon={faLinkedinIn} className='social_icons' /></a>
                        <a href="mailto:wceacmsc@gmail.com" target='blank'><FontAwesomeIcon icon={faEnvelope} className='social_icons' /></a>
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