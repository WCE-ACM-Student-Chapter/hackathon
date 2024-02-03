import React from 'react';
import './organizers.css';

const Organizers = () => {
    const contactPersons = [
        { id: 0, name: "Dr. U. A. Dabade", post: "I/C Director", info: "WCE Sangli" },
        { id: 1, name: "Mrs. Dr. M. A. Shah", post: "HOD CSE", info: "Staff Advisor, WCE ACM Student Chapter" },
        { id: 3, name: "Mr. Viraj Takone", post: "Chairperson", info: "WCE ACM Student Chapter" },
        { id: 2, name: "Ms. Sanika Patil", post: "Vice-Chairperson", info: "WCE ACM Student Chapter" },
        { id: 4, name: "Mr. Vaibhav Fulmali", post: "Vice-Chairperson", info: "WCE ACM Student Chapter" },
    ];

    return (
        <div className="contact_container" id="contact" data-aos="fade-up">
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
