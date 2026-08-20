import SeparatedList from '../separated-list/SeparatedList.jsx';
import './Experience.css';

const Experience = ({ ref }) => {
  const experienceList = [
    {
      id: 'experience-1',
      year: 'Feb 2026 - Present',
      title: 'Academic Tutor',
      place: 'Wits University',
      description: 'Coordinating tutorials and lab sessions for first year Computer Science major modules',
    },
    {
      id: 'experience-2',
      year: 'May 2026 - Present',
      title: 'Peer Coding Tutor',
      place: 'Wits University',
      description:
        'I assist students with understanding advanced programming concepts by hosting two-hour sessions on Saturdays',
    },
    {
      id: 'experience-3',
      year: 'Oct 2023 - April 2024',
      title: 'Residence House Committee',
      place: 'Knockando Halls Of Residence',
      description:
        ' Responsible for ensuring that first years can find their way around the university. Coordinated and arranged activities and events in the residence',
    },
  ];
  return <SeparatedList ref={ref} infoClass="experience-info" title="Experience" list={experienceList} />;
};

export default Experience;
