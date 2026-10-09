import { useEffect } from 'react';

const DEFAULT_OG_IMAGE = 'https://www.jsconstructions22.in/assets/hero-premium.webp';

/**
 * SEO Component — sets page title, meta description, Open Graph, Twitter Card,
 * canonical URL, and optional JSON-LD structured data dynamically.
 *
 * Usage:
 *   <SEO
 *     title="Page Title | JS Constructions"
 *     description="..."
 *     canonical="https://www.jsconstructions22.in/page"
 *     schema={{ ... }}   // optional JSON-LD object
 *   />
 */
const SEO = ({ title, description, canonical, schema, image }) => {
  const DOMAIN = 'https://www.jsconstructions22.in';
  const canonicalUrl = canonical || `${DOMAIN}/`;
  const ogImage = image ? new URL(image, DOMAIN).href : DEFAULT_OG_IMAGE;

  useEffect(() => {
    // Title
    document.title = title || 'JS Constructions | Premium Construction in Bengaluru';

    const setMeta = (attrs, content) => {
      const selector = Object.entries(attrs)
        .map(([k, v]) => `[${k}="${v}"]`)
        .join('');
      let el = document.querySelector(`meta${selector}`);
      if (!el) {
        el = document.createElement('meta');
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Core meta
    setMeta({ name: 'description' }, description || 'JS Constructions offers premium residential and commercial construction services in Bengaluru since 2022.');
    setMeta({ name: 'robots' }, 'index, follow');
    setMeta({ name: 'author' }, 'JS Constructions');
    setMeta({ name: 'keywords' }, 'construction company Bengaluru, residential construction, commercial construction, luxury villas Bengaluru, JS Constructions, building contractors Karnataka');

    // Canonical
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta({ property: 'og:type' }, 'website');
    setMeta({ property: 'og:site_name' }, 'JS Constructions');
    setMeta({ property: 'og:title' }, title || 'JS Constructions | Premium Construction in Bengaluru');
    setMeta({ property: 'og:description' }, description || 'JS Constructions offers premium residential and commercial construction services in Bengaluru since 2022.');
    setMeta({ property: 'og:url' }, canonicalUrl);
    setMeta({ property: 'og:image' }, ogImage);
    setMeta({ property: 'og:image:alt' }, title || 'JS Constructions construction project in Bengaluru');
    setMeta({ property: 'og:locale' }, 'en_IN');

    // Twitter Card
    setMeta({ name: 'twitter:card' }, 'summary_large_image');
    setMeta({ name: 'twitter:title' }, title || 'JS Constructions | Premium Construction in Bengaluru');
    setMeta({ name: 'twitter:description' }, description || 'JS Constructions offers premium residential and commercial construction services in Bengaluru since 2022.');
    setMeta({ name: 'twitter:image' }, ogImage);

    // JSON-LD Structured Data
    const schemaId = 'seo-schema-ld';
    let existing = document.getElementById(schemaId);
    if (schema) {
      if (!existing) {
        existing = document.createElement('script');
        existing.id = schemaId;
        existing.type = 'application/ld+json';
        document.head.appendChild(existing);
      }
      existing.textContent = JSON.stringify(schema);
    } else if (existing) {
      existing.remove();
    }
  }, [title, description, canonicalUrl, schema, ogImage]);

  return null;
};

export default SEO;
