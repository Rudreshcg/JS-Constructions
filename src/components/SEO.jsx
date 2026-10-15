import { useEffect } from 'react';

const DEFAULT_OG_IMAGE = 'https://www.jsconstructions22.in/assets/hero-premium.webp';
const DEFAULT_KEYWORDS = 'construction company in Bangalore, construction company in Bengaluru, construction company in Karnataka, building contractors Bangalore, turnkey house construction Bengaluru, civil contractors Karnataka, luxury villa builders Bangalore, duplex house construction Bengaluru, building contractors Kunigal, hospital construction Channapatna, residential builders Belagavi, commercial construction Mandya, JS Constructions';

/**
 * SEO Component — sets page title, meta description, Open Graph, Twitter Card,
 * canonical URL, Geo-targeting meta tags, and structured data (LocalBusiness, BreadcrumbList, FAQPage).
 *
 * Usage:
 *   <SEO
 *     title="Page Title | JS Constructions"
 *     description="..."
 *     canonical="https://www.jsconstructions22.in/page"
 *     keywords="..."
 *     schema={{ ... }}
 *     breadcrumbs={[{ name: 'Home', item: 'https://www.jsconstructions22.in/' }, { name: 'Projects', item: 'https://www.jsconstructions22.in/projects' }]}
 *     faq={[{ question: '...', answer: '...' }]}
 *   />
 */
const SEO = ({ title, description, canonical, schema, image, keywords, breadcrumbs, faq }) => {
  const DOMAIN = 'https://www.jsconstructions22.in';
  const canonicalUrl = canonical || `${DOMAIN}/`;
  const ogImage = image ? new URL(image, DOMAIN).href : DEFAULT_OG_IMAGE;
  const pageKeywords = keywords || DEFAULT_KEYWORDS;
  const pageTitle = title || 'JS Constructions | Premier Construction Company in Bangalore & Karnataka';
  const pageDescription = description || 'JS Constructions is a premier residential and commercial construction company based in Bengaluru, delivering turnkey building solutions across Karnataka since 2022.';

  useEffect(() => {
    // Title
    document.title = pageTitle;

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
    setMeta({ name: 'description' }, pageDescription);
    setMeta({ name: 'robots' }, 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta({ name: 'author' }, 'JS Constructions');
    setMeta({ name: 'keywords' }, pageKeywords);

    // Geo-targeting meta tags for Bangalore & Karnataka
    setMeta({ name: 'geo.region' }, 'IN-KA');
    setMeta({ name: 'geo.placename' }, 'Bengaluru, Karnataka, India');
    setMeta({ name: 'geo.position' }, '12.9629;77.5028');
    setMeta({ name: 'ICBM' }, '12.9629, 77.5028');

    // Canonical
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta({ property: 'og:type' }, 'website');
    setMeta({ property: 'og:site_name' }, 'JS Constructions');
    setMeta({ property: 'og:title' }, pageTitle);
    setMeta({ property: 'og:description' }, pageDescription);
    setMeta({ property: 'og:url' }, canonicalUrl);
    setMeta({ property: 'og:image' }, ogImage);
    setMeta({ property: 'og:image:alt' }, pageTitle);
    setMeta({ property: 'og:locale' }, 'en_IN');

    // Twitter Card
    setMeta({ name: 'twitter:card' }, 'summary_large_image');
    setMeta({ name: 'twitter:title' }, pageTitle);
    setMeta({ name: 'twitter:description' }, pageDescription);
    setMeta({ name: 'twitter:image' }, ogImage);

    // JSON-LD Structured Data
    const schemaId = 'seo-schema-ld';
    let existing = document.getElementById(schemaId);

    // Build structured data graphs
    const schemaGraphs = [];

    if (schema) {
      if (schema['@graph']) {
        schemaGraphs.push(...schema['@graph']);
      } else {
        schemaGraphs.push(schema);
      }
    }

    // Dynamic Breadcrumb Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaGraphs.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': crumb.name,
          'item': crumb.item.startsWith('http') ? crumb.item : `${DOMAIN}${crumb.item}`
        }))
      });
    }

    // Dynamic FAQ Schema
    if (faq && faq.length > 0) {
      schemaGraphs.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faq.map(f => ({
          '@type': 'Question',
          'name': f.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.answer
          }
        }))
      });
    }

    if (schemaGraphs.length > 0) {
      if (!existing) {
        existing = document.createElement('script');
        existing.id = schemaId;
        existing.type = 'application/ld+json';
        document.head.appendChild(existing);
      }
      existing.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': schemaGraphs
      });
    } else if (existing && !schema) {
      // Keep existing fallback if none specified
    }
  }, [pageTitle, pageDescription, canonicalUrl, schema, ogImage, pageKeywords, breadcrumbs, faq]);

  return null;
};

export default SEO;

