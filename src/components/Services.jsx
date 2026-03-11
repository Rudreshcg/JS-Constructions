import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom luxury homes and high-end residential complexes built with precision.",
      icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    },
    {
      title: "Commercial Projects",
      description: "State-of-the-art office buildings and retail spaces designed for performance.",
      icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16M12 7h.01M12 11h.01M12 15h.01M17 21H7M10 7h.01M10 11h.01M10 15h.01M14 7h.01M14 11h.01M14 15h.01"
    },
    {
      title: "Renovation & Restoration",
      description: "Transforming existing structures into modern masterpieces while preserving heritage.",
      icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"
    }
  ];

  return (
    <section className="section-padding bg-soft" id="about">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Specialized <span className="highlight-dark">Services</span></h2>
          <p className="section-subtitle">Delivering excellence across all sectors of construction with innovation and integrity.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={service.icon}></path>
                </svg>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-soft {
          background-color: var(--bg-soft);
        }

        .text-center {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 3rem;
          color: var(--primary);
        }

        .highlight-dark {
          color: var(--secondary);
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .service-card {
          padding: 3rem;
          border-radius: 12px;
          transition: var(--transition);
          background: white;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .service-card:hover {
          transform: translateY(-10px);
          background: var(--primary);
          color: white;
        }

        .service-icon {
          color: var(--accent);
          margin-bottom: 2rem;
        }

        .service-card:hover .service-icon {
          color: var(--accent);
        }

        .service-card-title {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .service-card-text {
          opacity: 0.8;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .section-title { font-size: 2.2rem; }
          .services-grid { grid-template-columns: 1fr; }
          .service-card { padding: 2rem; }
          .text-center { margin-bottom: 2.5rem; }
        }

        @media (max-width: 480px) {
          .section-title { font-size: 1.8rem; }
        }
      `}</style>
    </section>
  );
};

export default Services;
