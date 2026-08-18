import { useEffect, useRef } from 'react';
import { PERSONAL, COURSEWORK } from '../data/portfolio';
import './Education.css';

export default function Education() {
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
    <section className="education section section-alt" id="education" ref={ref}>
      <div className="container">
        <div className="edu-grid">
          
          {/* Left Column — Academic Degree Details */}
          <div className="edu-left reveal">
            <h2 className="section-title">Education</h2>

            <div className="edu-card">
              <div className="edu-card-bar" />
              <h3 className="edu-institution">{PERSONAL.institution}</h3>
              <p className="edu-degree">{PERSONAL.degree}</p>
              <div className="edu-spec">
                Specialization: {PERSONAL.specialization}
              </div>
            </div>
          </div>

          {/* Right Column — Compact Score & Coursework */}
          <div className="edu-right">
            
            <div className="edu-cgpa-compact-card reveal" style={{ transitionDelay: '100ms' }}>
              <div className="cgpa-compact-header">
                <span className="cgpa-compact-label">ACADEMIC SCORE</span>
              </div>
              
              <div className="cgpa-compact-body">
                <div className="cgpa-compact-number">
                  {PERSONAL.cgpa}
                </div>
                <div className="cgpa-compact-info">
                  <div className="cgpa-metric-title">OVERALL CGPA</div>
                  <div className="cgpa-metric-sub">Trained across rigorous engineering coursework.</div>
                </div>
              </div>
            </div>

            <div className="edu-coursework reveal" style={{ transitionDelay: '200ms' }}>
              <div className="edu-coursework-title">Relevant Coursework</div>
              <div className="edu-tags">
                {COURSEWORK.map((c) => (
                  <span key={c} className="edu-tag">{c}</span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
