import './SkillsList.css';

const SkillsList = ({ skills }) => {
    return (
        <ul className="skills-list">
            {skills.map((skill) => (
                <li key={skill.id}>
                    <section className="skills-list__skill-marker">
                        <div></div>
                    </section>
                    <section className="skills-list__skill-details">
                        <p className="skills-list__skill-year">{skill.year}</p>
                        <h3>{skill.title}</h3>
                        <p>{skill.place}</p>
                        <p className="skills-list__skill-description">
                            {skill.description}
                        </p>
                    </section>
                </li>
            ))}
        </ul>
    );
};

export default SkillsList;
