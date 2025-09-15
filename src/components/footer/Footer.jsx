import { description } from '../../utils/functions/my-description.js';
import Marker from '../../utils/Marker.jsx';
import emailImg from '../../assets/email.png';
import phoneImg from '../../assets/phone.png';
import addressImg from '../../assets/address.png';
import githubImg from '../../assets/github.png';
import linkedinImg from '../../assets/linkedin.png';
import instagramImg from '../../assets/instagram.png';
import './Footer.css';

const Footer = ({ refs }) => {
    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const socialLinks = [
        {
            id: 'socil-1',
            imageSrc: linkedinImg,
            href: 'https://www.linkedin.com/in/tlhalefo-sebaeng',
        },
        {
            id: 'socil-2',
            imageSrc: githubImg,
            href: 'https://github.com/tlhalesebaeng',
        },
        {
            id: 'socil-3',
            imageSrc: instagramImg,
            href: 'https://www.instagram.com/tlhalefo.sebaeng',
        },
    ];

    const quickLinks = [
        {
            id: 'link-1',
            value: 'Home',
        },
        {
            id: 'link-2',
            value: 'About',
        },
        {
            id: 'link-3',
            value: 'Projects',
        },
        {
            id: 'link-4',
            value: 'Education',
        },
        {
            id: 'link-5',
            value: 'Contact',
        },
    ];

    const contactDetails = [
        {
            id: 'detail-1',
            value: 'tlhalesebaeng@gmail.com',
            imageSrc: emailImg,
        },
        {
            id: 'detail-2',
            value: '+27 67 784 6910',
            imageSrc: phoneImg,
        },
        {
            id: 'detail-3',
            value: 'Gauteng, South Africa',
            imageSrc: addressImg,
        },
    ];

    return (
        <footer>
            <section className="footer-about">
                <h3>Tlhalefo Sebaeng</h3>
                <Marker />
                <p>{description}</p>
                <ul>
                    {socialLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.href} target="_blank">
                                <img src={link.imageSrc} />
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="footer-links">
                <h3>Quick Links</h3>
                <Marker />
                <ul>
                    {quickLinks.map((link) => {
                        const ref = refs[`${link.value.toLowerCase()}Ref`];

                        return (
                            <li onClick={() => handleScroll(ref)} key={link.id}>
                                {link.value}
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section className="footer-contact">
                <h3>Contact Info</h3>
                <Marker />
                <ul>
                    {contactDetails.map((detail) => (
                        <li key={detail.id}>
                            <img src={detail.imageSrc} />
                            <p>{detail.value}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </footer>
    );
};

export default Footer;
