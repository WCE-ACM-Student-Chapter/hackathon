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
        <div className='themes_container' id='themes' data-aos="fade-up">
            <header>THEMES</header>

            <div className="services__container container grid">
                <div className="services__content" data-aos="zoom-in-right">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706615898/hackathon/Theme%20Icons/twoemik5kromlkb5i1vb.png" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">AI - ML</h3>
                        <span className="services__button" onClick={() => toggleTab(1)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>

                </div>
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

                <div className="services__content" data-aos="zoom-in-up">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706691075/hackathon/Theme%20Icons/wg4hjadihhk6fsbh4hm1.png" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">Health Care</h3>
                        <span className="services__button" onClick={() => toggleTab(2)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>

                </div>
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

                <div className="services__content" data-aos="zoom-in-left">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706615886/hackathon/Theme%20Icons/sbhldkmxta52z0mwgdvb.webp" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">Renewable Energy</h3>
                        <span className="services__button" onClick={() => toggleTab(3)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>

                </div>
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

                <div className="services__content" data-aos="zoom-in-right">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706615886/hackathon/Theme%20Icons/ojbtu3a4bxxsthzzvnwi.webp" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">Agriculture</h3>
                        <span className="services__button" onClick={() => toggleTab(4)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>

                </div>
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

                <div className="services__content" data-aos="zoom-in-up">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706692286/hackathon/Theme%20Icons/wppxo3pbojdlsxfzc3ff.png" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">Environment</h3>
                        <span className="services__button" onClick={() => toggleTab(5)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>

                </div>
                <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
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

                <div className="services__content" data-aos="zoom-in-left">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706691940/hackathon/Theme%20Icons/ot3pydfjaqktlacsusrc.png" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">Self Innovation</h3>
                        <span className="services__button" onClick={() => toggleTab(6)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>

                </div>
                <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
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
    )
}

export default Themes