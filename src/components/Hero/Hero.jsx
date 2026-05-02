import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { useTypewriter } from '../../hooks/useAnimations';
import profileImg from '../../../image/profile.jpg';
import cvFile from '../../../cv/Untitled design.pdf';
import './Hero.css';

const roles = ['Frontend Developer', 'Full-Stack Developer', 'React.js Developer', 'Vue.js Developer'];

function Hero() {
  const typedText = useTypewriter(roles, 80, 1500);

  return (
    <section id="home" className="hero section">
      <div className="hero__container container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero__greeting">
            <span className="hero__wave">👋</span>
            <span>Hello, I'm</span>
          </div>

          <h1 className="hero__name">
            Phyo Thu
            <br />
            <span className="hero__name-highlight">Rein Zaw</span>
          </h1>

          <div className="hero__role">
            <span className="hero__role-text">{typedText}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__description">
            Motivated and detail-oriented developer with 1+ year of experience
            building enterprise-grade web applications with React.js, Vue.js,
            ASP.NET Core &amp; MSSQL.
          </p>

          <div className="hero__cta">
            <a href="#contact" className="hero__btn hero__btn--primary">
              <FiMail /> Get In Touch
            </a>
            <a href={cvFile} download="Phyo_Thu_Rein_Zaw_CV.pdf" className="hero__btn hero__btn--secondary">
              <FiDownload /> Download CV
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/phyothureinzaw"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/phyo-thu-rein-zaw-1b5573324"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:phyothureinzaw77@gmail.com"
              className="hero__social-link"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="hero__image-wrapper">
            <div className="hero__image-ring" />
            <div className="hero__image-ring hero__image-ring--2" />
            <img src={profileImg} alt="Phyo Thu Rein Zaw" className="hero__image" />
          </div>

          <div className="hero__floating-badge hero__floating-badge--1">
            <span className="hero__badge-icon">⚛️</span>
            <span>React.js</span>
          </div>
          <div className="hero__floating-badge hero__floating-badge--2">
            <span className="hero__badge-icon">🟢</span>
            <span>Vue.js</span>
          </div>
          <div className="hero__floating-badge hero__floating-badge--3">
            <span className="hero__badge-icon">🔷</span>
            <span>ASP.NET</span>
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}

export default Hero;
