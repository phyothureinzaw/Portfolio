import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/useAnimations';
import { FiExternalLink, FiGithub, FiLayers } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Jarviz — HR Management Platform',
    description:
      'Customer-facing SPA for enterprise HR operations. Features include employee attendance tracking, leave management, petty cash requests, overtime recording, payroll processing, and multi-tier approval workflows.',
    stack: ['Vue.js', 'Vite', 'Tailwind CSS', 'ASP.NET Core', 'MSSQL'],
    category: 'fullstack',
    color: '#6c63ff',
    role: 'Frontend architecture, state management, and API integration',
  },
  {
    id: 2,
    title: 'Retail Management System',
    description:
      'End-to-end retail solution covering product catalogue management, point-of-sale, inventory tracking, supplier management, and reporting dashboards.',
    stack: ['React', 'Tailwind CSS', 'Redux Toolkit', 'shadcn/ui', 'TanStack Query', 'ASP.NET Core', 'MSSQL'],
    category: 'fullstack',
    color: '#00d4aa',
    role: 'Full-stack implementation from database schema design to UI',
  },
  {
    id: 3,
    title: 'ATM Management System',
    description:
      'Backend system for managing ATM operations including transaction processing, withdraw, and deposit.',
    stack: ['C# ASP.NET Core', 'MSSQL'],
    category: 'backend',
    color: '#f59e0b',
    role: 'Backend architecture and transaction logic',
  },
  {
    id: 4,
    title: 'Employee Management System',
    description:
      'Frontend SPA enabling HR administrators to manage employee profiles, departmental structures, role assignments, and employment records.',
    stack: ['React', 'Tailwind CSS', 'Redux Toolkit', 'TanStack Query'],
    category: 'frontend',
    color: '#ec4899',
    role: 'Complete frontend development',
  },
];

const filters = ['all', 'fullstack', 'frontend', 'backend'];

function Projects() {
  const [ref, isInView] = useInView();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Key projects I've built and contributed to
          </p>
        </motion.div>

        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`projects__filter ${activeFilter === filter ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="projects__grid">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="projects__card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className="projects__card-accent"
                  style={{ background: project.color }}
                />
                <div className="projects__card-header">
                  <FiLayers style={{ color: project.color }} size={24} />
                  <span
                    className="projects__card-category"
                    style={{ background: `${project.color}20`, color: project.color }}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>

                <div className="projects__card-role">
                  <span className="projects__card-role-label">My Role:</span>
                  <span>{project.role}</span>
                </div>

                <div className="projects__card-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="projects__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Projects;
