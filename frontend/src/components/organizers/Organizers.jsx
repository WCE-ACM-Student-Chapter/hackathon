import React from 'react';
import './organizers.css';

const Organizers = () => {
    const contactPersons = [
        { id: 0, name: "Prof. Dr. U. A. Dabade", post: "I/C Director", info: "WCE Sangli" },
        { id: 1, name: "Dr. Sharad V. Gaikwad", post: "Chief Staff Advisor", info: "Vision 2025, WCE" },
        { id: 2, name: "Dr. M. A. Shah", post: "HoD CSE, Staff Advisor", info: "WCE ACM Student Chapter" },
        { id: 3, name: "Mr. Hamza Shaikh", post: "Chairperson", info: "WCE ACM Student Chapter" },
        { id: 4, name: "Mr. Sharaneshwar Punjal", post: "Co-Chairperson", info: "WCE ACM Student Chapter" },
        { id: 5, name: "Ms. Manaswi Devekar", post: "Secretary", info: "WCE ACM Student Chapter" },
    ];

    return (
        <div className="contact_container" id="organizers" data-aos="fade-up">
            <header>ORGANIZERS</header>
            <div className="contact-persons">
                {contactPersons.map((person) => (
                    <div className="person" key={person.id} data-aos="zoom-out-up">
                        <p>{person.name}</p>
                        <p>{person.post}</p>
                        <p>{person.info}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Organizers;
