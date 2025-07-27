import './Navigation.css';

const Navigation = ({ refs }) => {
    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav>
            <h1 onClick={() => handleScroll(refs.headerRef)}>
                Tlhalefo Sebaeng
            </h1>
            <ul>
                <li onClick={() => handleScroll(refs.aboutRef)}>About</li>
                <li onClick={() => handleScroll(refs.projectsRef)}>Projects</li>
                <li onClick={() => handleScroll(refs.educationRef)}>
                    Education
                </li>
                <li onClick={() => handleScroll(refs.contactRef)}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navigation;
