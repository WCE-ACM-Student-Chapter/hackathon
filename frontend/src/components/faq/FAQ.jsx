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
                            For queries contact
                            <br />
                            M. Hamza Shaikh: +919420889797
                            <br />
                            Sharaneshwar Punjal: +919075945885
                            <br />
                            Siya Pondkule: +919975008153
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
        question: "Who can participate in WCE Hackathon 2025?",
        answer: "WCE Hackathon 2025 is open to a diverse range of participants, including students, professionals, and individuals with varying skill levels. Whether you are a beginner or an experienced developer, despite the field of academic discipline chosen, you are eligible to join us! 🚀",
    },
    {
        id: 1,
        question: "What if this is my first hackathon?",
        answer: "Congratulations on considering your first hackathon! Hackathon 2025 is a great opportunity for beginners. We would be having expert sessions, guidance by mentors along the way to help you out in executing your ideas into projects. See you in the hackathon! 🤖",
    },
    {
        id: 2,
        question: "What should be the team size?",
        answer: "The team size can range from a minimum of 2 participants to a maximum of 4 participants. 🤝",
    },
    {
        id: 3,
        question: "Are team members from other colleges allowed?",
        answer: "Yes, WCE Hackathon 2025 welcomes participants from diverse backgrounds, including those from different colleges. The hackathon encourages collaboration and networking among individuals with varied experiences and expertise. 🌍",
    },
    {
        id: 4,
        question: "What is the eligibility for the novice track?",
        answer: "The novice track is open to team comprising of only first-year and second-year students. This track is designed to encourage beginners to explore problem-solving, coding, and teamwork in a competitive yet supportive environment. It's a great opportunity to learn, innovate, and experience a hackathon for the first time! 🎓"
    },
    {
        id: 5,
        question: "What is the eligibility for the expert track?",
        answer: "The expert track is open to team comprising of at least one third-year or final-year student. 🎓"
    },
    {
        id: 6,
        question: "What is the duration of the hackathon?",
        answer: "The hackathon will run for 24 hours, packed with coding, brainstorming, and innovation. 📅"
    },
    {
        id: 7,
        question: "Do I need to pay any registration fees?",
        answer: "No, there is no registration fee. The hackathon is free to participate in."
    },
    {
        id: 8,
        question: "Will there be prizes for the winners?",
        answer: "Yes, there will be exciting prizes and rewards for the top-performing teams."
    },
    {
        id: 9,
        question: "Do I need to bring my own laptop and tools?",
        answer: "Yes, participants are expected to bring their own laptops and necessary tools for development."
    },
    {
        id: 10,
        question: "Will there be food facilities?",
        answer: "Yes, food will be provided for all participants during the event."
    },
];

export default FAQ;
