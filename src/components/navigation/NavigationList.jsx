import './NavigationList.css';

const NavigationList = () => {
    return (
        <ul className="nav-list">
            <li onClick={() => handleScroll(refs.aboutRef)}>About</li>
            <li onClick={() => handleScroll(refs.projectsRef)}>Projects</li>
            <li onClick={() => handleScroll(refs.educationRef)}>Education</li>
            <li onClick={() => handleScroll(refs.contactRef)}>Contact</li>
        </ul>
    );
};

export default NavigationList;
