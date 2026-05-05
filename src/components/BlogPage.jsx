import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../lib/blog'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setError('Could not load posts.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="fixed inset-0 pointer-events-none"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
             backgroundSize: '72px 72px',
           }} />

      <main className="relative">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-28">

          {/* Back */}
          <Link to="/" className="inline-flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150 mb-10">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to home
          </Link>

          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]" />
              <span className="text-[11px] font-semibold text-[#facd12] uppercase tracking-[0.12em]">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Thinking out loud.</h1>
          </div>

          {/* States */}
          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-2xl animate-pulse"
                     style={{ border: '1px solid rgba(255,255,255,0.06)', background: '#111111', height: '300px' }} />
              ))}
            </div>
          )}

          {error && <p className="text-zinc-500 text-sm">{error}</p>}

          {!loading && !error && posts.length === 0 && (
            <p className="text-zinc-600 text-sm">No posts yet — check back soon.</p>
          )}

          {!loading && posts.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`}
                      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:translate-y-[-2px]"
                      style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#111111' }}>
                  <div className="w-full aspect-[16/9] overflow-hidden bg-zinc-900">
                    {post.thumbnail_url ? (
                      <img src={post.thumbnail_url} alt={post.title}
                           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"
                           style={{ background: 'rgba(250,205,18,0.03)' }}>
                        <span className="w-2 h-2 rounded-full bg-[#facd12]/20" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    <div className="text-[10px] text-zinc-600 font-medium uppercase tracking-widest">
                      {formatDate(post.published_at)}
                    </div>
                    <h2 className="text-sm font-semibold text-white leading-snug group-hover:text-[#facd12] transition-colors duration-150">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    )}
                    <div className="mt-auto pt-2 flex items-center gap-1.5 text-[11px] font-medium text-[#facd12]">
                      Read more
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
