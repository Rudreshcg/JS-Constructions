import React, { useState } from 'react';
import { constructionFAQs } from '../data/faqs';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-padding faq-section" id="faq">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">Common Queries About Building in <span className="highlight-dark">Bangalore &amp; Karnataka</span></h2>
          <p className="section-subtitle">
            Everything you need to know before starting your residential or commercial construction journey with JS Constructions.
          </p>
        </div>

        <div className="faq-container">
          {constructionFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                className={`faq-item ${isOpen ? 'open' : ''}`} 
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          background-color: var(--bg-soft);
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

        .faq-container {
          max-width: 880px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: white;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 4px;
          padding: 1.6rem 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .faq-item:hover {
          border-color: rgba(184,35,41,0.3);
          box-shadow: 0 8px 24px rgba(0,0,0,0.05);
        }

        .faq-item.open {
          border-left: 4px solid var(--accent);
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }

        .faq-question h3 {
          font-size: 1.15rem;
          color: var(--primary);
          font-weight: 600;
          margin: 0;
          line-height: 1.4;
        }

        .faq-toggle-icon {
          font-size: 1.6rem;
          font-weight: 400;
          color: var(--accent);
          line-height: 1;
          flex-shrink: 0;
        }

        .faq-answer {
          margin-top: 1.2rem;
          padding-top: 1.2rem;
          border-top: 1px solid rgba(0,0,0,0.05);
          animation: fadeIn 0.3s ease;
        }

        .faq-answer p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .section-title { font-size: 2.1rem; }
          .faq-item { padding: 1.2rem 1.4rem; }
          .faq-question h3 { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
