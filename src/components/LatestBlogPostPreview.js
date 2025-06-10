import React from 'react';
import Link from '@docusaurus/Link';

// Example: Replace with automation or import from a JSON in the future
const latestPost = {
  title: 'What is Fedimint - Juan en Cripto',
  date: '2022-10-19',
  excerpt: 'Juan en Cripto interview with Obi Nwosu discussing how Fedimint can help scale to bitcoin to billions.',
  image: '/img/Fedimint_Blockstream.png',
  link: '/blog/fedimint-juancripto',
};

export default function LatestBlogPostPreview() {
  return (
    <section style={{margin: '2rem 0', padding: '2rem', background: 'var(--fm-snow)', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
      <h2 style={{marginBottom: '1rem'}}>Latest Blog Post</h2>
      <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
        <img src={latestPost.image} alt={latestPost.title} style={{width: 120, height: 120, objectFit: 'cover', borderRadius: '8px'}} />
        <div>
          <h3 style={{margin: 0}}>{latestPost.title}</h3>
          <p style={{color: 'var(--fm-fog)', fontSize: '0.9rem', margin: '0.2rem 0 0.7rem 0'}}>{latestPost.date}</p>
          <p style={{margin: 0}}>{latestPost.excerpt}</p>
          <Link className="button button--primary button--sm" to={latestPost.link} style={{marginTop: '1rem', display: 'inline-block'}}>Read more</Link>
        </div>
      </div>
    </section>
  );
}