import React from 'react';

const HowWeWork = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation',
      desc: 'We begin with a detailed discussion to understand your vision, requirements, budget, and the Bangalore locality you have in mind.',
      icon: '🤝'
    },
    {
      step: '02',
      title: 'Design & Planning',
      desc: 'Our architects create detailed floor plans and 3D renders, incorporating your feedback to finalise the perfect design.',
      icon: '📐'
    },
    {
      step: '03',
      title: 'Construction',
      desc: 'Our skilled engineers and construction crew bring your home to life, using premium materials with rigorous quality checks at every stage.',
      icon: '🏗️'
    },
    {
      step: '04',
      title: 'Handover',
      desc: 'We complete all interiors, inspections, and paperwork, then hand over the keys to your dream home — on time and within budget.',
      icon: '🔑'
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
          background: #0A1D37;
          color: white;
        }

        .how-title { color: white; }
        .how-title span { color: #ee7723; }

        .how-section .section-subtitle { color: rgba(255,255,255,0.6); }

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
          background: rgba(238,119,35,0.15);
          border: 2px solid #ee7723;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .step-item:hover .step-icon {
          background: #ee7723;
          transform: scale(1.1);
        }

        .step-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: #ee7723;
          letter-spacing: 1px;
          margin-top: 0.5rem;
        }

        .step-connector {
          position: absolute;
          top: 40px;
          left: calc(50% + 40px);
          right: calc(-50% + 40px);
          height: 2px;
          background: rgba(238,119,35,0.3);
          z-index: 0;
        }

        .step-content h3 {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
        }

        .step-content p {
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
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
