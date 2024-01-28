import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './faq.css';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <div className="accordion">
                <div className="title">FAQ's</div>
                <div className="title-underline"></div> {/* New div for the underline */}
                <div className="accordion-items">
                    {faqData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <div
                                className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.question}
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`arrow-icon ${activeIndex === index ? 'open' : ''}`}
                                />
                            </div>
                            <div className={`accordion-body ${activeIndex === index ? 'expanded' : ''}`}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Sample FAQ data
const faqData = [
    {
        question: "Who can participate in WCE Hackathon 2K24? 🌐",
        answer: "WCE Hackathon 2k24 is open to a diverse range of participants, including students, professionals, and individuals with varying skill levels. Whether you are a beginner or an experienced developer, despite the field of academic discipline chosen, you are eligible to join us! 🚀",
    },
    {
        question: "What if this is my first hackathon?",
        answer: "Congratulations on considering your first hackathon! DUHacks 3.0 is a great opportunity for beginners. We would be having expert sessions, guidance by mentors along the way to help you out in executing your ideas into projects. See you in the hackathon! 🤖",
    },
    {
        question: "What should be the team size?",
        answer: "The team size can range from a minimum of 1 participant to a maximum of 4 participants. 🤝",
    },
    {
        question: "Are team members from other colleges allowed?",
        answer: "Yes, WCE Hackathon 2K24 welcomes participants from diverse backgrounds, including those from different colleges. The hackathon encourages collaboration and networking among individuals with varied experiences and expertise. 🌍",
    }
];

export default Accordion;
