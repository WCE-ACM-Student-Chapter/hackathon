import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className='nav__logo'>WCE Hackathon</a>

                <div>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#schedule" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Schedule
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#themes" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Themes
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#sponsors" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Sponsors
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#gallery" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Gallery
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#register" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Register Now
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" id="nav-close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header