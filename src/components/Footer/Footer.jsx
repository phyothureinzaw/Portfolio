import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              PTRZ
              <span className="footer__logo-bracket"> /&gt;</span>
            </a>
            <p className="footer__tagline">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div className="footer__social">
            <h4 className="footer__links-title">Connect</h4>
            <div className="footer__social-links">
              <a
                href="https://github.com/phyothureinzaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/phyo-thu-rein-zaw-1b5573324"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:phyothureinzaw77@gmail.com" aria-label="Email">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>
            &copy; {year} Phyo Thu Rein Zaw. Made with{' '}
            <FiHeart className="footer__heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
