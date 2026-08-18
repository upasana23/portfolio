import { useEffect, useRef } from 'react';
import { PERSONAL } from '../data/portfolio';
import { GitHubIcon } from './Navbar';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => ref.current?.querySelectorAll('.reveal').forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <section className="contact section" id="contact" ref={ref}>
        {/* Background visual JPEG bit placed as a deep-space glowing background graphic */}
        <div className="contact-glowing-art-wrap float-slow">
          <img src="/f0eccdfe8f9bcafa3022b5d792b4d542.jpg" alt="Artistic background visual" className="contact-bg-art" />
          <div className="contact-art-mask" />
        </div>

        <div className="container">
          <div className="contact-inner">
            <p className="contact-annotation reveal">INITIATE CONTACT_PROTOCOL</p>

            <h2 className="contact-heading reveal" style={{ transitionDelay: '100ms' }}>
              Let's Build<br />
              <span className="contact-heading-gradient">Something Together</span>
            </h2>

            <p className="contact-sub reveal" style={{ transitionDelay: '200ms' }}>
              Got a project that needs shipping? A protocol that needs designing?
              Or just want to jam on Web3, AI, or systems architecture — 
              I'm down.
            </p>

            <div className="contact-cards reveal" style={{ transitionDelay: '300ms' }}>
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon">
                  <GitHubIcon size={20} />
                </div>
                <div className="contact-card-info">
                  <div className="contact-card-label">GitHub</div>
                  <div className="contact-card-value">@upasana23</div>
                </div>
              </a>

              <a href={`mailto:${PERSONAL.email}`} className="contact-card">
                <div className="contact-card-icon">📧</div>
                <div className="contact-card-info">
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">{PERSONAL.email}</div>
                </div>
              </a>

              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <div className="contact-card-label">LinkedIn</div>
                  <div className="contact-card-value">linkedin.com/in/upasana-majumder-5a9264287</div>
                </div>
              </a>
            </div>

            <div className="contact-cta reveal" style={{ transitionDelay: '400ms' }}>
              <a href={`mailto:${PERSONAL.email}`} className="btn btn-primary">
                ✦ Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              UPASANA <span>MAJUMDER</span>
            </div>
            <div className="footer-note">
              Built with <span className="footer-highlight"> caffeine & late nights</span>
            </div>
            <div className="footer-links">
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={`mailto:${PERSONAL.email}`}>Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
