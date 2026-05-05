import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../lib/blog'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`}
          className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:translate-y-[-2px]"
          style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#111111' }}>
      {/* Thumbnail */}
      <div className="w-full aspect-[16/9] overflow-hidden bg-zinc-900">
        {post.thumbnail_url ? (
          <img src={post.thumbnail_url} alt={post.title}
               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center"
               style={{ background: 'rgba(250,205,18,0.04)' }}>
            <span className="w-2 h-2 rounded-full bg-[#facd12]/30" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="text-[10px] text-zinc-600 font-medium uppercase tracking-widest">
          {formatDate(post.published_at)}
        </div>
        <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-[#facd12] transition-colors duration-150">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
        )}
        <div className="mt-auto pt-2 flex items-center gap-1.5 text-[11px] font-medium text-[#facd12]">
          Read more
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M2 5.5h7M6 3l2.5 2.5L6 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function BlogSection() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts({ limit: 4 })
      .then(setPosts)
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  // Don't render the section at all if there are no posts
  if (!loading && posts.length === 0) return null

  return (
    <section className="py-28 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facd12]" />
              <span className="text-xs font-medium text-[#facd12] uppercase tracking-widest">Blog</span>
            </div>
            <h2 className="text-4xl font-bold text-white leading-tight">
              Thinking out loud.
            </h2>
          </div>
          <Link to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors duration-150 shrink-0">
            See all posts
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-2xl animate-pulse"
                   style={{ border: '1px solid rgba(255,255,255,0.06)', background: '#111111', height: '280px' }} />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {posts.map(post => <PostCard key={post.id} post={post} />)}
          </div>
        )}
      </div>
    </section>
  )
}
