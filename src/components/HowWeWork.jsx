import React from 'react';

const HowWeWork = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation',
      desc: 'We begin with a detailed discussion to understand your vision, requirements, budget, and the Bangalore locality you have in mind.',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    },
    {
      step: '02',
      title: 'Design & Planning',
      desc: 'Our architects create detailed floor plans and 3D renders, incorporating your feedback to finalise the perfect design.',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path><path d="M12 22v-6.5"></path><path d="M22 8.5l-10 7-10-7"></path><path d="M2 15.5l10-7 10 7"></path><path d="M12 2v6.5"></path></svg>
    },
    {
      step: '03',
      title: 'Construction',
      desc: 'Our skilled engineers and construction crew bring your home to life, using premium materials with rigorous quality checks at every stage.',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
    },
    {
      step: '04',
      title: 'Handover',
      desc: 'We complete all interiors, inspections, and paperwork, then hand over the keys to your dream home — on time and within budget.',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
    }
  ];

  return (
    <section className="section-padding how-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title how-title">How We <span>Work</span></h2>
          <p className="section-subtitle">A transparent, streamlined 4-step process from your first call to the final handover.</p>
        </div>

        <div className="steps-container">
          {steps.map((step, i) => (
            <div className="step-item" key={i}>
              <div className="step-icon-wrap">
                <div className="step-icon">{step.icon}</div>
                <div className="step-num">{step.step}</div>
                {i < steps.length - 1 && <div className="step-connector"></div>}
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .how-section {
          background: var(--bg-soft);
          color: var(--text-primary);
        }

        .how-title { color: var(--primary); }
        .how-title span { color: var(--accent); }

        .how-section .section-subtitle { color: var(--text-secondary); }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-top: 4rem;
          position: relative;
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1.5rem;
          position: relative;
        }

        .step-icon-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          position: relative;
          margin-bottom: 1.5rem;
        }

        .step-icon {
          width: 80px; height: 80px;
          background: transparent;
          border: 1px solid rgba(12, 18, 43, 0.15);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--primary);
          position: relative;
          z-index: 1;
          transition: all 0.4s ease;
        }

        .step-item:hover .step-icon {
          border-color: var(--accent);
          color: var(--accent);
          background: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transform: translateY(-5px);
        }

        .step-icon svg {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-item:hover .step-icon svg {
          transform: rotate(360deg);
        }

        .step-num {
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--text-secondary);
          letter-spacing: 2px;
          margin-top: 1rem;
          opacity: 0.6;
        }

        .step-connector {
          position: absolute;
          top: 40px;
          left: calc(50% + 40px);
          right: calc(-50% + 40px);
          height: 1px;
          background: rgba(12, 18, 43, 0.1);
          z-index: 0;
        }

        .step-content h3 {
          color: var(--primary);
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .step-content p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        @media(max-width: 992px) {
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
          .step-connector { display: none; }
        }

        @media(max-width: 576px) {
          .steps-container { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default HowWeWork;
