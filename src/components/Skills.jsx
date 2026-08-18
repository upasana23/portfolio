import { useEffect, useRef } from 'react';
import { SKILLS_DATA } from '../data/portfolio';
import './Skills.css';

const COLOR_MAP = {
  blue:   { bg: 'var(--color-primary-soft)', text: 'var(--color-primary)', bar: 'var(--color-primary)', hover: 'var(--color-primary)' },
  cyan:   { bg: 'var(--color-cyan-soft)', text: 'var(--color-cyan)', bar: 'var(--color-cyan)', hover: 'var(--color-cyan)' },
  teal:   { bg: 'var(--color-teal-soft)', text: 'var(--color-teal)', bar: 'var(--color-teal)', hover: 'var(--color-teal)' },
  indigo: { bg: 'var(--color-indigo-soft)', text: 'var(--color-indigo)', bar: 'var(--color-indigo)', hover: 'var(--color-indigo)' },
  violet: { bg: 'var(--color-violet-soft)', text: 'var(--color-violet)', bar: 'var(--color-violet)', hover: 'var(--color-violet)' },
  slate:  { bg: 'var(--color-slate-soft)', text: 'var(--color-slate)', bar: 'var(--color-slate)', hover: 'var(--color-slate)' },
};

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          const tags = e.target.querySelectorAll('.skill-tag');
          tags.forEach((tag, i) => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(10px) scale(0.9)';
            setTimeout(() => {
              tag.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
              tag.style.opacity = '1';
              tag.style.transform = 'translateY(0) scale(1)';
            }, i * 30 + 50);
          });
        }
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => ref.current?.querySelectorAll('.reveal').forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="skills section" id="skills" ref={ref}>
      {/* Cyberpunk iPhone Glass Helper Orbs */}
      <div className="skills-orb skills-orb-1" />
      <div className="skills-orb skills-orb-2" />

      <div className="container">
        <div className="skills-header reveal">
          <span className="skills-label">what I work with</span>
          <h2 className="section-title">What I Build With</h2>
          <p className="skills-sub">
            Languages, frameworks, tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS_DATA.map((cat, idx) => {
            const colors = COLOR_MAP[cat.color] || COLOR_MAP.blue;
            return (
              <div
                key={cat.title}
                className="skill-card reveal"
                style={{ transitionDelay: `${idx * 50}ms`, '--card-bar': colors.bar }}
              >
                <div className="skill-card-header">
                  <div className="skill-card-icon" style={{ background: colors.bg, color: colors.text }}>
                    {cat.icon}
                  </div>
                  <div>
                    <div className="skill-card-title">{cat.title}</div>
                    <div className="skill-card-count">&gt; {cat.count} elements_</div>
                  </div>
                </div>
                
                <div className="skill-tags-wrap">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="skill-tag"
                      style={{
                        '--tag-bg': colors.bg,
                        '--tag-text': colors.text,
                        '--tag-hover': colors.hover,
                      }}
                    >
                      &lt;/&gt; {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
