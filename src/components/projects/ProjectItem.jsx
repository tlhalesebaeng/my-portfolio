import './ProjectItem.css';

const ProjectItem = ({ project }) => {
    return (
        <li className="project-item">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <ul>
                {project.techStack.map((stack) => (
                    <li key={stack.id}>{stack.name}</li>
                ))}
            </ul>
            <section>
                <a href={project.link} target="_blank">
                    Check Project Code
                </a>
            </section>
        </li>
    );
};

export default ProjectItem;
