import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { toggleTheme } from '../../store/themeSlice';
import { FiSun, FiMoon, FiMenu, FiX, FiHome, FiUser, FiCode, FiLayers, FiBriefcase, FiMail } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/', sectionId: 'home', icon: <FiHome /> },
  { label: 'About', path: '/about', sectionId: 'about', icon: <FiUser /> },
  { label: 'Skills', path: '/skills', sectionId: 'skills', icon: <FiCode /> },
  { label: 'Projects', path: '/projects', sectionId: 'projects', icon: <FiLayers /> },
  { label: 'Experience', path: '/experience', sectionId: 'experience', icon: <FiBriefcase /> },
  { label: 'Contact', path: '/contact', sectionId: 'contact', icon: <FiMail /> },
];

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useSelector((state) => state.theme.mode);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // On homepage, track scroll position for active section
    if (location.pathname !== '/') {
      const match = navLinks.find((l) => l.path === location.pathname);
      if (match) setActiveSection(match.sectionId);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.sectionId);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (link) => {
    setMobileOpen(false);

    // If on homepage, scroll to section
    if (location.pathname === '/') {
      const el = document.getElementById(link.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Navigate to the route
    navigate(link.path);

    // If navigating to home, scroll to section after navigation
    if (link.path === '/') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <a href="/" className="navbar__logo" onClick={(e) => { e.preventDefault(); handleNavClick(navLinks[0]); }}>
          <span className="navbar__logo-bracket">&lt;</span>
          PTRZ
          <span className="navbar__logo-bracket"> /&gt;</span>
        </a>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {mobileOpen && (
            <li className="navbar__mobile-header">
              <span className="navbar__mobile-title">Navigation</span>
              <span className="navbar__mobile-line" />
            </li>
          )}
          {navLinks.map((link, index) => (
            <li key={link.path} style={{ '--item-index': index }}>
              <a
                href={link.path}
                className={`navbar__link ${activeSection === link.sectionId ? 'navbar__link--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link);
                }}
              >
                <span className="navbar__link-icon">{link.icon}</span>
                <span className="navbar__link-text">{link.label}</span>
                {activeSection === link.sectionId && <span className="navbar__link-dot" />}
              </a>
            </li>
          ))}
          {mobileOpen && (
            <li className="navbar__mobile-footer">
              <div className="navbar__mobile-decoration">
                <span />
                <span />
                <span />
              </div>
              <p className="navbar__mobile-credit">&lt;PTRZ /&gt;</p>
            </li>
          )}
        </ul>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && <div className="navbar__overlay" onClick={() => setMobileOpen(false)} />}
    </nav>
  );
}

export default Navbar;
