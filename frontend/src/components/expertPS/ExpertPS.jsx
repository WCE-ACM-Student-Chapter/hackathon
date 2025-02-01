import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWind,
    faMicrochip,
    faChartLine,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import './expertPS.css';
import expertPSData from './expertPSData.json';

const iconMapper = {
    1: faWind,
    2: faMicrochip,
    3: faChartLine,
    4: faGlobe
};

const ExpertPS = () => {
    return (
        <div id='expertPS' className="expert-container" data-aos="fade-up">
            <header>Expert Track Problem Statements</header>
            <span className='track_tag'>For <b>Third Year</b> and <b>Final Year</b> Students Only</span>

            <div className="expert-grid">
                {expertPSData.map((ps) => (
                    <div key={ps.id} className="expert-card" data-aos="fade-up">
                        <div className="expert-title">
                            <FontAwesomeIcon
                                icon={iconMapper[ps.id]}
                                className="expert-icon"
                            />
                            <h3>{ps.id}. {ps.title}</h3>
                        </div>
                        {ps.description.map((desc, index) => (
                            <p key={index} className="expert-description">{desc}</p>
                        ))}
                        <a
                            href={ps.resource}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="expert-link"
                        >
                            <button>Resource</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExpertPS