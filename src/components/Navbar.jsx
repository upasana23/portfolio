import { useState, useEffect } from 'react';
import { PERSONAL } from '../data/portfolio';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact'];
      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 200;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuItems = [
    { id: 'about', label: 'About', icon: '/profile.png' },
    { id: 'education', label: 'Education', icon: '/graduate-hat.png' },
    { id: 'skills', label: 'Skills', icon: '/skill-development.png' },
    { id: 'projects', label: 'Projects', icon: '/project-management.png' },
    { id: 'contact', label: 'Contact', icon: '/contact-mail.png' },
  ];

  return (
    <>
      {/* Top Header Navigation (Desktop view) */}
      <header className={`app-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="app-header-logo" onClick={() => scrollTo('hero')}>
          UPASANA<span>.</span>
        </div>
        
        <nav className="desktop-menu">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`desktop-menu-item ${activeSection === item.id || (item.id === 'about' && activeSection === 'education') ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-github-btn"
          >
            <GitHubIcon size={14} />
            GitHub
          </a>
          <a
            href={PERSONAL.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-resume-btn"
          >
            <ResumeIcon size={14} />
            Resume
          </a>
        </nav>
      </header>

      {/* Bottom Navigation Tab Bar (Mobile view only) */}
      <nav className="bottom-nav">
        <button 
          className={`tab-item ${activeSection === 'hero' ? 'active' : ''}`}
          onClick={() => scrollTo('hero')}
        >
          <img src="/home.png" alt="Home" className="tab-icon-img" />
          <span className="tab-label">Home</span>
        </button>

        {menuItems.map(item => (
          <button 
            key={item.id}
            className={`tab-item ${activeSection === item.id || (item.id === 'about' && activeSection === 'education') ? 'active' : ''}`}
            onClick={() => scrollTo(item.id)}
          >
            <img src={item.icon} alt={item.label} className="tab-icon-img" />
            <span className="tab-label">{item.label}</span>
          </button>
        ))}

        <a
          href={PERSONAL.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="tab-item resume-tab"
        >
          <img src="/resume.png" alt="Resume" className="tab-icon-img" />
          <span className="tab-label">Resume</span>
        </a>
      </nav>
    </>
  );
}

export function ResumeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

export function GitHubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
