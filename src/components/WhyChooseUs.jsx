import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '⏱️',
      title: 'On-Time Delivery',
      desc: 'We are committed to completing every project on schedule. Our streamlined workflows and experienced team ensure timelines are always met.'
    },
    {
      icon: '💎',
      title: 'Premium Materials',
      desc: 'We source only the highest-grade materials from certified suppliers, ensuring your home is built to last for generations.'
    },
    {
      icon: '📋',
      title: 'Transparent Pricing',
      desc: 'No hidden costs, no surprises. We provide detailed, itemised quotations so you always know exactly where your money goes.'
    },
    {
      icon: '🔧',
      title: 'Expert Engineers',
      desc: 'Our certified structural engineers and architects bring years of residential expertise to every Bangalore project we undertake.'
    }
  ];

  return (
    <section className="section-padding why-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Why <span className="highlight-dark">Choose Us</span></h2>
          <p className="section-subtitle">What sets JS Constructions apart from the rest in Bangalore's residential construction landscape.</p>
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i}>
              <div className="why-number">{String(i + 1).padStart(2, '0')}</div>
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-section { background: white; }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }

        .why-card {
          position: relative;
          padding: 2.5rem 2rem;
          border-radius: 12px;
          background: #F4F7FA;
          transition: all 0.3s ease;
          border-bottom: 4px solid transparent;
          overflow: hidden;
        }

        .why-card:hover {
          background: #0A1D37;
          border-bottom-color: #ee7723;
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(10,29,55,0.2);
        }

        .why-card:hover h3,
        .why-card:hover p { color: white; }

        .why-number {
          position: absolute;
          top: 1rem; right: 1.2rem;
          font-size: 3.5rem;
          font-weight: 900;
          color: rgba(10,29,55,0.06);
          line-height: 1;
          font-family: var(--font-heading);
          transition: color 0.3s ease;
        }

        .why-card:hover .why-number { color: rgba(255,255,255,0.05); }

        .why-icon {
          font-size: 2.5rem;
          margin-bottom: 1.2rem;
          display: block;
        }

        .why-card h3 {
          color: var(--primary);
          margin-bottom: 0.8rem;
          font-size: 1.15rem;
          transition: color 0.3s ease;
        }

        .why-card p {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.7;
          transition: color 0.3s ease;
        }

        @media(max-width: 992px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media(max-width: 576px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
