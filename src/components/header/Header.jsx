import { description } from '../../utils/functions/my-description.js';
import Button from '../../utils/Button.jsx';
import HeaderSkill from './HeaderSkill.jsx';
import databaseImg from '../../assets/database.png';
import apiImg from '../../assets/api.png';
import serverImg from '../../assets/server.png';
import bulbImg from '../../assets/bulb.png';
import laptopImg from '../../assets/laptop.jpg';
import './Header.css';

const Header = ({ refs }) => {
    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const skills = [
        {
            id: 'skill-1',
            name: 'Backend Development',
            icon: serverImg,
        },
        {
            id: 'skill-2',
            name: 'API Integration',
            icon: apiImg,
        },
        {
            id: 'skill-3',
            name: 'Database Solutions',
            icon: databaseImg,
        },
        {
            id: 'skill-4',
            name: 'Creative Problem Solving',
            icon: bulbImg,
        },
    ];

    return (
        <header ref={refs.headerRef}>
            <div className="header-bg-color"></div>
            <section className="header-bg-img">
                <img src={laptopImg} />
            </section>
            <section className="header-details">
                <h2 onClick={() => handleScroll(refs.headerRef)}>
                    Tlhalefo Sebaeng
                </h2>
                <h3>
                    Software Developer | Computer Science Student At Wits
                    University
                </h3>
                <p className="header-description">{description}</p>
                <ul>
                    {skills.map((skill) => (
                        <HeaderSkill key={skill.id} skill={skill} />
                    ))}
                </ul>
                <section className="header-buttons">
                    <Button
                        onClick={() => handleScroll(refs.projectsRef)}
                        className="header-btn__projects"
                    >
                        View My Projects
                    </Button>
                    <Button
                        onClick={() => handleScroll(refs.contactRef)}
                        className="header-btn__contact"
                    >
                        Contact Me
                    </Button>
                </section>
            </section>
        </header>
    );
};

export default Header;
