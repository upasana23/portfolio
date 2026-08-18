import { PERSONAL } from '../data/portfolio';
import { GitHubIcon } from './Navbar';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        
        {/* Large Widescreen Editorial Header */}
        <div className="hero-title-group">
          <div className="hero-title-top">
            BUILDING THE FUTURE
          </div>
          
          <div className="hero-title-split">
            <div className="title-left-desc">
              CREATING PRODUCTS THAT FEEL AS INTENTIONAL AS THEY FUNCTION.
            </div>
            
            <div className="hero-title-bottom">
              ONE PROTOCOL AT A TIME.
            </div>
          </div>
        </div>

        {/* Center Focal Visual Area */}
        <div className="hero-visual-frame">
          <img 
            src="/images/hero-illustration.png" 
            alt="Upasana Majumder Tech Space Illustration" 
            className="hero-large-img"
          />
          
          {/* Floating labels sitting on/around the frame */}
          <span className="hero-floating-label hfl-1">AI/ML × MLOPs</span>
          <span className="hero-floating-label hfl-2">WEB3 DEVELOPER</span>
          <span className="hero-floating-label hfl-3">FULL-STACK INFRA</span>
        </div>

        {/* Hero Details Block */}
        <div className="hero-info-grid">
          <div className="info-grid-col col-left">
            <h2 className="hero-dev-title">
              {PERSONAL.name}
            </h2>
            <p className="hero-dev-spec">
              BUILDER • ENGINEER • EXPERIMENTER
            </p>
          </div>
          
          <div className="info-grid-col col-center">
            <p className="hero-dev-bio">
              Computer Science Engineering student building decentralized systems,
              AI-powered platforms and real-world digital applications. Focused on 
              taking protocols from architecture to production.
            </p>
          </div>
          
          <div className="info-grid-col col-right">
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
                Explore Projects ✦
              </button>
              <a 
                href={PERSONAL.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
              >
                <GitHubIcon size={14} /> GitHub Profile
              </a>
            </div>
          </div>
        </div>

        {/* Ticker Tape Separator Ribbon */}
        <div className="ticker-tape">
          <div className="ticker-text">
            ✦ AI/ML PROTOCOLS ✦ WEB3 INFRASTRUCTURE ✦ FULL-STACK DEVELOPMENT ✦ HACKATHON BUILDER ✦
            ✦ AI/ML PROTOCOLS ✦ WEB3 INFRASTRUCTURE ✦ FULL-STACK DEVELOPMENT ✦ HACKATHON BUILDER ✦
          </div>
        </div>

      </div>
    </section>
  );
}
