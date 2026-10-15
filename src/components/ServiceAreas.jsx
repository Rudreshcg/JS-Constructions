import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceAreas = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const regions = [
    {
      id: 'bengaluru',
      name: 'Bengaluru Metro (HQ)',
      badge: 'Headquarters & Core Hub',
      description: 'Headquartered at Ullal Main Road, Jnananjyothinagar, we build luxury duplexes, modern villas, and commercial spaces across all zones of Bengaluru.',
      localities: [
        'Ullal & Jnananjyothinagar',
        'Nagarbhavi & Chandra Layout',
        'Rajarajeshwari Nagar (RR Nagar)',
        'Kengeri & Mysore Road Corridor',
        'Vijayanagar & Basaveshwaranagar',
        'Malleshwaram & Rajajinagar',
        'Whitefield & Mahadevapura',
        'Indiranagar & Koramangala',
        'JP Nagar & Jayanagar',
        'HSR Layout & Electronic City',
        'Kanakapura Road & Banashankari',
        'Yelahanka & Hebbal (North Blr)'
      ]
    },
    {
      id: 'tumakuru',
      name: 'Tumakuru & Kunigal',
      badge: 'Active Projects: Chowtry & Residences',
      description: 'Major construction hub for JS Constructions. Currently constructing a 7,500 sq.ft commercial chowtry and multiple bespoke residential homes in Kunigal.',
      localities: [
        'Kunigal Town & Bypass',
        'Tumakuru City Corporation',
        'NH-75 Bengaluru-Mangaluru Corridor',
        'Tiptur & Gubbi Belts'
      ]
    },
    {
      id: 'ramanagara',
      name: 'Ramanagara & Channapatna',
      badge: 'Active Projects: Hospital & Villas',
      description: 'Delivering landmark institutional and residential infrastructure, including a modern multi-story hospital and custom family residences in Channapatna.',
      localities: [
        'Channapatna Town & Gowdagere',
        'Ramanagara City & Bengaluru-Mysuru Expressway',
        'Kanakapura & Bidadi Industrial Hub'
      ]
    },
    {
      id: 'mandya',
      name: 'Mandya & Cauvery Belt',
      badge: 'Active Projects: 7,000+ Sq.Ft Grand Villa',
      description: 'Specializing in grand luxury estates, expansive farmhouses, and modern multi-generational residences across the Mandya district.',
      localities: [
        'Mandya City & Sugar Town',
        'Maddur & Srirangapatna',
        'Pandavapura & Malavalli'
      ]
    },
    {
      id: 'belagavi',
      name: 'Belagavi & North Karnataka',
      badge: 'Active Projects: Turnkey Duplex Home',
      description: 'Extending our construction expertise to North Karnataka with high-specification earthquake-resistant residences and duplex architecture.',
      localities: [
        'Belagavi City & Suburbs',
        'Tilakwadi & Camp Area',
        'Hubballi-Dharwad Extension Corridor'
      ]
    }
  ];

  const displayedRegions = activeTab === 'all' 
    ? regions 
    : regions.filter(r => r.id === activeTab);

  return (
    <section className="section-padding service-areas-section" id="service-areas">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">EXTENSIVE COVERAGE</span>
          <h2 className="section-title">Construction Service Areas in <span className="highlight-dark">Bangalore &amp; Karnataka</span></h2>
          <p className="section-subtitle">
            From our headquarters in West Bengaluru to thriving cities and towns across Karnataka, JS Constructions is your dependable on-ground building partner.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="area-tabs">
          <button 
            className={`area-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Karnataka Locations
          </button>
          {regions.map(r => (
            <button
              key={r.id}
              className={`area-tab ${activeTab === r.id ? 'active' : ''}`}
              onClick={() => setActiveTab(r.id)}
            >
              {r.name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Area Cards Grid */}
        <div className="areas-grid">
          {displayedRegions.map((region) => (
            <div className="area-card" key={region.id}>
              <div className="area-card-header">
                <div className="area-pin-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="area-title">{region.name}</h3>
                  <span className="area-badge">{region.badge}</span>
                </div>
              </div>

              <p className="area-desc">{region.description}</p>

              <div className="localities-section">
                <span className="localities-label">Key Localities &amp; Zones Served:</span>
                <div className="localities-tags">
                  {region.localities.map((loc, i) => (
                    <span className="locality-pill" key={i}>
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="area-card-footer">
                <button className="area-cta-btn" onClick={() => navigate('/contact')}>
                  Plan a Build in {region.name.split(' (')[0]} →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="areas-banner">
          <div className="banner-text">
            <h3>Building on a plot outside these listed towns in Karnataka?</h3>
            <p>We undertake turnkey projects across all 31 districts of Karnataka. Inquire with our site engineers today.</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            Check Feasibility for Your Location
          </button>
        </div>
      </div>

      <style jsx>{`
        .service-areas-section {
          background-color: #FAFAFA;
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

        .area-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }

        .area-tab {
          padding: 0.6rem 1.4rem;
          border-radius: 30px;
          border: 1px solid rgba(12, 18, 43, 0.2);
          background: white;
          color: var(--primary);
          font-weight: 500;
          font-size: 0.88rem;
          transition: all 0.3s ease;
        }

        .area-tab:hover, .area-tab.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: 0 4px 15px rgba(12, 18, 43, 0.15);
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2rem;
          margin-bottom: 3.5rem;
        }

        .area-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.06);
          padding: 2.2rem 2rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 5px 20px rgba(0,0,0,0.03);
          transition: all 0.35s ease;
        }

        .area-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
          border-color: rgba(184,35,41,0.25);
        }

        .area-card-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .area-pin-icon {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(184, 35, 41, 0.08);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .area-title {
          font-size: 1.3rem;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .area-badge {
          display: inline-block;
          font-size: 0.75rem;
          color: var(--accent);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .area-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .localities-section {
          margin-bottom: 1.8rem;
          flex-grow: 1;
        }

        .localities-label {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.8rem;
        }

        .localities-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .locality-pill {
          background: var(--bg-soft);
          color: var(--text-primary);
          font-size: 0.8rem;
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,0.04);
        }

        .area-card-footer {
          border-top: 1px solid rgba(0,0,0,0.06);
          padding-top: 1.2rem;
        }

        .area-cta-btn {
          background: transparent;
          color: var(--accent);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 1px;
          padding: 0;
          transition: all 0.3s ease;
        }

        .area-cta-btn:hover {
          color: var(--primary);
          transform: translateX(4px);
        }

        .areas-banner {
          background: linear-gradient(135deg, var(--primary) 0%, #17244a 100%);
          color: white;
          padding: 2.5rem 3rem;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          box-shadow: 0 15px 40px rgba(12, 18, 43, 0.15);
        }

        .banner-text h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: white;
          font-weight: 500;
        }

        .banner-text p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          margin: 0;
        }

        .areas-banner .btn-primary {
          background: var(--accent);
          border-color: var(--accent);
          white-space: nowrap;
        }

        .areas-banner .btn-primary:hover {
          background: white;
          color: var(--primary);
          border-color: white;
        }

        @media (max-width: 900px) {
          .section-title { font-size: 2.1rem; }
          .areas-banner {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.4rem;
            gap: 1.5rem;
          }
          .areas-banner .btn-primary {
            white-space: normal;
            width: 100%;
            padding: 0.85rem 1.2rem;
            font-size: 0.82rem;
            letter-spacing: 1px;
            text-align: center;
            box-sizing: border-box;
          }
          .areas-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .area-card {
            padding: 1.8rem 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .section-title { font-size: 1.8rem; }
          .area-tab {
            font-size: 0.8rem;
            padding: 0.45rem 1rem;
          }
          .area-title {
            font-size: 1.15rem;
          }
          .area-card {
            padding: 1.5rem 1rem;
          }
          .areas-banner {
            padding: 1.6rem 1rem;
          }
          .banner-text h3 {
            font-size: 1.18rem;
          }
          .banner-text p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceAreas;
