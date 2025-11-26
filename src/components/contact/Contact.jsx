import { useState } from 'react';

import Marker from '../../utils/Marker.jsx';
import ContactDetails from './ContactDetails.jsx';
import emailImg from '../../assets/email.png';
import phoneImg from '../../assets/phone.png';
import addressImg from '../../assets/address.png';
import ContactForm from './ContactForm.jsx';
import './Contact.css';

const Contact = ({ ref }) => {
    const [data, setData] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const [success, setSuccess] = useState();

    // Function that handles input field change
    const handleChange = (field, value) => {
        // Reset the error and success states
        setError('');
        setSuccess('');

        // Set the data. field refers to the data field we are attempting to chane
        setData((prevData) => {
            // Make a deep copy the data
            const newData = { ...prevData };

            // Set the field accordingly and return the newly created data
            newData[field.toLowerCase()] = value;
            return newData;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
            const response = await fetch(baseUrl + '/sendInfo', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            const result = await response.json();
            setLoading(false);

            if (!response.ok) {
                setError(result.message);
            }

            setSuccess(result.message);
            setError('buff');
        } catch (error) {
            setLoading(false);
            console.error(error);
            setError('Something went really bad! Please try again later');
        }
    };

    const contactFields = [
        {
            id: 'field-1',
            value: 'Name',
        },
        {
            id: 'field-2',
            value: 'Email',
        },
        {
            id: 'field-3',
            value: 'Message',
        },
    ];

    const personalDetails = [
        {
            id: 'personal-detail-1',
            value: 'tlhalesebaeng@gmail.com',
            imgSrc: emailImg,
        },
        {
            id: 'personal-detail-2',
            value: '+27 67 784 6910',
            imgSrc: phoneImg,
        },
        {
            id: 'personal-detail-3',
            value: 'Gauteng, South Africa',
            imgSrc: addressImg,
        },
    ];

    return (
        <section className="contact" ref={ref}>
            <h2>Contact Me</h2>
            <Marker />
            <div className="details-container">
                <ContactDetails details={personalDetails} />
                <ContactForm
                    success={success}
                    loading={loading}
                    error={error}
                    fields={contactFields}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                />
            </div>
        </section>
    );
};

export default Contact;
