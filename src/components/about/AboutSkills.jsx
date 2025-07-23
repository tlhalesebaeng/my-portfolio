import './AboutSkills.css';

const AboutSkills = ({ skills }) => {
    return (
        <ul className="about-skills">
            {skills.map((skill) => (
                <li key={skill.id}>
                    <img src={skill.imgSrc} />
                    <p>{skill.name}</p>
                </li>
            ))}
        </ul>
    );
};

export default AboutSkills;
