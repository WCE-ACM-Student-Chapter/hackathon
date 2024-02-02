import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import './form.css'

const successToastMessage = () => {
    console.log('Success Toast')
    Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'Thank you for registering for the event!',
        footer: '<a href="/">Go to Home</a>'
    })
};

const RegistrationForm = () => {

    const errorToastMessage = () => {
        toast.error("Registration Unsuccessful! Try Again!", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        await axios.post('https://wcehackathon-backend.vercel.app/api/v1/upload/signup', formData)
            .then(res => {
                successToastMessage();
            })
            .catch(err => {
                errorToastMessage();
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} id='form' method='post'>
                <header className='center'>REGISTER NOW</header>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label className="mt-4">Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" title="Enter your name" required autoComplete="off" value={formData.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Enter valid email address" required autoComplete="off" value={formData.email} onChange={handleChange} />
                </Form.Group>
                <button type='submit'>Submit</button>
            </Form>
        </div>
    )
}

export default RegistrationForm