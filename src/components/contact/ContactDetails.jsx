import './ContactDetails.css';

const ContactDetails = ({ details }) => {
    return (
        <section className="contact-details">
            <h3>Let's Work Together</h3>
            <p className="contact-details__description">
                I am currently looking for internship opportunities and
                collaboration on projects. Whether you have a question or just
                want to say hi, I will do my best to get back to you
            </p>
            <ul>
                {details.map((detail) => (
                    <li key={detail.id}>
                        <img src={detail.imgSrc} />
                        <p>{detail.value}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ContactDetails;
