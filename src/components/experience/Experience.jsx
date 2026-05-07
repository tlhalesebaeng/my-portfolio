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
        {
            id: 'experience-2',
            year: 'May 2026 - Present',
            title: 'Peer Coding Tutor',
            place: 'Wits University',
            description:
                'I assist Computer Science first year students with understanding advanced programming concepts by hosting three-hour sessions on Saturdays. This program is facilitated by the Wits Computer Science and Applied Mathematics school in collaboration with PSG.',
        },
    ];
    return <SeparatedList ref={ref} infoClass="experience-info" title="Experience" list={experienceList} />;
};

export default Experience;
