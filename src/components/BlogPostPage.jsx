import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPost } from '../lib/blog'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getPost(slug)
      .then(setPost)
      .catch(() => setError('Post not found.'))
      .finally(() => setLoading(false))
  }, [slug])

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="fixed inset-0 pointer-events-none"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
             backgroundSize: '72px 72px',
           }} />

      <main className="relative">
        <div className="max-w-2xl mx-auto px-6 pt-16 pb-28">

          {/* Back */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150 mb-10">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All posts
          </Link>

          {loading && (
            <div className="flex flex-col gap-6 animate-pulse">
              <div className="h-8 w-3/4 rounded-lg bg-zinc-800" />
              <div className="h-4 w-1/4 rounded bg-zinc-800" />
              <div className="aspect-video w-full rounded-xl bg-zinc-800" />
            </div>
          )}

          {error && <p className="text-zinc-500 text-sm">{error}</p>}

          {post && (
            <article className="flex flex-col gap-8">
              {/* Meta */}
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]" />
                  <span className="text-[11px] font-semibold text-[#facd12] uppercase tracking-[0.12em]">Blog</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                  {post.title}
                </h1>
                <p className="text-xs text-zinc-600 font-medium uppercase tracking-widest">
                  {formatDate(post.published_at)}
                </p>
              </div>

              {/* Thumbnail */}
              {post.thumbnail_url && (
                <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden"
                     style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                  <img src={post.thumbnail_url} alt={post.title}
                       className="w-full h-full object-cover" />
                </div>
              )}

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-lg text-zinc-400 leading-relaxed border-l-2 pl-5"
                   style={{ borderColor: '#facd12' }}>
                  {post.excerpt}
                </p>
              )}

              {/* Divider */}
              <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.06)' }} />

              {/* Content — rendered from rich text HTML */}
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />

              {/* Footer */}
              <div className="pt-8 border-t flex items-center justify-between"
                   style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <Link to="/blog"
                      className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors duration-150">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to all posts
                </Link>
                <span className="text-xs text-zinc-700">Salt and Light Technologies</span>
              </div>
            </article>
          )}
        </div>
      </main>

      <style>{`
        .post-content { color: #a1a1aa; font-size: 1rem; line-height: 1.85; }
        .post-content h1 { color: #fff; font-size: 1.8rem; font-weight: 700; margin: 1.4em 0 0.5em; line-height: 1.2; }
        .post-content h2 { color: #fff; font-size: 1.35rem; font-weight: 600; margin: 1.2em 0 0.4em; line-height: 1.3; }
        .post-content h3 { color: #e4e4e7; font-size: 1.1rem; font-weight: 600; margin: 1em 0 0.35em; }
        .post-content p { margin: 0 0 1em; }
        .post-content p:last-child { margin-bottom: 0; }
        .post-content strong { color: #fff; font-weight: 600; }
        .post-content em { font-style: italic; }
        .post-content hr { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 2em 0; }
        .post-content img { max-width: 100%; border-radius: 12px; margin: 1.5em 0; border: 1px solid rgba(255,255,255,0.07); display: block; }
        .post-content ul { list-style: disc; padding-left: 1.5em; margin: 0.5em 0 1em; }
        .post-content ol { list-style: decimal; padding-left: 1.5em; margin: 0.5em 0 1em; }
        .post-content li { margin-bottom: 0.4em; }
        .post-content a { color: #facd12; text-decoration: underline; text-underline-offset: 3px; }
      `}</style>
    </div>
  )
}
