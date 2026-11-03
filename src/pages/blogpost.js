import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navbar from '../components/Navbar';
import NotFound from './notfound';
import { Footer } from './home';
import blogs, { publishedBlogs } from '../data/blogs';
import { formatMonthYear } from './blog';

// Internal links use the router. The /contact link in a post becomes the site's button.
// A link to a post that is switched off (or doesn't exist) shows as plain text, so turning
// a post off never leaves a dead link inside another post.
function MarkdownLink({ href = '', children }) {
  if (href.startsWith('/blog/')) {
    const target = href.replace('/blog/', '').split(/[?#]/)[0];
    if (!publishedBlogs.some((p) => p.slug === target)) {
      return <span>{children}</span>;
    }
  }
  if (href === '/contact') {
    return <Link to={href} className="btn btn--primary">{children}</Link>;
  }
  if (href.startsWith('/')) {
    return <Link to={href}>{children}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

// Wide tables scroll sideways on phones instead of breaking the layout.
function MarkdownTable({ children }) {
  return (
    <div className="blog-table-wrap">
      <table>{children}</table>
    </div>
  );
}

function BlogPost() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const post = blogs.find((p) => p.slug === slug && p.body);

  // Switched-off posts are hidden from the public; ?preview=1 lets the team proof them.
  const preview = searchParams.get('preview') === '1';
  if (!post || !(post.published || preview)) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <Navbar />

      <article className="section blog-article">
        <div className="container--narrow">
          {!post.published && (
            <div className="blog-preview-banner">
              Preview — this post is switched off and is not visible on the public Blog page.
            </div>
          )}

          <div className="blog-article__head fade-up">
            <Link to="/blog" className="blog-article__back">← Back to blog</Link>
            <div className="blog-card__meta" style={{ marginTop: 20 }}>
              <span className="pill">{post.category}</span>
              <span className="blog-card__date">
                {formatMonthYear(post.date)} · {post.readMinutes} min read
              </span>
            </div>
            <h1 className="display blog-article__title fade-up fade-up-1" style={{ marginTop: 20 }}>
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="body-lg fade-up fade-up-2" style={{ marginTop: 20, color: 'var(--slate-500)' }}>
                {post.subtitle}
              </p>
            )}
            <p className="blog-article__byline fade-up fade-up-2">By {post.author}</p>
          </div>

          <div className="blog-article__body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{ a: MarkdownLink, table: MarkdownTable }}
            >
              {post.body}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default BlogPost;
