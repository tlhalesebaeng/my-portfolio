import './ProjectItem.css';

const ProjectItem = ({ project }) => {
    const codeLink = project.links[0];
    const siteLink = project.links[1];
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
                <a href={codeLink.href} target="_blank">
                    See Code
                </a>
                <a href={siteLink.href}>Visit Site</a>
            </section>
        </li>
    );
};

export default ProjectItem;
