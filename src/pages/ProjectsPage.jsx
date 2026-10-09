import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Our Projects | JS Constructions",
  "url": "https://www.jsconstructions22.in/projects",
  "description": "Browse JS Constructions' portfolio of completed and ongoing residential and commercial projects across Bengaluru.",
  "publisher": {
    "@type": "Organization",
    "name": "JS Constructions",
    "url": "https://www.jsconstructions22.in"
  }
};

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <SEO
        title="Our Projects | JS Constructions Bengaluru"
        description="Explore JS Constructions' portfolio of premium residential and commercial projects in Bengaluru — luxury villas, duplex homes, and commercial campuses."
        canonical="https://www.jsconstructions22.in/projects"
        schema={projectsSchema}
      />
      {/* Hero Banner */}
      <div className="page-hero">
        <div className="page-hero-overlay" style={{ backgroundImage: 'url(/assets/hero-premium.webp)' }}></div>
        <div className="container">
          <h1>Our <span>Projects</span></h1>
          <p>Showcasing our finest work across Bangalore</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="filter-bar">
            {['All', 'Residential', 'Commercial'].map(f => (
              <button 
                key={f} 
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="proj-grid">
            {filteredProjects.map((project) => (
              <div
                className="proj-card"
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="proj-card-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="proj-card-badges">
                    <span className="proj-code">{project.code}</span>
                    <span className="proj-sqft">{project.sqft}</span>
                  </div>
                  <div className="proj-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {project.location}
                  </div>
                </div>
                <div className="proj-card-body">
                  <h3 className="proj-title">{project.title}</h3>
                  <button className="proj-view-btn" onClick={(e) => { e.stopPropagation(); navigate(`/projects/${project.id}`); }}>
                    VIEW DETAILS →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        
        .filter-btn {
          padding: 0.6rem 1.5rem;
          border-radius: 30px;
          border: 2px solid var(--primary);
          background: transparent;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }
        
        .filter-btn:hover, .filter-btn.active {
          background: var(--primary);
          color: white;
        }

        .proj-grid {
          display:grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        .proj-card {
          background: var(--bg-soft);
          border-radius: 0px;
          border: 1px solid rgba(0,0,0,0.04);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .proj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          border-color: rgba(184,35,41,0.2);
        }

        .proj-card-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .proj-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .proj-card:hover .proj-card-image img {
          transform: scale(1.08);
        }

        .proj-card-badges {
          position: absolute;
          top: 0; left: 0; right: 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1rem;
        }

        .proj-code {
          background: rgba(12, 18, 43, 0.85);
          color: var(--accent);
          font-size: 0.75rem;
          font-weight: 400;
          padding: 0.3rem 0.7rem;
          border-radius: 0px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .proj-sqft {
          background: rgba(255,255,255,0.95);
          color: var(--primary);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.3rem 0.7rem;
          border-radius: 0px;
        }

        .proj-location {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(12, 18, 43, 0.95), transparent);
          color: #eee;
          font-size: 0.85rem;
          padding: 2rem 1rem 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .proj-card-body {
          padding: 1.2rem 1.5rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .proj-title {
          color: var(--primary);
          font-size: 1.25rem;
          margin: 0;
          font-weight: 400;
        }

        .proj-view-btn {
          background: transparent;
          color: var(--accent);
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 2px;
          padding: 0;
          white-space: nowrap;
        }

        .proj-view-btn:hover {
          color: var(--primary);
        }

        @media(max-width:768px) {
          .proj-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
