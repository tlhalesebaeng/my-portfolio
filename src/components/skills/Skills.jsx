import Marker from '../../utils/Marker.jsx';
import './Skills.css';
import SkillsList from './SkillsList.jsx';

const Skills = ({ ref }) => {
    const skills = [
        {
            id: 'skill-1',
            year: '2021',
            title: 'Matric',
            place: 'Mandisa Shiceka',
            description:
                'Matriculated with a distinction average. The stream was Mathematics and Science',
        },
        {
            id: 'skill-2',
            year: '2026-Expected',
            title: 'BSc Computer Science and Computational Applications',
            place: 'Wits University',
            description:
                'Expected to get this degree on the specified above year. Relavant course work includes Software Design',
        },
        {
            id: 'skill-3',
            year: '2025',
            title: 'Software Development',
            place: 'Udemy',
            description:
                'Completed 50+ hours of coursework covering Spring, Spring Boot, Spring Data JPA, Spring Security and Spring MVC',
        },
        {
            id: 'skill-4',
            year: '2025',
            title: 'Job Simulation',
            place: 'JP Morgan Chase',
            description:
                'Obtained a certificate of completion of job simulation covering software developement with Spring, Spring Boot and MySql',
        },
    ];

    return (
        <section className="skills" ref={ref}>
            <h2>Education & Certifications</h2>
            <Marker />
            <section className="skills-info">
                <div className="skills-info__divider"></div>
                <SkillsList skills={skills} />
            </section>
        </section>
    );
};

export default Skills;
