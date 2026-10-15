import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Turnkey Residential Construction",
      tagline: "Villas, Duplexes & Independent Bungalows",
      description: "Complete end-to-end house construction across Bengaluru and Karnataka. From soil testing and foundation to finishing and painting, we manage every phase with guaranteed on-time handover.",
      icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      highlights: ["30x40, 30x50, 40x60 Custom Layouts", "Tata / JSW Grade Steel", "Ultratech / ACC 53 Grade Cement"]
    },
    {
      title: "Commercial & Healthcare Infrastructure",
      tagline: "Hospitals, Chowtries & Commercial Complexes",
      description: "High-capacity commercial builds across Karnataka, including convention halls (chowtries/kalyana mantapas), multi-specialty hospitals, and modern corporate retail facilities engineered for high-traffic durability.",
      icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16M12 7h.01M12 11h.01M12 15h.01M17 21H7M10 7h.01M10 11h.01M10 15h.01M14 7h.01M14 11h.01M14 15h.01",
      highlights: ["Fire & Safety Compliance", "Biomedical & Large Span RCC", "Column-Free Banquet Layouts"]
    },
    {
      title: "Architectural Design & 3D Elevation",
      tagline: "Modern Contemporary & Vastu Planning",
      description: "Our in-house architects design functional, aesthetic spaces tailored to Karnataka climate and urban plot sizes, blending modern luxury architecture with authentic Vastu Shastra principles.",
      icon: "M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z",
      highlights: ["3D Photorealistic Elevations", "100% Vastu Compliant Layouts", "Maximized Natural Ventilation"]
    },
    {
      title: "BBMP & BDA Plan Approval Assistance",
      tagline: "Plan Sanctions, NOCs & Approvals",
      description: "Hassle-free navigation through Karnataka municipal bodies. We prepare sanctioned drawings and liaison for BBMP, BDA, BMRDA, and local Gram Panchayat building approvals.",
      icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
      highlights: ["BDA / BBMP Building Sanctions", "Gram Panchayat Clearances", "Structural Stability Certification"]
    },
    {
      title: "Structural Engineering & Quality Checks",
      tagline: "Rigorous 7-Stage Testing Protocols",
      description: "Every building in Bengaluru or regional Karnataka is structurally designed to withstand seismic and environmental loads with continuous cube testing, slump tests, and engineer site supervision.",
      icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z",
      highlights: ["Concrete Cube Strength Testing", "Certified Structural Drawings", "Dedicated Site Engineers"]
    },
    {
      title: "Renovation & Structural Retrofitting",
      tagline: "Floor Additions & Interior Upgrades",
      description: "Extend, modernize, or restore existing buildings across Bangalore. From adding new floors to complete interior overhauls and waterproofing, we enhance your property's value and longevity.",
      icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      highlights: ["Structural Load Reinforcement", "Terrace Waterproofing", "Premium Interior Remodeling"]
    }
  ];

  return (
    <section className="section-padding bg-soft" id="services">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">WHAT WE BUILD</span>
          <h2 className="section-title">Construction Services in <span className="highlight-dark">Bengaluru &amp; Karnataka</span></h2>
          <p className="section-subtitle">Delivering high-specification residential and commercial construction with strict quality standards, transparent pricing, and zero compromises.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={service.icon}></path>
                </svg>
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-tagline">{service.tagline}</p>
              <p className="service-card-text">{service.description}</p>
              <ul className="service-highlights">
                {service.highlights.map((h, i) => (
                  <li key={i}>✓ {h}</li>
                ))}
              </ul>
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

        .section-badge {
          display: inline-block;
          font-size: 0.75rem;
          letter-spacing: 2.5px;
          color: var(--accent);
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        .section-title {
          font-size: 2.7rem;
          color: var(--primary);
        }

        .highlight-dark {
          color: var(--accent);
        }

        .section-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-card {
          padding: 2.5rem 2rem;
          background: white;
          transition: all 0.4s ease;
          border: 1px solid rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.08);
          border-color: rgba(184,35,41,0.3);
        }

        .service-icon {
          color: var(--accent);
          margin-bottom: 1.5rem;
        }

        .service-icon svg {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover .service-icon svg {
          transform: rotate(360deg);
        }

        .service-card-title {
          margin-bottom: 0.4rem;
          font-size: 1.35rem;
          color: var(--primary);
          font-weight: 600;
          line-height: 1.3;
        }

        .service-tagline {
          color: var(--accent);
          font-size: 0.82rem;
          font-weight: 500;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .service-card-text {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.65;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .service-highlights {
          list-style: none;
          padding-top: 1rem;
          border-top: 1px solid rgba(0,0,0,0.06);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .service-highlights li {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .section-title { font-size: 2.1rem; }
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

