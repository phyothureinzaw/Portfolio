import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useAnimations';
import { FiBriefcase, FiCheck } from 'react-icons/fi';
import companyLogo from '../../../image/company logo.jpg';
import './Experience.css';

const responsibilities = [
  'Developed and maintained a customer-facing HR Management / Employee Self-Service SPA (Jarviz) handling attendance, leave, petty cash, overtime, payroll, and approval workflows.',
  'Built and delivered a full-stack Retail Management System encompassing inventory, sales, and reporting modules using React, Tailwind CSS, Redux Toolkit, TanStack Query, ASP.NET Core, and MSSQL.',
  'Designed and implemented an ATM Management System backend with C# ASP.NET Core and MSSQL, covering transaction processing and reconciliation logic.',
  'Created an Employee Management System frontend with React, Tailwind CSS, Redux Toolkit, and TanStack Query.',
  'Collaborated closely with cross-functional teams including backend engineers, UI/UX designers, and QA to deliver features on schedule.',
  'Participated in code reviews, contributed to technical documentation, and adhered to Git-based version control workflows.',
];

function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">Work History</h2>
          <p className="section-subtitle">
            My professional journey and contributions
          </p>
        </motion.div>

        <motion.div
          className="experience__timeline"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="experience__line" />

          <div className="experience__card">
            <div className="experience__dot">
              <FiBriefcase />
            </div>

            <div className="experience__card-content">
              <div className="experience__card-header">
                <img src={companyLogo} alt="Fusion Solution" className="experience__company-logo" />
                <div>
                  <h3 className="experience__role">Junior Full-Stack Developer</h3>
                  <span className="experience__company">Fusion Solution Co., Ltd</span>
                </div>
                <span className="experience__period">Feb 2025 — Present</span>
              </div>

              <div className="experience__badge">
                <span className="experience__badge-dot" />
                Full-time
              </div>

              <ul className="experience__list">
                {responsibilities.map((item, index) => (
                  <motion.li
                    key={index}
                    className="experience__list-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <FiCheck className="experience__check" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
