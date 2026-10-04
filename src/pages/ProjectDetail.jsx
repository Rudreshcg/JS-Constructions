import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <button className="btn-primary" onClick={() => navigate('/projects')}>Back to Projects</button>
      </div>
    );
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "url": `https://www.jsconstructions22.in/projects/${project.id}`,
    "image": `https://www.jsconstructions22.in${project.image}`,
    "description": project.description,
    "creator": {
      "@type": "Organization",
      "name": "JS Constructions",
      "url": "https://www.jsconstructions22.in"
    },
    "locationCreated": {
      "@type": "Place",
      "name": project.location
    }
  };

  const others = projects.filter(p => p.id !== id).slice(0, 3);

  return (
    <div className="project-detail-page">
      <SEO
        title={`${project.title} | JS Constructions`}
        description={`${project.title} — ${project.category} project in ${project.location}. ${project.description?.slice(0, 120)}...`}
        canonical={`https://www.jsconstructions22.in/projects/${project.id}`}
        schema={projectSchema}
      />
      {/* Hero Image */}
      <div className="detail-hero" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="detail-hero-overlay"></div>
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/projects')}>← Back to Projects</button>
          <span className="detail-code">{project.code}</span>
          <h1>{project.title}</h1>
          <div className="detail-hero-meta">
            <span>📍 {project.location}</span>
            <span>📐 {project.sqft}</span>
            <span>📅 {project.year}</span>
            <span className={`status-badge ${project.status.toLowerCase()}`}>{project.status}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding">
        <div className="container">
          <div className="detail-grid">
            {/* Left */}
            <div className="detail-main">
              <h2>Project Overview</h2>
              <p>{project.description}</p>

              <h3 style={{ marginTop: '2.5rem' }}>Key Features</h3>
              <ul className="features-list">
                {project.features.map((f, i) => (
                  <li key={i}><span className="feature-tick">✓</span> {f}</li>
                ))}
              </ul>

              {project.images && project.images.length > 1 && (
                <div className="project-gallery">
                  <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Project Gallery</h3>
                  <div className="gallery-grid">
                    {project.images.map((img, idx) => (
                      <div className="gallery-item" key={idx}>
                        <img src={img} alt={`${project.title} - ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right */}
            <div className="detail-sidebar">
              <div className="info-card">
                <h4>Project Details</h4>
                <div className="info-row"><span>Category</span><strong>{project.category}</strong></div>
                <div className="info-row"><span>Location</span><strong>{project.location}</strong></div>
                <div className="info-row"><span>Area</span><strong>{project.sqft}</strong></div>
                <div className="info-row"><span>Year</span><strong>{project.year}</strong></div>
                <div className="info-row"><span>Client</span><strong>{project.client}</strong></div>
                <div className="info-row"><span>Status</span><strong style={{ color: '#27ae60' }}>{project.status}</strong></div>
              </div>
              <button className="btn-primary w-full" style={{ marginTop: '1.5rem' }} onClick={() => navigate('/contact')}>
                Enquire About This Project
              </button>
            </div>
          </div>

          {/* More Projects */}
          {others.length > 0 && (
            <div className="more-projects">
              <h2 style={{ marginBottom: '2rem' }}>More <span className="highlight-dark">Projects</span></h2>
              <div className="more-grid">
                {others.map(p => (
                  <div className="more-card" key={p.id} onClick={() => navigate(`/projects/${p.id}`)}>
                    <img src={p.image} alt={p.title} />
                    <div className="more-info">
                      <span>{p.code}</span>
                      <h4>{p.title}</h4>
                      <p>{p.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .detail-hero {
          height: 520px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding-bottom: 2rem;
          padding-top: 80px; /* push content below navbar */
          margin-top: 0; /* extend behind transparent navbar */
        }
        .detail-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(12, 18, 43, 0.95) 0%, rgba(12, 18, 43, 0.3) 50%, transparent 100%);
        }
        .detail-hero .container { position: relative; z-index: 1; }
        .back-btn { background: transparent; color: var(--accent); font-weight: 600; margin-bottom: 1rem; padding: 0; }
        .detail-code { display: block; color: var(--accent); font-weight: 700; letter-spacing: 2px; font-size: 0.9rem; margin-bottom: 0.5rem; }
        .detail-hero h1 { color: white; font-size: 3rem; margin-bottom: 1rem; }
        .detail-hero-meta { display: flex; gap: 1.5rem; flex-wrap: wrap; }
        .detail-hero-meta span { color: #ccc; font-size: 0.95rem; display: flex; align-items: center; gap: 0.3rem; }
        .status-badge { background: transparent; border: 1px solid white; color: white; padding: 0.2rem 1rem; font-size: 0.75rem !important; letter-spacing: 2px; text-transform: uppercase; font-weight: 400; }

        .detail-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; }
        .detail-main h2 { color: var(--primary); margin-bottom: 1rem; }
        .detail-main p { color: #555; line-height: 1.8; }
        .detail-main h3 { color: var(--primary); }
        .features-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-top: 1rem; }
        .features-list li { color: #444; display: flex; align-items: center; gap: 0.5rem; }
        .feature-tick { color: var(--accent); font-weight: 700; font-size: 1.1rem; }

        .project-gallery h3 { color: var(--primary); }
        .gallery-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .gallery-item img { width: 100%; height: 250px; object-fit: cover; border-radius: 4px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }

        .info-card { background: white; padding: 2.5rem; border: 1px solid rgba(0,0,0,0.04); border-radius: 0px; }
        .info-card h4 { color: var(--primary); font-size: 1.2rem; margin-bottom: 1.5rem; }
        .info-row { display: flex; justify-content: space-between; padding: 0.7rem 0; border-bottom: 1px solid #ddd; font-size: 0.95rem; }
        .info-row span { color: #666; }
        .info-row:last-child { border-bottom: none; }
        .w-full { width: 100%; text-align: center; justify-content: center; }
        
        .more-projects { margin-top: 5rem; }
        .more-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .more-card { border-radius: 0px; overflow: hidden; cursor: pointer; box-shadow: 0 5px 20px rgba(0,0,0,0.05); transition: transform 0.4s ease; background: var(--bg-soft); border: 1px solid rgba(0,0,0,0.04); }
        .more-card:hover { transform: translateY(-4px); }
        .more-card img { width: 100%; height: 160px; object-fit: cover; }
        .more-info { padding: 1rem 1.2rem; }
        .more-info span { color: var(--accent); font-size: 0.75rem; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; }
        .more-info h4 { color: var(--primary); font-size: 1rem; margin: 0.5rem 0; font-weight: 400; }
        .more-info p { color: var(--text-secondary); font-size: 0.85rem; }

        @media(max-width:768px) {
          .detail-grid { grid-template-columns: 1fr; }
          .more-grid { grid-template-columns: 1fr; }
          .features-list { grid-template-columns: 1fr; }
          .gallery-grid { grid-template-columns: 1fr; }
          .detail-hero h1 { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
