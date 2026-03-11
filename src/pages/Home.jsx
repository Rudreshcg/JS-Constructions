import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedProjects from '../components/FeaturedProjects';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "JS Constructions",
      "url": "https://www.jsconstructions22.in",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.jsconstructions22.in/projects?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "LocalBusiness",
      "name": "JS Constructions",
      "url": "https://www.jsconstructions22.in",
      "logo": "https://www.jsconstructions22.in/assets/logo.jpg",
      "image": "https://www.jsconstructions22.in/assets/hero-bg-v2.png",
      "description": "JS Constructions offers premium residential and commercial construction services in Bengaluru since 2008.",
      "telephone": "+91-7676534573",
      "foundingDate": "2008",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "areaServed": "Bengaluru"
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
        title="JS Constructions | Premium Construction Company in Bengaluru"
        description="JS Constructions — trusted construction company in Bengaluru since 2008. We build luxury villas, duplex homes, and commercial spaces with excellence."
        canonical="https://www.jsconstructions22.in"
        schema={homeSchema}
      />
      <Hero />
      <div className="reveal"><Stats /></div>
      <div className="reveal"><Services /></div>
      <div className="reveal"><WhyChooseUs /></div>
      <div className="reveal"><FeaturedProjects /></div>
      <div className="reveal"><HowWeWork /></div>
      <div className="reveal"><Testimonials /></div>
      <CtaBanner />
    </div>
  );
};

export default Home;
