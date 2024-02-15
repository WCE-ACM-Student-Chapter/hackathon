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
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1707887439/hackathon/Theme%20Icons/i1rqpmxkpss0eo6lk0ao.png" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">AR-VR Innovations</h3>
                        <span className="services__button" onClick={() => toggleTab(1)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>
                </div>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />

                        <h3 className="services__modal-title">AR-VR Innovations</h3>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Develop immersive educational experiences using AR/VR technology.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Create virtual tours for historical sites or museums with interactive elements.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Build augmented reality games that blend digital content with the real world.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Design AR/VR solutions for training and simulations in various industries like healthcare or manufacturing and much more.</p>
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

                        <h3 className="services__modal-title">Health Care</h3>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Develop a telemedicine platform for remote consultations and healthcare monitoring.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Build a wearable device for continuous health monitoring and early detection of medical conditions.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Create a machine learning-based diagnostic tool for analyzing medical images like X-rays or MRIs.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Design a health management app for tracking fitness goals, medication reminders, and dietary habits and much more.</p>
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

                        <h3 className="services__modal-title">Renewable Energy</h3>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Develop a smart energy management system to optimize renewable energy usage.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Build a portable solar-powered device for charging electronic devices.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Create a system for monitoring and optimizing energy efficiency in buildings.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Design a wind turbine monitoring system using IoT sensors for predictive maintenance and much more.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="services__content" data-aos="zoom-in-right">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706615886/hackathon/Theme%20Icons/ojbtu3a4bxxsthzzvnwi.webp" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">Smart Agriculture</h3>
                        <span className="services__button" onClick={() => toggleTab(4)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>
                </div>
                <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />

                        <h3 className="services__modal-title">Smart Agriculture</h3>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Develop a predictive analytics tool using machine learning to optimize crop yields.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Build an IoT-based smart irrigation system for efficient water usage in agriculture.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Create a drone-based monitoring system for crop health assessment.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Design a mobile application for farmers to remotely monitor and control farm equipment and much more.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="services__content" data-aos="zoom-in-up">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1707888302/hackathon/Theme%20Icons/tnxzxtyrdkpjlpcvbdjo.png" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">Education</h3>
                        <span className="services__button" onClick={() => toggleTab(5)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>

                </div>
                <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />

                        <h3 className="services__modal-title">Education</h3>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Develop educational games for teaching various subjects such as mathematics, science, or language.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Build a gamified learning platform with personalized learning paths for students.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Create interactive simulations for historical events or scientific experiments.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Design multiplayer educational games for collaborative learning experiences and much more.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="services__content" data-aos="zoom-in-left">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1707887924/hackathon/Theme%20Icons/v98frmihzztvm2squecx.png" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">Fintech</h3>
                        <span className="services__button" onClick={() => toggleTab(6)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>
                </div>
                <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />

                        <h3 className="services__modal-title">Fintech</h3>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Develop a blockchain-based solution for secure and transparent financial transactions.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Build a mobile banking application with advanced security features like biometric authentication.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Create a predictive analytics tool for fraud detection and prevention in banking transactions.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Design a chatbot for customer support and financial advisory services and much more.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="services__content" data-aos="zoom-in-right">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1707887549/hackathon/Theme%20Icons/k4a6olyemqlf0zgopq5s.png" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">Cybersecurity</h3>
                        <span className="services__button" onClick={() => toggleTab(7)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>

                </div>
                <div className={toggleState === 7 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content" onBlur={() => toggleTab(0)}>
                        <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />

                        <h3 className="services__modal-title">Cybersecurity</h3>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Develop a threat detection and prevention system for network security.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Build a secure data encryption and decryption solution for sensitive information.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Create a system for identity and access management with biometric authentication.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Design a cybersecurity training platform with gamified learning modules and much more.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="services__content" data-aos="zoom-in-right">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1707887819/hackathon/Theme%20Icons/kjc3shoojxwoz62btoo5.png" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">Digital Twin</h3>
                        <span className="services__button" onClick={() => toggleTab(8)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>

                </div>
                <div className={toggleState === 8 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <FontAwesomeIcon onClick={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />

                        <h3 className="services__modal-title">Digital Twin</h3>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Develop a digital twin platform for predictive maintenance in manufacturing or infrastructure.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Build a virtual modeling and simulation environment for testing IoT devices.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Create a digital twin for smart cities to optimize urban planning and resource management.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Design a real-time monitoring and control system using digital twin technology for industrial processes and much more.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="services__content" data-aos="zoom-in-left">
                    <img src="https://res.cloudinary.com/dcevjlqv4/image/upload/v1706691940/hackathon/Theme%20Icons/ot3pydfjaqktlacsusrc.png" alt="" />
                    <div className='services__title-container'>
                        <h3 className="services__title">Open Innovation</h3>
                        <span className="services__button" onClick={() => toggleTab(9)}>View More <FontAwesomeIcon icon={faArrowRight} className="services__button-icon" /></span>
                    </div>

                </div>
                <div className={toggleState === 9 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <FontAwesomeIcmodellingck={() => toggleTab(0)} icon={faXmark} className="services__modal-close" />

                        <h3 className="services__modal-title">Open Innovation</h3>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Only for Novice Track.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Develop innovative solutions that address environmental sustainability challenges.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">hHrness the power of technology for social impact by addressing societal issues, promoting inclusivity, or improving the well-being of communities.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Develop projects that showcase the collaborative potential of humans and AI working together.</p>
                            </li>
                            <li className="services__modal-service">
                                <FontAwesomeIcon icon={faCircleCheck} className="services__modal-icon" />
                                <p className="services__modal-info">Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <span>The above points are merely some ideas related to the theme. You can choose your kind of innovation aligned to this theme.</span>
        </div>
    )
}

export default Themes
