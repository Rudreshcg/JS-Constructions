import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
      title: 'On-Time Delivery',
      desc: 'We are committed to completing every project on schedule. Our streamlined workflows and experienced team ensure timelines are always met.'
    },
    {
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
      title: 'Premium Materials',
      desc: 'We source only the highest-grade materials from certified suppliers, ensuring your home is built to last for generations.'
    },
    {
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
      title: 'Transparent Pricing',
      desc: 'No hidden costs, no surprises. We provide detailed, itemised quotations so you always know exactly where your money goes.'
    },
    {
      icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
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
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }

        .why-card {
          position: relative;
          padding: 3rem 2.5rem;
          border-radius: 0px;
          background: white;
          transition: all 0.4s ease;
          border: 1px solid rgba(0,0,0,0.04);
          overflow: hidden;
        }

        .why-card:hover {
          background: var(--bg-soft);
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.03);
          border-color: rgba(184,35,41,0.2);
        }

        .why-card:hover h3,
        .why-card:hover p { color: inherit; }

        .why-number {
          position: absolute;
          top: 1rem; right: 1.2rem;
          font-size: 4rem;
          font-weight: 300;
          color: rgba(0,0,0,0.03);
          line-height: 1;
          font-family: var(--font-heading);
          transition: color 0.3s ease;
        }

        .why-card:hover .why-number { color: rgba(184,35,41,0.05); }

        .why-icon {
          color: var(--accent);
          margin-bottom: 1.2rem;
          display: block;
        }

        .why-icon svg {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .why-card:hover .why-icon svg {
          transform: rotate(360deg);
        }

        .why-card h3 {
          color: var(--primary);
          margin-bottom: 0.8rem;
          font-size: 1.15rem;
          font-weight: 600;
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
