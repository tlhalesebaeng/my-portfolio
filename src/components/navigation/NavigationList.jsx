import './NavigationList.css';

const NavigationList = ({ onScroll, refs }) => {
    return (
        <ul className="nav-list">
            <li onClick={() => onScroll(refs.aboutRef)}>About</li>
            <li onClick={() => onScroll(refs.projectsRef)}>Projects</li>
            <li onClick={() => onScroll(refs.educationRef)}>Education</li>
            <li onClick={() => onScroll(refs.contactRef)}>Contact</li>
        </ul>
    );
};

export default NavigationList;
