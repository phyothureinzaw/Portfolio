import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useAnimations';
import {
  SiReact,
  SiVuedotjs,
  SiVite,
  SiTailwindcss,
  SiShadcnui,
  SiRedux,
  SiReactquery,
  SiDotnet,
  SiPostman,
  SiGit,
  SiGithub,
  SiJavascript,
  SiHtml5,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { FaCss3Alt } from 'react-icons/fa';
import { MdOutlineStorage } from 'react-icons/md';
import { VscVscode } from 'react-icons/vsc';
import './Skills.css';

const row1 = [
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#42b883' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Vite', icon: SiVite, color: '#a855f7' },
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
];

const row2 = [
  { name: 'Redux Toolkit', icon: SiRedux, color: '#764abc' },
  { name: 'TanStack Query', icon: SiReactquery, color: '#ff4154' },
  { name: 'ASP.NET Core', icon: SiDotnet, color: '#512bd4' },
  { name: 'SQL Server', icon: MdOutlineStorage, color: '#cc2927' },
  { name: 'shadcn/ui', icon: SiShadcnui, color: 'var(--text-primary)' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
];

const row3 = [
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'GitHub', icon: SiGithub, color: 'var(--text-primary)' },
  { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
  { name: 'Visual Studio', icon: DiVisualstudio, color: '#5c2d91' },
  { name: 'VS Code', icon: VscVscode, color: '#22a6f2' },
];

const marqueeRows = [
  { skills: row1, direction: 'forward', speed: 'normal' },
  { skills: row2, direction: 'reverse', speed: 'slow' },
  { skills: row3, direction: 'forward', speed: 'fast' },
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
            Technologies and tools I use to design, build, and ship web products
          </p>
        </motion.div>

        <motion.div
          className="skills__marquee-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Floating orbs for depth */}
          <div className="skills__orb skills__orb--1" />
          <div className="skills__orb skills__orb--2" />
          <div className="skills__orb skills__orb--3" />

          {marqueeRows.map((row, rowIndex) => (
            <motion.div
              key={row.direction + rowIndex}
              className={`skills__marquee skills__marquee--${row.direction} skills__marquee--${row.speed}`}
              initial={{ opacity: 0, x: row.direction === 'forward' ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + rowIndex * 0.15 }}
            >
              <div className="skills__marquee-track">
                {[...row.skills, ...row.skills, ...row.skills].map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      className="skills__logo-card"
                      key={`${rowIndex}-${skill.name}-${index}`}
                      style={{ '--skill-color': skill.color }}
                    >
                      <span className="skills__logo-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span className="skills__logo-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
