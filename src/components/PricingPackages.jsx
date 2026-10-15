import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPackages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      name: "Standard Package",
      rate: "₹1,850",
      unit: "per sq.ft",
      target: "Rental Homes & Budget Duplexes",
      description: "High-durability turnkey construction package optimized for rental properties, budget duplex homes, and cost-effective residential builds.",
      badge: "Value Choice",
      features: [
        "Design: 2D Floor Plan & Structural Drawings",
        "Steel: Meenakshi / Kamdhenu Fe550 TMT Steel",
        "Cement: Zuari / Coromandel 43/53 Grade Cement",
        "Walls: Standard 6\" Solid Concrete Blocks",
        "Flooring: 2x2 Vitrified Tiles (upto ₹55/sq.ft)",
        "Doors: Sal Wood Frames & Flush Shutters",
        "Sanitary: Cera / Hindware CP Fittings",
        "Electrical: Anchor / V-Guard Fire-Resistant Wires",
        "Paint: Asian Paints Tractor Emulsion (Internal)",
        "Waterproofing: Chemical Terrace Waterproofing",
        "Warranty: 1 Year Maintenance & 5-Year Structural"
      ],
      popular: false
    },
    {
      name: "Premium Package",
      rate: "₹2,150",
      unit: "per sq.ft",
      target: "Contemporary Family Villas & Independent Bungalows",
      description: "Our most requested package for modern family homes in Bangalore and Karnataka, featuring premium branded materials and 3D architectural elevations.",
      badge: "Most Popular in Karnataka",
      features: [
        "Design: 2D Plans + 3D Elevation + Vastu Shastra Audit",
        "Steel: Tata Tiscon / JSW Neosteel Fe550D TMT",
        "Cement: Ultratech / ACC 53 Grade High-Strength Cement",
        "Walls: High-Density APCO / Red Bricks / Solid Blocks",
        "Flooring: 4x2 Premium Vitrified Tiles (upto ₹95/sq.ft)",
        "Doors: Teak Wood Main Door & Honne Frame",
        "Sanitary: Jaquar / Kohler Premium CP & Sanitaryware",
        "Electrical: Finolex / Havells Concealed Wiring & Modular Switches",
        "Paint: Asian Paints Royale Luxury Emulsion (Internal & Apex External)",
        "BBMP/Panchayat: Plan Sanction Guidance Included",
        "Warranty: 2 Years Free Maintenance & 10-Year Structural Guarantee"
      ],
      popular: true
    },
    {
      name: "Luxury Signature Package",
      rate: "₹2,550+",
      unit: "per sq.ft",
      target: "High-End Luxury Villas & Gated Estates",
      description: "Architectural grandeur crafted with Italian marble, smart automation provisions, customized woodwork, and double-height living layouts.",
      badge: "Ultra Luxury",
      features: [
        "Design: Full Architectural, Structural, MEP & Interior Design",
        "Steel: Primary Tata Tiscon Super Ductile Fe550D",
        "Cement: Ultratech Super / ACC Concrete Plus",
        "Flooring: Italian Marble or Large Format Glazed Vitrified Tiles (upto ₹250/sq.ft)",
        "Doors: Burma Teak Main Door & Flush Doors with Teak Veneer",
        "Sanitary: Grohe / Toto / Kohler Concealed Cisterns & Diverters",
        "Windows: UPVC 3-Track Windows with Mosquito Mesh & Toughened Glass",
        "Smart Home: Video Door Phone & Home Automation Conduit Setup",
        "Paint: Asian Paints Royale Aspira / PU Polish for Woodwork",
        "Waterproofing: Multi-Layer Dr. Fixit Certified Waterproofing",
        "Warranty: 3 Years Free Maintenance & 15-Year Structural Guarantee"
      ],
      popular: false
    }
  ];

  return (
    <section className="section-padding pricing-section" id="packages">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">TRANSPARENT ESTIMATION</span>
          <h2 className="section-title">Construction Cost &amp; Packages in <span className="highlight-dark">Bangalore &amp; Karnataka</span></h2>
          <p className="section-subtitle">
            No hidden costs, no unexpected escalation. We provide detailed itemized quotations with clear material specifications before ground-breaking.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, idx) => (
            <div className={`package-card ${pkg.popular ? 'featured' : ''}`} key={idx}>
              {pkg.popular && (
                <div className="popular-ribbon">{pkg.badge}</div>
              )}
              {!pkg.popular && (
                <div className="package-badge">{pkg.badge}</div>
              )}

              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-target">{pkg.target}</p>

              <div className="package-price">
                <span className="price-amount">{pkg.rate}</span>
                <span className="price-unit">/{pkg.unit}</span>
              </div>

              <p className="package-desc">{pkg.description}</p>

              <div className="package-features-title">What's Included:</div>
              <ul className="package-features">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <span className="tick">✓</span> {feat}
                  </li>
                ))}
              </ul>

              <button 
                className={`package-btn ${pkg.popular ? 'btn-primary' : 'btn-outline-dark'}`}
                onClick={() => navigate('/contact')}
              >
                Get Custom Quote for {pkg.name.split(' ')[0]} →
              </button>
            </div>
          ))}
        </div>

        {/* Cost Calculator Callout */}
        <div className="estimator-callout">
          <div className="callout-content">
            <h4>Need a tailored budget estimation for your specific plot size in Karnataka?</h4>
            <p>Whether you own a 30x40, 30x50, 40x60 plot or agricultural converted land, our quantity surveyors calculate exact structural and finishing costs.</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            Request Detailed BOQ &amp; Cost Sheet
          </button>
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          background-color: white;
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

        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3.5rem;
          align-items: stretch;
        }

        .package-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 4px;
          padding: 3rem 2.2rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.35s ease;
          box-shadow: 0 5px 20px rgba(0,0,0,0.02);
        }

        .package-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }

        .package-card.featured {
          border: 2px solid var(--accent);
          box-shadow: 0 15px 45px rgba(184, 35, 41, 0.12);
        }

        .popular-ribbon {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--accent);
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.4rem 1.4rem;
          border-radius: 30px;
          white-space: nowrap;
        }

        .package-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary);
          background: var(--bg-soft);
          padding: 0.3rem 0.8rem;
          align-self: flex-start;
          margin-bottom: 1rem;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }

        .package-name {
          font-size: 1.6rem;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .package-target {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .package-price {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
          margin-bottom: 1rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .price-amount {
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
        }

        .price-unit {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .package-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .package-features-title {
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .package-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 2.5rem;
          flex-grow: 1;
        }

        .package-features li {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .package-features .tick {
          color: var(--accent);
          font-weight: 700;
        }

        .package-btn {
          width: 100%;
          text-align: center;
          padding: 0.9rem 1.5rem;
          font-size: 0.82rem;
          letter-spacing: 1.5px;
          font-weight: 600;
          border-radius: 2px;
          cursor: pointer;
        }

        .estimator-callout {
          background: var(--bg-soft);
          border-left: 4px solid var(--accent);
          padding: 2.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }

        .callout-content h4 {
          font-size: 1.25rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .callout-content p {
          color: var(--text-secondary);
          font-size: 0.92rem;
          margin: 0;
          line-height: 1.6;
        }

        .estimator-callout .btn-primary {
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .packages-grid {
            grid-template-columns: 1fr;
            max-width: 550px;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 768px) {
          .section-title { font-size: 2.1rem; }
          .packages-grid {
            gap: 1.5rem;
          }
          .package-card {
            padding: 2.2rem 1.4rem;
          }
          .price-amount {
            font-size: 2.3rem;
          }
          .package-btn {
            padding: 0.85rem 1.2rem;
            font-size: 0.82rem;
            letter-spacing: 1px;
            border-radius: 3px;
          }
          .estimator-callout {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.25rem;
            gap: 1.4rem;
            border-left: none;
            border-top: 4px solid var(--accent);
          }
          .callout-content h4 {
            font-size: 1.18rem;
            line-height: 1.4;
          }
          .callout-content p {
            font-size: 0.88rem;
            line-height: 1.55;
          }
          .estimator-callout .btn-primary {
            white-space: normal;
            width: 100%;
            padding: 0.85rem 1.2rem;
            font-size: 0.82rem;
            letter-spacing: 1px;
            text-align: center;
            border-radius: 3px;
            box-sizing: border-box;
          }
        }

        @media (max-width: 480px) {
          .section-title { font-size: 1.8rem; }
          .package-card {
            padding: 1.8rem 1.1rem;
          }
          .package-name {
            font-size: 1.35rem;
          }
          .price-amount {
            font-size: 2.1rem;
          }
          .package-features li {
            font-size: 0.82rem;
          }
          .estimator-callout {
            padding: 1.6rem 1rem;
          }
          .estimator-callout .btn-primary {
            padding: 0.8rem 1rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PricingPackages;
