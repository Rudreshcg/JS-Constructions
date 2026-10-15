import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import ServiceAreas from '../components/ServiceAreas';
import PricingPackages from '../components/PricingPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedProjects from '../components/FeaturedProjects';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import { constructionFAQs } from '../data/faqs';
import CtaBanner from '../components/CtaBanner';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
      "@id": "https://www.jsconstructions22.in/#business",
      "name": "JS Constructions",
      "alternateName": ["JS Constructions Bengaluru", "JS Construction Karnataka"],
      "url": "https://www.jsconstructions22.in/",
      "logo": "https://www.jsconstructions22.in/assets/logo.jpg",
      "image": "https://www.jsconstructions22.in/assets/hero-premium.webp",
      "description": "JS Constructions is a premier residential and commercial construction company based in Bengaluru, delivering turnkey building solutions, luxury villas, duplex homes, hospitals, and commercial projects across Karnataka since 2022.",
      "telephone": "+91-7676534573",
      "email": "constructionsjs22@gmail.com",
      "priceRange": "₹₹ - ₹₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI, Cheque",
      "foundingDate": "2022",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ullal Main Rd, Annapurneshwari Layout, Jnananjyothinagar, Railway Layout, Jnana Ganga Nagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560056",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9629,
        "longitude": 77.5028
      },
      "areaServed": [
        { "@type": "City", "name": "Bengaluru" },
        { "@type": "City", "name": "Bangalore" },
        { "@type": "AdministrativeArea", "name": "Ullal, Bengaluru" },
        { "@type": "AdministrativeArea", "name": "Nagarbhavi, Bengaluru" },
        { "@type": "AdministrativeArea", "name": "Rajarajeshwari Nagar, Bengaluru" },
        { "@type": "AdministrativeArea", "name": "Kengeri, Bengaluru" },
        { "@type": "City", "name": "Kunigal" },
        { "@type": "City", "name": "Channapatna" },
        { "@type": "City", "name": "Mandya" },
        { "@type": "City", "name": "Belagavi" },
        { "@type": "AdministrativeArea", "name": "Tumakuru District" },
        { "@type": "AdministrativeArea", "name": "Ramanagara District" },
        { "@type": "State", "name": "Karnataka" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "28",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": ["https://www.instagram.com/jsconstructions.co/"]
    }
  ]
};

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <SEO
        title="JS Constructions | Premier Construction Company in Bangalore & Karnataka"
        description="JS Constructions is a top-rated construction company in Bangalore & Karnataka since 2022. Turnkey residential villas, duplexes, hospitals & commercial projects across Bengaluru, Kunigal, Channapatna, Mandya & Belagavi."
        canonical="https://www.jsconstructions22.in/"
        keywords="construction company in Bangalore, construction company in Bengaluru, construction company in Karnataka, building contractors Bangalore, turnkey house construction Bengaluru, civil contractors Karnataka, luxury villa builders Bangalore, duplex house construction Bengaluru, building contractors Kunigal, hospital construction Channapatna, residential builders Belagavi, commercial construction Mandya, JS Constructions"
        breadcrumbs={[{ name: 'Home', item: '/' }]}
        faq={constructionFAQs}
        schema={homeSchema}
      />
      <Hero />
      <div className="reveal"><Stats /></div>
      <div className="reveal"><Services /></div>
      <div className="reveal"><FeaturedProjects /></div>
      <div className="reveal"><PricingPackages /></div>
      <div className="reveal"><ServiceAreas /></div>
      <div className="reveal"><WhyChooseUs /></div>
      <div className="reveal"><HowWeWork /></div>
      <div className="reveal"><Testimonials /></div>
      <div className="reveal"><FAQSection /></div>
      <CtaBanner />
    </div>
  );
};

export default Home;
