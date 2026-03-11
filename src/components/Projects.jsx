import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Luxury Modern Villa",
      category: "Residential",
      image: "/assets/project-1-v2.png"
    },
    {
      title: "Smart Tech Skyscraper",
      category: "Commercial",
      image: "/assets/project-2-v2.png"
    },
    {
      title: "Grand Suspension Bridge",
      category: "Infrastructure",
      image: "/assets/project-3-v2.png"
    }
  ];

  return (
    <section className="section-padding" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured <span className="highlight-dark">Projects</span></h2>
          <p className="section-subtitle">A showcase of our commitment to quality and architectural brilliance.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-name">{project.title}</h3>
                  <button className="btn-view">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .project-item {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          aspect-ratio: 4/3;
        }

        .project-image {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-item:hover img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(10, 29, 55, 0.9), transparent);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          opacity: 0;
          transition: var(--transition);
        }

        .project-item:hover .project-overlay {
          opacity: 1;
        }

        .project-category {
          color: var(--accent);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
        }

        .project-name {
          color: white;
          font-size: 1.8rem;
          margin: 0.5rem 0 1.5rem;
        }

        .btn-view {
          align-self: flex-start;
          background: transparent;
          color: white;
          border: 1px solid white;
          padding: 0.5rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .btn-view:hover {
          background: white;
          color: var(--primary);
        }
      `}</style>
    </section>
  );
};

export default Projects;
