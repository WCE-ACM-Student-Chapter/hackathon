import React from 'react'
import './timeline.css'

const Timeline = () => {
    return (
        <div className="timeline" id='timeline' data-aos="fade-up">
            <header>TIMELINE</header>
            <div className="outer">
                <div className="tcard">
                    <div className="info" data-aos="fade-left">
                        <div className="date">4th Feb 12:00 AM</div>
                        <div className="heading">Registration Starts</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="tcard">
                    <div className="info" data-aos="fade-right">
                        <div className="date">4th Feb 12:00 AM</div>
                        <div className="heading">Registration Starts</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="tcard">
                    <div className="info" data-aos="fade-left">
                        <div className="date">4th Feb 12:00 AM</div>
                        <div className="heading">Registration Starts</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="tcard">
                    <div className="info" data-aos="fade-right">
                        <div className="date">4th Feb 12:00 AM</div>
                        <div className="heading">Registration Starts</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline