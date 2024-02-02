import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import Swal from 'sweetalert2'
import './form.css'

const successToastMessage = () => {
    Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        html: 'Thank you for registering for the event! <br> Kindly check your mail for the Unstop link!',
        footer: '<a href="/" style="color:black;">Go to Home</a>'
    }).then(function () {
        window.location.href = '/';
    });
};

const duplicateToastMessage = () => {
    Swal.fire({
        icon: 'info',
        title: 'Oops...',
        html: 'You have already registered for the event! <br> Kindly check your mail',
        footer: '<a href="/" style="color:black;">Go to Home</a>'
    }).then(function () {
        window.location.href = '/';
    });
}

const errorToastMessage = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="/" style="color:black;">Go to Home</a>'
    })
}

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // await axios.post('https://wcehackathon-backend.onrender.com/api/v1/upload/signup', formData)
        await axios.post('http://localhost:5000/api/v1/upload/signup', formData)
            .then(res => {
                console.log(res.data.duplicate)
                if (res.data.success) {
                    successToastMessage()
                } else if (res.data.duplicate) {
                    duplicateToastMessage()
                } else {
                    errorToastMessage()
                }
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
                <button type='submit' className='center'>Submit</button>
            </Form>
        </div>
    )
}

export default RegistrationForm