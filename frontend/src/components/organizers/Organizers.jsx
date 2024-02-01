import React from 'react';
import './organizers.css';

const Organizers = () => {
    const contactPersons = [
        { id: 1, name: "Dr. B. F. Momin", post: "", info: "WCE Sangli" },
        { id: 0, name: "Dr. P. G. Sonavane", post: "I/C Director", info: "WCE Sangli" },
        { id: 2, name: "Mrs. Dr. M. A. Shah", post: "HOD CSE", info: "Staff Advisor, WCE ACM Student Chapter" },
        { id: 4, name: "Ms. Sanika Patil", post: "Vice-Chairperson", info: "WCE ACM Student Chapter" },
        { id: 3, name: "Mr. Viraj Takone", post: "Chairperson", info: "WCE ACM Student Chapter" },
        { id: 5, name: "Mr. Vaibhav Fulmali", post: "Vice-Chairperson", info: "WCE ACM Student Chapter" },
    ];

    return (
        <div className="contact_container" id="contact">
            <header>ORGANIZERS</header>
            <div className="contact-persons">
                {/* First Row */}
                {contactPersons.map((person) => (
                    <div className="person" key={person.id}>
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
