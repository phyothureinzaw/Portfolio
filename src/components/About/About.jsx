import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useAnimations';
import { FiUser, FiBriefcase, FiMail, FiMapPin, FiBookOpen } from 'react-icons/fi';
import companyLogo from '../../../image/company logo.jpg';
import './About.css';

const personalInfo = [
  { icon: <FiUser />, label: 'Name', value: 'Phyo Thu Rein Zaw' },
  { icon: <FiBriefcase />, label: 'Experience', value: '1+ Year' },
  { icon: <FiMapPin />, label: 'Current Work', value: 'Fusion Solution Co., Ltd' },
  { icon: <FiMail />, label: 'Email', value: 'phyothureinzaw77@gmail.com' },
  { icon: <FiBookOpen />, label: 'Education', value: 'BSc. Chemistry' },
];

function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Know Me Better</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about__description">
              Motivated and detail-oriented <strong>Frontend and Full-Stack Developer</strong> with
              over one year of professional experience designing and building enterprise-grade web
              applications. Proficient in modern JavaScript frameworks —{' '}
              <strong>React.js</strong> and <strong>Vue.js</strong> — alongside robust backend
              development using <strong>C# ASP.NET Core</strong> and <strong>MSSQL</strong>.
            </p>
            <p className="about__description">
              Demonstrates a strong aptitude for translating complex business requirements into
              scalable, maintainable solutions. Committed to continuous professional growth and
              delivering high-quality software in collaborative, fast-paced environments.
            </p>

            <div className="about__company">
              <img src={companyLogo} alt="Fusion Solution Co., Ltd" className="about__company-logo" />
              <div>
                <span className="about__company-label">Currently working at</span>
                <span className="about__company-name">Fusion Solution Co., Ltd</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__info"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {personalInfo.map((item, index) => (
              <motion.div
                key={item.label}
                className="about__info-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="about__info-icon">{item.icon}</div>
                <div className="about__info-content">
                  <span className="about__info-label">{item.label}</span>
                  <span className="about__info-value">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
