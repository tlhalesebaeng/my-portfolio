import './NavigationList.css';

const NavigationList = ({ onLinkClick, refs, sidebarIsOpened }) => {
    return (
        <ul className={sidebarIsOpened ? 'sidebar-nav' : 'nav-list'}>
            <li onClick={() => onLinkClick(refs.aboutRef)}>About</li>
            <li onClick={() => onLinkClick(refs.projectsRef)}>Projects</li>
            <li onClick={() => onLinkClick(refs.educationRef)}>Education</li>
            <li onClick={() => onLinkClick(refs.contactRef)}>Contact</li>
        </ul>
    );
};

export default NavigationList;
