import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function EmailForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.subject && formData.message) {
            emailjs.send('service_pyv5875', 'template_0oibqpa', formData, 'lUMSecZVNM6PObPUO')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Email sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                }, (error) => {
                    console.error('FAILED...', error);
                    alert('Failed to send email.');
                });
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="email-form">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Subject:
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
}

export default EmailForm;
