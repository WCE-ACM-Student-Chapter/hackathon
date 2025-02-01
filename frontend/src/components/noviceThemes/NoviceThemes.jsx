import React, { useState, useEffect } from 'react';
import { faXmark, faCircleCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './noviceThemes.css';

// Import the themes data
import noviceThemes from './noviceThemes.json';

const NoviceThemes = () => {
    const [toggleState, setToggleState] = useState(0);
    const [data, setData] = useState([]);
    const [activeTrack, setActiveTrack] = useState('novice');

    useEffect(() => {
        setData(activeTrack === 'novice' ? noviceThemes : expertPS);
    }, []);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='themes_container' id='noviceThemes' data-aos="fade-up">
            <header>NOVICE TRACK THEMES</header>
            <span className='track_tag'>For <b>First Year</b> and <b>Second Year</b> Students Only</span>

            {/* <div className="themes__tabs">
                <span className={activeTrack === 'novice' ? 'themes__tab active-tab' : 'themes__tab'} onClick={() => { setActiveTrack('novice'); setData(noviceThemes); }}>Novice</span>
                <div id='vertical__line'></div>
                <span className={activeTrack === 'expert' ? 'themes__tab active-tab' : 'themes__tab'} onClick={() => { setActiveTrack('expert'); setData(expertPS); }}>Expert</span>
            </div> */}

            <div className="services__container container grid">
                {data.map(field => (
                    <div key={field.id} className="services__content" data-aos="fade-up ">
                        <img src={field.image} alt={field.title} />
                        <div className='services__title-container'>
                            <h3 className="services__title">{field.title}</h3>
                            <span className="services__button" onClick={() => toggleTab(field.id)}>
                                View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" />
                            </span>
                        </div>
                    </div>))}

                {data.map(field => (
                    <div className={toggleState === field.id ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />
                            <h3 className="services__modal-title">{field.title}</h3>
                            <ul className="services__modal-services grid">
                                {field.description.map((desc, index) => (
                                    <li key={index} className="services__modal-service">
                                        <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                        <p className="services__modal-info">{desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default NoviceThemes;