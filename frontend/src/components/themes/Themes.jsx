import React, { useState } from 'react'
import { faXmark, faCircleCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './themes.css'

const Themes = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='themes_container' id='themes'>
            <header>THEMES</header>

            <div className="services__container container grid">
                <div className="services__content">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706615886/hackathon/Theme%20Icons/sbhldkmxta52z0mwgdvb.webp" alt="" />
                    <h3 className="services__title">Renewable <br /> Energy</h3>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />

                            <h3 className="services__modal-title">Tab 1</h3>
                            <p className="services__modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I create ux element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706615886/hackathon/Theme%20Icons/sbhldkmxta52z0mwgdvb.webp" alt="" />
                    <h3 className="services__title">Renewable <br /> Energy</h3>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />

                            <h3 className="services__modal-title">Tab 2</h3>
                            <p className="services__modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I create ux element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706615886/hackathon/Theme%20Icons/sbhldkmxta52z0mwgdvb.webp" alt="" />
                    <h3 className="services__title">Renewable <br /> Energy</h3>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />

                            <h3 className="services__modal-title">Tab 3</h3>
                            <p className="services__modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I create ux element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706615886/hackathon/Theme%20Icons/sbhldkmxta52z0mwgdvb.webp" alt="" />
                    <h3 className="services__title">Renewable <br /> Energy</h3>

                    <span className="services__button" onClick={() => toggleTab(4)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>

                    <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />

                            <h3 className="services__modal-title">Tab 4</h3>
                            <p className="services__modal-description">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">Web page development.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I create ux element interactions.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">I position your company brand.</p>
                                </li>
                                <li className="services__modal-service">
                                    <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                    <p className="services__modal-info">Design and mockups of products for companies.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Themes