import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const featured = projects.slice(0, 3);

  return (
    <section className="section-padding featured-section">
      <div className="container">
        <div className="fp-header">
          <div>
            <h2 className="section-title">Featured <span className="highlight-dark">Projects</span></h2>
            <p className="section-subtitle">A glimpse at our finest residential work across Bangalore.</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('/projects')}>View All Projects →</button>
        </div>

        <div className="fp-grid">
          {featured.map((project) => (
            <div className="fp-card" key={project.id} onClick={() => navigate(`/projects/${project.id}`)}>
              <div className="fp-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="fp-badges">
                  <span className="fp-code">{project.code}</span>
                  <span className="fp-sqft">{project.sqft}</span>
                </div>
                <div className="fp-location">📍 {project.location}</div>
              </div>
              <div className="fp-body">
                <h3>{project.title}</h3>
                <button className="fp-view" onClick={(e) => { e.stopPropagation(); navigate(`/projects/${project.id}`); }}>
                  VIEW DETAILS →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .featured-section { background: #F4F7FA; }

        .fp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .fp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.8rem;
        }

        .fp-card {
          background: #0A1D37;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }

        .fp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }

        .fp-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .fp-image img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .fp-card:hover .fp-image img { transform: scale(1.08); }

        .fp-badges {
          position: absolute;
          top: 0; left: 0; right: 0;
          display: flex;
          justify-content: space-between;
          padding: 0.8rem;
        }

        .fp-code {
          background: rgba(10,29,55,0.85);
          color: #ee7723;
          font-size: 0.75rem; font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 4px; letter-spacing: 1px;
        }

        .fp-sqft {
          background: rgba(255,255,255,0.95);
          color: #0A1D37;
          font-size: 0.8rem; font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
        }

        .fp-location {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(10,29,55,0.9), transparent);
          color: #ddd;
          font-size: 0.8rem;
          padding: 1.5rem 0.8rem 0.6rem;
        }

        .fp-body {
          padding: 1rem 1.2rem 1.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .fp-body h3 { color: white; font-size: 1.1rem; margin: 0; }

        .fp-view {
          background: transparent;
          color: #ee7723;
          font-size: 0.75rem; font-weight: 700;
          letter-spacing: 1px; padding: 0;
          white-space: nowrap;
        }

        .fp-view:hover { color: white; }

        @media(max-width: 992px) {
          .fp-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media(max-width: 600px) {
          .fp-grid { grid-template-columns: 1fr; }
          .fp-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;
