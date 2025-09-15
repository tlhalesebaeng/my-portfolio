import AboutSkills from './AboutSkills.jsx';
import Marker from '../../utils/Marker.jsx';
import javaImg from '../../assets/java.png';
import springBootImg from '../../assets/spring-boot.png';
import javaScriptImg from '../../assets/java-script.png';
import reactImg from '../../assets/react.png';
import mySQLImg from '../../assets/mysql.png';
import cloudImg from '../../assets/cloud.png';
import dockerImg from '../../assets/docker.png';
import infinityImg from '../../assets/infinity.png';
import emailImg from '../../assets/email-blue.png';
import phoneImg from '../../assets/phone-blue.png';
import addressImg from '../../assets/address-blue.png';
import eductionImg from '../../assets/education.png';
import './About.css';

const About = ({ ref }) => {
    const skills = [
        {
            id: 'skill-1',
            imgSrc: javaImg,
            name: 'Java',
        },
        {
            id: 'skill-2',
            imgSrc: springBootImg,
            name: 'Spring Boot',
        },
        {
            id: 'skill-3',
            imgSrc: javaScriptImg,
            name: 'JavaScript',
        },
        {
            id: 'skill-4',
            imgSrc: reactImg,
            name: 'React.js',
        },
        {
            id: 'skill-5',
            imgSrc: mySQLImg,
            name: 'MySQL',
        },
        {
            id: 'skill-6',
            imgSrc: cloudImg,
            name: 'AWS',
        },
        {
            id: 'skill-7',
            imgSrc: dockerImg,
            name: 'Docker',
        },
        {
            id: 'skill-8',
            imgSrc: infinityImg,
            name: 'Jenkins',
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
        {
            id: 'personal-detail-4',
            value: 'University of the Witwatersrand',
            imgSrc: eductionImg,
        },
    ];

    return (
        <section className="about" ref={ref}>
            <h2>About Me</h2>
            <Marker />
            <div className="about-details">
                <section className="about-details__contact">
                    <ul>
                        {personalDetails.map((detail) => (
                            <li key={detail.id}>
                                <img src={detail.imgSrc} />
                                <p>{detail.value}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="about-details__info">
                    <h3>Hi, I'm Tlhalefo Sebaeng</h3>
                    <p>
                        I am a Computer Science student at the University of the
                        Witwatersrand and I am passionate about software
                        engineering. I enjoy solving technical problems and I am
                        more than happy to tackle any real-world problem in the
                        field of technology.
                    </p>
                    <p>
                        I spend most of my time enhancing my problems solving
                        skills through building projects and solving DSA (Data
                        Structures and Algorithms) problems.
                    </p>
                    <div className="about-details__info-skills">
                        <h3>Technical Skills</h3>
                        <AboutSkills skills={skills} />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;
