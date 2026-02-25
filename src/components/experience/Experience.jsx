import SeparatedList from '../separated-list/SeparatedList.jsx';
import './Experience.css';

const Experience = ({ ref }) => {
    const experienceList = [
        {
            id: 'experience-1',
            year: 'Feb 2026 - Present',
            title: 'Academic Tutor',
            place: 'Wits University',
            description:
                'I currently tutor first-year Computer Science students in Introduction to Algorithms and Programming (IAP) and Basic Computer Organisations (BCO)',
        },
    ];
    return <SeparatedList ref={ref} infoClass="experience-info" title="Experience" list={experienceList} />;
};

export default Experience;
