import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Footer } from './home';
import { publishedBlogs } from '../data/blogs';

// "October 2026" — same style the blog cards already used ("June 2026").
export function formatMonthYear(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

function Blog() {
  // Newest first. Posts with published: false in src/data/blogs.js are left out.
  const posts = [...publishedBlogs].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="page">
      <Navbar />

      <section className="section blog-header">
        <div className="container--narrow">
          <p className="label fade-up">Latest thinking</p>
          <h1 className="display fade-up fade-up-1" style={{ marginTop: 12 }}>
            From the <em>blog</em>
          </h1>
          <p className="body-lg fade-up fade-up-2" style={{ marginTop: 20 }}>
            Insights, updates, and technology news from the PrintWindAI team.
          </p>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <p className="body-lg">New posts are on their way — check back soon.</p>
          ) : (
            <ul className="blog-list">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link to={p.href || `/blog/${p.slug}`} className="blog-card">
                    <div className="blog-card__meta">
                      <span className="pill">{p.category}</span>
                      <span className="blog-card__date">{formatMonthYear(p.date)}</span>
                    </div>
                    <h2 className="heading-lg" style={{ marginTop: 16 }}>{p.title}</h2>
                    {p.subtitle && (
                      <p className="blog-card__subtitle">{p.subtitle}</p>
                    )}
                    <p className="body-lg" style={{ marginTop: 12 }}>{p.excerpt}</p>
                    <span className="blog-card__cta">Read article →</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
