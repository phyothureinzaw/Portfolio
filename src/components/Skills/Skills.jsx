import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useAnimations';
import {
  FiCode, FiDatabase, FiServer, FiTool, FiUsers, FiLayout,
} from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FiLayout />,
    color: '#6c63ff',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'Vite', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'shadcn/ui', level: 80 },
    ],
  },
  {
    title: 'State & Data',
    icon: <FiCode />,
    color: '#00d4aa',
    skills: [
      { name: 'Redux Toolkit', level: 88 },
      { name: 'TanStack Query', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: <FiServer />,
    color: '#f59e0b',
    skills: [
      { name: 'C# ASP.NET Core', level: 80 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Database',
    icon: <FiDatabase />,
    color: '#ef4444',
    skills: [
      { name: 'Microsoft SQL Server', level: 80 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: <FiTool />,
    color: '#8b5cf6',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'Visual Studio', level: 85 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: <FiUsers />,
    color: '#ec4899',
    skills: [
      { name: 'Problem-solving', level: 90 },
      { name: 'Team Collaboration', level: 88 },
    ],
  },
];

function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skills__card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div
                className="skills__card-icon"
                style={{ background: `${category.color}20`, color: category.color }}
              >
                {category.icon}
              </div>
              <h3 className="skills__card-title">{category.title}</h3>
              <div className="skills__list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skills__item">
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <motion.div
                        className="skills__bar-fill"
                        style={{ background: category.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
