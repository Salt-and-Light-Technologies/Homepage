import { useState, useEffect } from 'react'
import { getPosts, deletePost } from '../../lib/blog'
import PostEditor from './PostEditor'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function AdminDashboard({ onLogout }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(null) // null = list, 'new' = new post, post obj = edit
  const [deleting, setDeleting] = useState(null)

  function loadPosts() {
    setLoading(true)
    getPosts()
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(loadPosts, [])

  async function handleDelete(post) {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return
    setDeleting(post.id)
    await deletePost(post.id).catch(console.error)
    setPosts(prev => prev.filter(p => p.id !== post.id))
    setDeleting(null)
  }

  if (editing !== null) {
    return (
      <PostEditor
        post={editing === 'new' ? null : editing}
        onSave={() => { setEditing(null); loadPosts() }}
        onCancel={() => setEditing(null)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b bg-[#0B0B0B]/90 backdrop-blur-md"
           style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/CompanyLogoFlatYellowClear.png" alt="" className="h-6 w-auto" />
            <span className="text-xs text-zinc-600 font-medium">Admin</span>
          </div>
          <button onClick={onLogout}
                  className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150">
            Sign out
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
          <button onClick={() => setEditing('new')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-[#0B0B0B] bg-[#facd12] hover:brightness-110 transition-all">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            New Post
          </button>
        </div>

        {loading && (
          <div className="flex flex-col gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 rounded-xl animate-pulse" style={{ background: '#111' }} />
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <p className="text-zinc-600 text-sm">No posts yet.</p>
            <button onClick={() => setEditing('new')}
                    className="text-sm text-[#facd12] hover:underline">
              Write your first post →
            </button>
          </div>
        )}

        {!loading && posts.length > 0 && (
          <div className="flex flex-col gap-2">
            {posts.map(post => (
              <div key={post.id}
                   className="flex items-center gap-4 px-5 py-4 rounded-xl"
                   style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#111' }}>
                {/* Thumbnail */}
                <div className="w-14 h-10 rounded-lg overflow-hidden shrink-0 bg-zinc-800">
                  {post.thumbnail_url && (
                    <img src={post.thumbnail_url} alt="" className="w-full h-full object-cover" />
                  )}
                </div>

                {/* Title + date */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{post.title}</p>
                  <p className="text-xs text-zinc-600 mt-0.5">{formatDate(post.published_at)}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 shrink-0">
                  <button onClick={() => setEditing(post)}
                          className="text-xs text-zinc-500 hover:text-white transition-colors duration-150 px-3 py-1.5 rounded-lg"
                          style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(post)}
                          disabled={deleting === post.id}
                          className="text-xs text-red-600 hover:text-red-400 transition-colors duration-150 disabled:opacity-40">
                    {deleting === post.id ? '…' : 'Delete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
