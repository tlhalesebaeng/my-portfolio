import Marker from '../../utils/Marker.jsx';
import './About.css';
import AboutSkills from './AboutSkills.jsx';

const About = () => {
    const skills = [
        {
            id: 'skill-1',
            imgSrc: '#',
            name: 'Java',
        },
        {
            id: 'skill-2',
            imgSrc: '#',
            name: 'Spring Boot',
        },
        {
            id: 'skill-3',
            imgSrc: '#',
            name: 'JavaScript',
        },
        {
            id: 'skill-4',
            imgSrc: '#',
            name: 'React.js',
        },
        {
            id: 'skill-5',
            imgSrc: '#',
            name: 'MySQL',
        },
        {
            id: 'skill-6',
            imgSrc: '#',
            name: 'AWS',
        },
        {
            id: 'skill-7',
            imgSrc: '#',
            name: 'Docker',
        },
        {
            id: 'skill-8',
            imgSrc: '#',
            name: 'Jenkins',
        },
    ];

    return (
        <section className="about">
            <h2>About Me</h2>
            <Marker />
            <div className="about-details">
                <section></section>
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
