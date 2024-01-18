import React, { useState } from 'react';
import './Contact.css'

const ContactPage = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleChange} />
                </label>
                <label>
                    Message:
                    <textarea name="message" onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContactPage;