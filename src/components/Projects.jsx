import { useState, useRef } from 'react';
import { PROJECTS_DATA } from '../data/portfolio';
import { GitHubIcon } from './Navbar';
import './Projects.css';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const detailsPanelRef = useRef(null);

  const activeProject = PROJECTS_DATA[activeIndex] || PROJECTS_DATA[0];

  const handleSelectProject = (idx) => {
    setActiveIndex(idx);
    
    // If user is on a mobile device or tablet viewport, scroll to details panel smoothly
    if (window.innerWidth <= 1024) {
      setTimeout(() => {
        detailsPanelRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 80);
    }
  };

  return (
    <section className="projects section" id="projects">
      {/* Visual background stamp */}
      <div className="projects-bg-art float-slow">
        <img src="/392cf408ba0887f854a028a252428fcb.jpg" alt="Artistic background accent" />
      </div>

      <div className="container-wide">
        
        {/* Title Group */}
        <div className="projects-header-group">
          <div className="projects-header-left">
            <span className="projects-handwritten-label">selected work</span>
            <h2 className="projects-main-title">SELECTED WORK</h2>
          </div>
          <div className="projects-stats-badge">
            UPASANA MAJUMDER × {PROJECTS_DATA.length} PROTOCOLS ACTIVE
          </div>
        </div>

        {/* Asymmetric Widescreen Split Layout */}
        <div className="projects-split-layout">
          
          {/* Left Column: Interactive Widescreen Row List */}
          <div className="projects-rows-column">
            <div className="projects-table-header">
              <span className="th-col th-num">NO.</span>
              <span className="th-col th-name">PROJECT / REPOSITORY</span>
              <span className="th-col th-category">SPECIALIZATION</span>
              <span className="th-col th-action">STATUS</span>
            </div>

            <div className="projects-table-body">
              {PROJECTS_DATA.map((project, idx) => {
                const num = String(idx + 1).padStart(2, '0');
                const isSelected = activeIndex === idx;
                const isHovered = hoveredIndex === idx;
                
                return (
                  <div
                    key={project.id}
                    className={`project-row-item ${isSelected ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => {
                      setHoveredIndex(idx);
                      // Don't auto-scroll details on hover to avoid jumping during mouse moves, only on active click
                    }}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleSelectProject(idx)}
                  >
                    <span className="td-col td-num">{num}</span>
                    <span className="td-col td-name">
                      {project.name}
                      <span className="td-tagline">{project.tagline}</span>
                    </span>
                    <span className="td-col td-category">
                      {project.categoryLabel}
                    </span>
                    <span className="td-col td-action">
                      {project.github ? '✓ REPO ONLINE' : '✦ COMING SOON'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Detail Panel (Studio Style) */}
          <div 
            className="projects-details-panel" 
            ref={detailsPanelRef}
            style={{ scrollMarginTop: '100px' }} // Spacing for header navigation
          >
            <div className="panel-inner">
              <div className="panel-category-badge">
                {activeProject.categoryLabel}
              </div>

              <h3 className="panel-title">{activeProject.name}</h3>
              <p className="panel-description">{activeProject.description}</p>

              {/* Dynamic Problem / Solution Block with high contrast grids */}
              <div className="panel-narrative-grid">
                <div className="narrative-box box-problem">
                  <div className="box-label label-problem">THE CHALLENGE</div>
                  <p className="box-text">{activeProject.problem}</p>
                </div>
                
                <div className="narrative-box box-solution">
                  <div className="box-label label-solution">THE PROPOSED SYSTEM</div>
                  <p className="box-text">{activeProject.solution}</p>
                </div>
              </div>

              {/* Feature Tags list */}
              <div className="panel-features-block">
                <div className="block-title">SYSTEM PROTOCOLS</div>
                <div className="features-inline-list">
                  {activeProject.features.map(f => (
                    <span key={f} className="inline-feature-pill">✦ {f}</span>
                  ))}
                </div>
              </div>

              {/* Tech Stack tags */}
              <div className="panel-tech-block">
                <div className="block-title">INFRASTRUCTURE STACK</div>
                <div className="tech-tag-row">
                  {activeProject.tech.map(t => (
                    <span key={t} className="tech-tag-pill">{t}</span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="panel-actions">
                {activeProject.live && (
                  <a 
                    href={activeProject.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    View Live Site 🌐
                  </a>
                )}
                {activeProject.github && (
                  <a 
                    href={activeProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                  >
                    <GitHubIcon size={14} /> Repository Link
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Another visual JPEG bit placed cleanly as a screen break card */}
      <div className="projects-bottom-break-card">
        <div className="break-card-inner">
          <img src="/29c5fbe2bbf5e3b87b67bf6d4317f2ae.jpg" alt="Artistic section break" />
          <div className="break-card-overlay">
            <div className="break-label">IDEATION MATRIX</div>
            <div className="break-text">TURNING COMPLEXITY INTO CLARITY</div>
          </div>
        </div>
      </div>
    </section>
  );
}
