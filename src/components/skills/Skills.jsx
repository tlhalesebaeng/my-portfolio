import Marker from '../../utils/Marker.jsx';
import './Skills.css';
import SkillsList from './SkillsList.jsx';

const Skills = ({ ref }) => {
    const skills = [
        {
            id: 'skill-1',
            year: '2023 - Present',
            title: 'BSc Computer Science and Computational Applications',
            place: 'Wits University',
            description:
                'Expected to get this degree on the specified above year. Relavant course work includes Software Design',
        },
        {
            id: 'skill-2',
            year: '2021',
            title: 'Matric',
            place: 'Mandisa Shiceka',
            description:
                'Matriculated with a distinction average. The stream was Mathematics and Science',
        },
    ];

    return (
        <section className="skills" ref={ref}>
            <h2>Education</h2>
            <Marker />
            <section className="skills-info">
                <div className="skills-info__divider"></div>
                <SkillsList skills={skills} />
            </section>
        </section>
    );
};

export default Skills;
