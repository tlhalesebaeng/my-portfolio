import Marker from '../../utils/Marker.jsx';
import ContactDetails from './ContactDetails.jsx';
import emailImg from '../../assets/email.png';
import phoneImg from '../../assets/phone.png';
import addressImg from '../../assets/address.png';
import ContactForm from './ContactForm.jsx';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
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
            value: 'Subject',
        },
        {
            id: 'field-4',
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
            value: '+27 60 123 45678',
            imgSrc: phoneImg,
        },
        {
            id: 'personal-detail-3',
            value: 'Gauteng, South Africa',
            imgSrc: addressImg,
        },
    ];

    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <Marker />
            <div className="details-container">
                <ContactDetails details={personalDetails} />
                <ContactForm fields={contactFields} onSubmit={handleSubmit} />
            </div>
        </section>
    );
};

export default Contact;
