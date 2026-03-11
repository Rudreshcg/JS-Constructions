import React from 'react';
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
        <div className="page-hero-overlay" style={{ backgroundImage: 'url(/assets/hero-bg-v2.png)' }}></div>
        <div className="container">
          <h1>Our <span>Projects</span></h1>
          <p>Showcasing our finest work across Bangalore</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="proj-grid">
            {projects.map((project) => (
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
        .proj-grid {
          display:grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        .proj-card {
          background: #0A1D37;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .proj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
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
          background: rgba(10,29,55,0.85);
          color: #ee7723;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.3rem 0.7rem;
          border-radius: 4px;
          letter-spacing: 1px;
        }

        .proj-sqft {
          background: rgba(255,255,255,0.95);
          color: #0A1D37;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.3rem 0.7rem;
          border-radius: 4px;
        }

        .proj-location {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(10,29,55,0.95), transparent);
          color: #ccc;
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
          color: white;
          font-size: 1.3rem;
          margin: 0;
        }

        .proj-view-btn {
          background: transparent;
          color: #ee7723;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 0;
          white-space: nowrap;
        }

        .proj-view-btn:hover {
          color: white;
        }

        @media(max-width:768px) {
          .proj-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
