import Marker from '../../utils/Marker.jsx';
import ProjectItem from './ProjectItem.jsx';
import './Projects.css';

const Projects = ({ ref }) => {
    const projects = [
        {
            id: 'project-1',
            name: 'League Oracle',
            desc: 'A full‑stack dynamic web application that enables users to seamlessly manage soccer leagues.',
            techStack: [
                { id: 'project-1-stack-1', name: 'Jenkins' },
                { id: 'project-1-stack-2', name: 'Spring Boot' },
                { id: 'project-1-stack-3', name: 'EC2' },
                { id: 'project-2-stack-4', name: 'CSS' },
                { id: 'project-1-stack-5', name: 'Java' },
                { id: 'project-1-stack-6', name: 'Docker' },
                { id: 'project-1-stack-7', name: 'MySQL' },
                { id: 'project-2-stack-8', name: 'React.js' },
            ],
            links: [
                {
                    id: 'project-1-link-1',
                    href: 'https://github.com/tlhalesebaeng/league-oracle',
                },
                { id: 'project-1-link-2', href: '#' },
            ],
        },
        {
            id: 'project-2',
            name: 'Authentication Template',
            desc: 'A web authentication template with signup, login, and password recovery with JSON Web Tokens.',
            techStack: [
                { id: 'project-2-stack-1', name: 'Java' },
                { id: 'project-2-stack-2', name: 'Spring Boot' },
                { id: 'project-2-stack-3', name: 'MySQL' },
                { id: 'project-2-stack-4', name: 'React.js' },
                { id: 'project-2-stack-5', name: 'CSS' },
            ],
            links: [
                {
                    id: 'project-2-link-1',
                    href: 'https://github.com/tlhalesebaeng/auth-template-backend',
                },
                { id: 'project-2-link-2', href: '#' },
            ],
        },
        {
            id: 'project-3',
            name: 'Simple TTS app',
            desc: 'React‑based web app that converts a given paragraph into speech using the Voice RSS API.',
            techStack: [
                { id: 'project-3-stack-1', name: 'React.js' },
                { id: 'project-3-stack-2', name: 'CSS' },
                { id: 'project-3-stack-3', name: 'External API' },
            ],
            links: [
                {
                    id: 'project-3-link-1',
                    href: 'https://github.com/tlhalesebaeng/text-to-speech-app',
                },
                { id: 'project-3-link-2', href: '#' },
            ],
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
