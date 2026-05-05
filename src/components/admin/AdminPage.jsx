import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import AdminDashboard from './AdminDashboard'

export default function AdminPage() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => subscription.unsubscribe()
  }, [])

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    const { error: err } = await supabase.auth.signInWithPassword({ email, password })
    if (err) setError(err.message)
    setSubmitting(false)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#facd12]/30 border-t-[#facd12] rounded-full animate-spin" />
      </div>
    )
  }

  if (session) return <AdminDashboard onLogout={handleLogout} />

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        {/* Logo + label */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <img src="/CompanyLogoFlatYellowClear.png" alt="Salt and Light Technologies" className="h-8 w-auto" />
          <span className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest">Owner Access</span>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                   className="w-full bg-[#111] border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#facd12] focus:ring-1 focus:ring-[#facd12]/30 transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                   className="w-full bg-[#111] border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#facd12] focus:ring-1 focus:ring-[#facd12]/30 transition-all" />
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button type="submit" disabled={submitting}
                  className="mt-2 w-full py-3.5 rounded-xl font-semibold text-sm text-[#0B0B0B] bg-[#facd12] hover:brightness-110 disabled:opacity-50 transition-all">
            {submitting ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
