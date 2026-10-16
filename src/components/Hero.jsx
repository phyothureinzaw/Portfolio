import { profile } from '../data.js';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow fade-up" style={{ '--delay': '0ms' }}>Hello, I'm</p>
          <h1 className="fade-up" style={{ '--delay': '100ms' }}>{profile.name}</h1>
          <h2 className="fade-up" style={{ '--delay': '200ms' }}>{profile.role}</h2>
          <p className="hero__tagline fade-up" style={{ '--delay': '300ms' }}>{profile.tagline}</p>
          <div className="hero__actions fade-up" style={{ '--delay': '400ms' }}>
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--outline">
              Contact Me
            </a>
          </div>
          <div className="socials fade-up" style={{ '--delay': '500ms' }}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
        <div className="hero__photo fade-in" style={{ '--delay': '200ms' }}>
          <img src={profile.photo} alt={profile.name} />
        </div>
      </div>
    </section>
  );
}
