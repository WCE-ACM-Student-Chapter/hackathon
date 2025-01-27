import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './home.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import ModelViewer from '../partials/Modelviewer'
import Countdown from '../countdown/countdown'
import { ReactTyped } from "react-typed"

const Home = () => {

    useEffect(() => {
        var dataText = ["Battle of Development.", "Win Amazing Prizes.", "Separate Tracks.", "Novice and Expert."];
    }, []);

    return (
        <div className='home_container' id="home">
            <div className="left_part">
                <div className="title">
                    <div id='college'><span>WCE</span></div>
                    <span id='main_title'>HACKATHON</span>
                    <div id='year'><span>15-16 MAR 25</span></div>
                    <div id="tagline">CODE | CREATE | CONQUER</div>
                    <ReactTyped
                        className="info_container"
                        strings={[
                            "Battle of Development.",
                            "Win Amazing Prizes.",
                            "Separate Tracks.",
                            "Novice and Expert.",
                        ]}
                        typeSpeed={20}
                        backSpeed={30}
                        loop
                    />
                    <div className='button_container'>
                        <a href="https://unstop.com/o/X2mekLx?lb=LqtjHTQ" target='_blank'><button className='button'>Register Now</button></a>
                        <a href="https://drive.google.com/file/d/159lSXSRfIlQN-pTzWp1CA2M6yZeoHX0e/view?usp=sharing" target='_blank'><button className='button'>Brochure</button></a>
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
                <img src="/acmlogo.png" alt="Hackathon" />
                {/* <ModelViewer modelPath="/acmfinal.glb" scale={5.2} mobileScale={6} /> */}
                <Countdown />
            </div>
        </div>
    )
}

export default Home