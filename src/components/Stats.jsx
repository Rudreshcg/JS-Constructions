import React from 'react';

const Stats = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20" },
    { label: "Expert Team Members", value: "6" }
  ];

  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2 className="stat-value">{stat.value}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .stats-section {
          background: var(--primary);
          color: white;
          padding: 60px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          text-align: center;
          gap: 2rem;
        }

        .stat-value {
          font-size: 3rem;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.85rem;
          opacity: 0.8;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 0; }
          .stat-item { padding: 1.5rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.08); }
          .stat-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.08); }
          .stat-value { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
};

export default Stats;
