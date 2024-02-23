import React from 'react'
import './timeline.css'

const Timeline = () => {
    return (
        <div className="timeline" id='timeline' data-aos="fade-up">
            <header>TIMELINE</header>
            <div className="outer">
                <div className="tcard">
                    <div className="info" data-aos="fade-left">
                        <div className="date">14th Feb 12:00 AM</div>
                        <div className="heading">Registration Starts</div>
                        <p>Register yourself at Unstop by submitting your idea.</p>
                    </div>
                </div>
                <div className="tcard">
                    <div className="info" data-aos="fade-right">
                        <div className="date">1st Mar 12:00 PM</div>
                        <div className="heading">Registration Ends</div>
                        <p>We'll review your application and will let you know.</p>
                    </div>
                </div>
                <div className="tcard">
                    <div className="info" data-aos="fade-left">
                        <div className="date">6th Mar 10:00 AM</div>
                        <div className="heading">Round 1 Results</div>
                        <p>Know the shortlisted ideas for Round 2.</p>
                    </div>
                </div>
                <div className="tcard">
                    <div className="info" data-aos="fade-right">
                        <div className="date">16th Mar 8:00 AM</div>
                        <div className="heading">Hackathon Starts</div>
                        <p>Kick start your journey and turn your imagination for real.</p>
                    </div>
                </div>
                <div className="tcard">
                    <div className="info" data-aos="fade-left">
                        <div className="date">17th Mar 12:00 PM</div>
                        <div className="heading">Hackathon Ends</div>
                        <p>Submit your project through GitHub repository.</p>
                    </div>
                </div>
                <div className="tcard">
                    <div className="info" data-aos="fade-right">
                        <div className="date">17th Mar 4:00 PM</div>
                        <div className="heading">Prize Distribution</div>
                        <p>Winners and participants will be awarded with prizes and certificates.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline