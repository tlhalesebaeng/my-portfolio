import './HeaderSkill.css';

const HeaderSkill = ({ skill }) => {
    return (
        <li className="header-skill">
            <img src={skill.icon} />
            <p>{skill.name}</p>
        </li>
    );
};

export default HeaderSkill;
