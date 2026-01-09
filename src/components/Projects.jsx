import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'A web application built with React and Node.js.',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'An e-commerce site using MERN stack.',
    link: '#',
  },
  {
    title: 'Project 3',
    description: 'A mobile app developed with React Native.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;