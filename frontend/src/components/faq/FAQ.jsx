import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './faq.css';

const FAQ = () => {
    return (
        <div className='faq_container' id='faqs' data-aos="fade-up">
            <header>FAQS</header>
            <Accordion data-bs-theme="dark">
                {faqData.map((faq) => (
                    <Accordion.Item eventKey={faq.id}>
                        <Accordion.Header>{faq.question}</Accordion.Header>
                        <Accordion.Body>
                            {faq.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                <Accordion.Item eventKey="15">
                    <Accordion.Header>Contact Information</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            For queries contact :
                            <br />
                            Viraj Takone - +917420098224
                            <br />
                            Vaibhav Fulmali - +918530084596
                            <br />
                            Sanika Patil : +919423236973
                        </p>
                        <p>
                            You can also reach us by email at <br />
                            - wceacmsc@gmail.com <br />
                            - wcehackathon@walchandsangli.ac.in
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};


const faqData = [
    {
        id: 0,
        question: "Who can participate in WCE Hackathon '24?",
        answer: "WCE Hackathon '24 is open to a diverse range of participants, including students, professionals, and individuals with varying skill levels. Whether you are a beginner or an experienced developer, despite the field of academic discipline chosen, you are eligible to join us! 🚀",
    },
    {
        id: 1,
        question: "What if this is my first hackathon?",
        answer: "Congratulations on considering your first hackathon! Hackathon '24 is a great opportunity for beginners. We would be having expert sessions, guidance by mentors along the way to help you out in executing your ideas into projects. See you in the hackathon! 🤖",
    },
    {
        id: 2,
        question: "What should be the team size?",
        answer: "The team size can range from a minimum of 1 participant to a maximum of 4 participants. 🤝",
    },
    {
        id: 3,
        question: "Are team members from other colleges allowed?",
        answer: "Yes, WCE Hackathon '24 welcomes participants from diverse backgrounds, including those from different colleges. The hackathon encourages collaboration and networking among individuals with varied experiences and expertise. 🌍",
    }
];

export default FAQ;
