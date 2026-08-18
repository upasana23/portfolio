import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        
        {/* Main Profile Grid */}
        <div className="about-grid">
          
          {/* Left Description Column */}
          <div className="about-content">
            <h2 className="about-heading reveal">ABOUT ME</h2>
            
            <div className="about-bio reveal" style={{ transitionDelay: '50ms' }}>
              <h3 className="about-subtitle">Hi!</h3>
              <p className="about-text">
                I'm Upasana, a Computer Science Engineering student specializing in Artificial 
                Intelligence & Machine Learning. I enjoy turning ideas into working products — 
                from decentralized protocols and Web3 marketplaces to AI-powered detection 
                systems and student-focused platforms.
              </p>
              <p className="about-text">
                My interests sit at the intersection of AI/ML, blockchain, full-stack engineering 
                and emerging technologies. I especially enjoy hackathons and experimental 
                projects where I can take an idea from architecture to implementation.
              </p>
            </div>

            {/* Cyberpunk HUD Status Matrix */}
            <div className="cyber-hud-matrix reveal" style={{ transitionDelay: '100ms' }}>
              <div className="hud-matrix-header">
                <span className="hud-dot" />
                <span className="hud-title">// SYSTEM_STATUS_MATRIX</span>
                <span className="hud-tag">ONLINE</span>
              </div>
              
              <div className="hud-matrix-body">
                <div className="hud-row">
                  <span className="hud-label">&gt; OPS_MODE</span>
                  <span className="hud-value highlight glitch-text" data-text="BUILD // LEARN // ITERATE">BUILD // LEARN // ITERATE</span>
                </div>
                
                <div className="hud-row">
                  <span className="hud-label">&gt; ACTIVE_SYSTEMS</span>
                  <div className="hud-chips">
                    <span className="hud-chip">AI/ML</span>
                    <span className="hud-chip">Web3</span>
                    <span className="hud-chip">Blockchain</span>
                    <span className="hud-chip">Full-Stack</span>
                  </div>
                </div>

                <div className="hud-row">
                  <span className="hud-label">&gt; COORDINATES</span>
                  <span className="hud-value">KOLKATA, IND <span className="hud-sub-coord">// 22.57°N 88.36°E</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Giant Cutout Visual Column */}
          <div className="about-visual">
            <div className="about-avatar-wrapper">
              <div className="about-avatar">
                <img 
                  src="/image-removebg-preview.png" 
                  alt="Upasana Majumder Portrait" 
                  className="about-avatar-img" 
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
