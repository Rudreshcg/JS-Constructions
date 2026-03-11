import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Suresh Gowda",
      role: "Homeowner, Indiranagar",
      image: "/assets/avatar-1.png",
      text: "JS Constructions built our duplex in Indiranagar exactly as we envisioned. The quality of materials and workmanship is outstanding. Our neighbours constantly compliment the design!"
    },
    {
      name: "Kavitha Reddy",
      role: "Homeowner, Jayanagar",
      image: "/assets/avatar-2.png",
      text: "We built our dream home in Jayanagar with JS Constructions. They were transparent about costs, completed on time, and the finishing touches were simply beautiful. Highly recommended!"
    },
    {
      name: "Manjunath Rao",
      role: "Property Owner, Sadashivanagar",
      image: "/assets/avatar-3.png",
      text: "The independent villa they constructed for us in Sadashivanagar exceeded all expectations. From the foundation to the interiors, every detail was handled with great care and professionalism."
    }
  ];

  return (
    <section className="section-padding bg-light" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Client <span className="highlight-dark">Feedback</span></h2>
          <p className="section-subtitle">Read what our valued clients have to say about their experience with us.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--accent)" opacity="0.2">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V15M3.017 21L3.017 18C3.017 16.8954 3.91242 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V15" />
                </svg>
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-footer">
                <img src={t.image} alt={t.name} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{t.name}</h4>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .testimonial-card {
          padding: 3rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          position: relative;
          border-left: 4px solid var(--accent);
          display: flex;
          flex-direction: column;
        }

        .testimonial-text {
          font-style: italic;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
          flex-grow: 1;
        }

        .testimonial-footer {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .testimonial-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent);
        }

        .testimonial-name {
          color: var(--primary);
          margin-bottom: 0.2rem;
          font-size: 1.1rem;
        }

        .testimonial-role {
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr; margin-top: 2rem; }
          .testimonial-card { padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
