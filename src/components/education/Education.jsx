import SeparatedList from '../separated-list/SeparatedList.jsx';
import './Education.css';

const Education = ({ ref }) => {
    const educationList = [
        {
            id: 'education-1',
            year: '2023 - Present',
            title: 'BSc Computer Science and Computational Applications',
            place: 'Wits University',
            description:
                'I am currently doing second year and I am expecting to finish on november 2026. Relevant course work includes Mobile Computing, Database Fundamentals, Computer Networks and Analysis of Algorithms.',
        },
        {
            id: 'education-2',
            year: '2021',
            title: 'Matric',
            place: 'Mandisa Shiceka',
            description: 'Matriculated with a distinction average. The stream was Mathematics and Science',
        },
    ];

    return <SeparatedList ref={ref} infoClass="eduction-info" title="Education" list={educationList} />;
};

export default Education;
