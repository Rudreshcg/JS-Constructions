import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Construction Projects in Bangalore & Karnataka | JS Constructions",
  "url": "https://www.jsconstructions22.in/projects",
  "description": "Browse JS Constructions' portfolio of completed and ongoing residential villas, duplex homes, hospitals, and commercial venues across Bengaluru and Karnataka districts.",
  "publisher": {
    "@type": "Organization",
    "name": "JS Constructions",
    "url": "https://www.jsconstructions22.in"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": projects.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://www.jsconstructions22.in/projects/${p.id}`,
      "name": p.title
    }))
  }
};

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');

  const filteredProjects = projects.filter(p => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const matchesLocation = locationFilter === 'All' || 
      (p.location && p.location.toLowerCase().includes(locationFilter.toLowerCase())) ||
      (p.district && p.district.toLowerCase().includes(locationFilter.toLowerCase()));
    return matchesCategory && matchesLocation;
  });

  return (
    <div className="projects-page">
      <SEO
        title="Construction Projects in Bangalore & Karnataka | JS Constructions"
        description="Explore JS Constructions' portfolio of completed and ongoing residential duplexes, luxury villas, hospitals, and commercial chowtries across Bengaluru and Karnataka."
        canonical="https://www.jsconstructions22.in/projects"
        keywords="construction projects Bangalore, building projects Karnataka, villa construction portfolio Bengaluru, duplex house projects Kunigal, hospital construction Channapatna, civil contractors Karnataka, JS Constructions"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Projects', item: '/projects' }
        ]}
        schema={projectsSchema}
      />
      {/* Hero Banner */}
      <div className="page-hero">
        <div className="page-hero-overlay" style={{ backgroundImage: 'url(/assets/hero-premium.webp)' }}></div>
        <div className="container">
          <h1>Our <span>Projects</span></h1>
          <p>Showcasing Our Finest Architectural Builds Across Bangalore &amp; Karnataka</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="filter-wrapper">
            <div className="filter-group">
              <span className="filter-label">Category:</span>
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
            </div>

            <div className="filter-group">
              <span className="filter-label">Karnataka Region:</span>
              <div className="filter-bar">
                {['All', 'Tumakuru', 'Ramanagara', 'Mandya', 'Belagavi'].map(loc => (
                  <button
                    key={loc}
                    className={`filter-btn filter-btn-sub ${locationFilter === loc ? 'active' : ''}`}
                    onClick={() => setLocationFilter(loc)}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="proj-grid">
            {filteredProjects.map((project) => (
              <div
                className="proj-card"
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="proj-card-image">
                  <img src={project.image} alt={`${project.title} - ${project.category} construction in ${project.fullLocation || project.location} by JS Constructions`} loading="lazy" />
                  <div className="proj-card-badges">
                    <span className="proj-code">{project.code}</span>
                    <span className="proj-sqft">{project.sqft}</span>
                  </div>
                  <div className="proj-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {project.fullLocation || `${project.location}, Karnataka`}
                  </div>
                </div>
                <div className="proj-card-body">
                  <div>
                    <span className="proj-category-tag">{project.category} · {project.district || 'Karnataka'}</span>
                    <h3 className="proj-title">{project.title}</h3>
                  </div>
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
        .filter-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
          align-items: center;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .filter-label {
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
          color: var(--primary);
        }

        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 0.5rem 1.4rem;
          border-radius: 30px;
          border: 1.5px solid var(--primary);
          background: transparent;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.88rem;
          transition: all 0.3s ease;
        }
        
        .filter-btn:hover, .filter-btn.active {
          background: var(--primary);
          color: white;
        }

        .filter-btn-sub {
          border-color: rgba(12, 18, 43, 0.25);
          font-size: 0.82rem;
          padding: 0.4rem 1.1rem;
        }

        .filter-btn-sub.active {
          background: var(--accent);
          border-color: var(--accent);
          color: white;
        }

        .proj-category-tag {
          display: block;
          font-size: 0.75rem;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          margin-bottom: 0.3rem;
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
          .filter-wrapper { margin-bottom: 2rem; gap: 1rem; }
          .filter-label { font-size: 0.75rem; }
          .filter-btn { font-size: 0.8rem; padding: 0.4rem 1rem; }
          .proj-card-body {
            padding: 1rem 1.2rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.6rem;
          }
          .proj-title { font-size: 1.15rem; }
          .proj-view-btn { align-self: flex-start; font-size: 0.78rem; letter-spacing: 1px; }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
