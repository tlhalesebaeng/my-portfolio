import Marker from '../../utils/Marker.jsx';
import ProjectItem from './ProjectItem.jsx';
import './Projects.css';

const Projects = ({ ref }) => {
    const projects = [
        {
            id: 'project-1',
            name: 'Test Maker',
            desc: 'A platform to create tests and invite others to take them in a fun and interactive way.',
            techStack: [
                { id: 'project-1-stack-1', name: 'Java' },
                { id: 'project-1-stack-2', name: 'Spring Boot' },
                { id: 'project-1-stack-3', name: 'Hibernate' },
                { id: 'project-2-stack-4', name: 'Maven' },
                { id: 'project-1-stack-5', name: 'MySQL' },
                { id: 'project-2-stack-6', name: 'React.js' },
                { id: 'project-2-stack-7', name: 'CSS' },
            ],
            link: 'https://github.com/tlhalesebaeng/testmaker-frontend',
        },
        {
            id: 'project-2',
            name: 'League Oracle',
            desc: 'A full‑stack dynamic web application that enables users to seamlessly manage soccer leagues.',
            techStack: [
                { id: 'project-1-stack-1', name: 'Java' },
                { id: 'project-1-stack-2', name: 'Spring Boot' },
                { id: 'project-1-stack-3', name: 'Hibernate' },
                { id: 'project-2-stack-4', name: 'Maven' },
                { id: 'project-1-stack-5', name: 'MySQL' },
                { id: 'project-2-stack-6', name: 'React.js' },
                { id: 'project-2-stack-7', name: 'CSS' },
            ],
            link: 'https://github.com/tlhalesebaeng/league-oracle',
        },
        {
            id: 'project-3',
            name: 'Authentication Template',
            desc: 'A web authentication template with signup, login, and password recovery with JSON Web Tokens.',
            techStack: [
                { id: 'project-2-stack-1', name: 'Java' },
                { id: 'project-2-stack-2', name: 'Spring Boot' },
                { id: 'project-2-stack-3', name: 'Hibernate' },
                { id: 'project-2-stack-4', name: 'Maven' },
                { id: 'project-2-stack-5', name: 'MySQL' },
                { id: 'project-2-stack-6', name: 'React.js' },
                { id: 'project-2-stack-7', name: 'CSS' },
            ],
            link: 'https://github.com/tlhalesebaeng/auth-template-backend',
        },
    ];

    return (
        <section className="projects" ref={ref}>
            <h2>My Projects</h2>
            <Marker />
            <ul className="projects-list">
                {projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </ul>
        </section>
    );
};

export default Projects;
