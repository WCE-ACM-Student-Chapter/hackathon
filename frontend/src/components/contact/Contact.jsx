import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import './contact.css'

const successToastMessage = () => {
    Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        html: "Thank you for contacting us! <br><br> Our organizeres will respond to your message within 2 working days!",
        footer: '<a href="/" style="color:black;">Go to Home</a>'
    }).then(function () {
        window.location.href = '/';
    });
};

const errorToastMessage = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="/" style="color:black;">Go to Home</a>'
    })
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post('https://wcehackathon-backend.onrender.com/api/v1/raiseQuery', formData)
            .then(res => {
                console.log(res.data.duplicate)
                if (res.data.success) {
                    successToastMessage()
                } else {
                    errorToastMessage()
                }
            })
    }

    return (
        <div data-aos="fade-up">
            <Form onSubmit={handleSubmit} id='form' method='post'>
                <header className='center'>CONNECT WITH US</header>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label className="mt-4">Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" title="Enter your name" required autoComplete="off" value={formData.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Enter valid email address" required autoComplete="off" value={formData.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" title="Enter your message" required autoComplete="off" value={formData.message} onChange={handleChange} />
                </Form.Group>
                <div className="form_button_container">
                    <button type='submit'>Submit</button>
                    <a href="https://unstop.com/o/X2mekLx?lb=LqtjHTQ" target='_blank'><button type='button'>Register at Unstop</button></a>
                </div>
            </Form>
        </div>
    )
}

export default Contact