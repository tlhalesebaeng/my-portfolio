import Marker from '../../utils/Marker.jsx';
import ProjectItem from './ProjectItem.jsx';
import './Projects.css';

const Projects = ({ ref }) => {
  const projects = [
    {
      id: 'project-1',
      name: 'Tutor Management System',
      desc: 'Currently building a platform to streamline tutor allocatons for our school',
      techStack: [
        { id: 'project-1-stack-1', name: 'Firebase' },
        { id: 'project-1-stack-2', name: 'Node.js' },
        { id: 'project-1-stack-3', name: 'Express' },
        { id: 'project-2-stack-4', name: 'React' },
        { id: 'project-2-stack-5', name: 'PostgreSQL' },
      ],
      link: 'https://github.com/tlhalesebaeng',
    },
    {
      id: 'project-2',
      name: 'Test Maker',
      desc: 'A platform to create tests and invite others to take them in a fun and interactive way',
      techStack: [
        { id: 'project-1-stack-1', name: 'Spring Boot' },
        { id: 'project-2-stack-2', name: 'React' },
        { id: 'project-1-stack-3', name: 'Hibernate' },
        { id: 'project-1-stack-4', name: 'PostgreSQL' },
      ],
      link: 'https://github.com/tlhalesebaeng/testmaker-frontend',
    },

    {
      id: 'project-3',
      name: 'SA Learnerships and Skills Development Portal',
      desc: 'Built a platform that connects work-seekers with SETA-accredited learnerships',
      techStack: [
        { id: 'project-2-stack-1', name: 'Node.js' },
        { id: 'project-2-stack-2', name: 'Express' },
        { id: 'project-2-stack-3', name: 'React' },
        { id: 'project-2-stack-4', name: 'MongoDB' },
      ],
      link: 'https://github.com/The-Geeks-Wits/sa-learnerships',
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
