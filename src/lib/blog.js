import { supabase } from './supabase'

// ─── Posts ────────────────────────────────────────────────────────────────────

export async function getPosts({ limit } = {}) {
  let query = supabase
    .from('posts')
    .select('id, title, slug, excerpt, thumbnail_url, published_at')
    .order('published_at', { ascending: false })
  if (limit) query = query.limit(limit)
  const { data, error } = await query
  if (error) throw error
  return data
}

export async function getPost(slug) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error) throw error
  return data
}

export async function createPost(post) {
  const { data, error } = await supabase
    .from('posts')
    .insert([post])
    .select()
    .single()
  if (error) throw error
  return data
}

export async function updatePost(id, updates) {
  const { data, error } = await supabase
    .from('posts')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deletePost(id) {
  const { error } = await supabase.from('posts').delete().eq('id', id)
  if (error) throw error
}

// ─── Image upload ─────────────────────────────────────────────────────────────

export async function uploadImage(file) {
  const ext = file.name.split('.').pop()
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
  const { error } = await supabase.storage
    .from('blog-images')
    .upload(path, file, { cacheControl: '3600', upsert: false })
  if (error) throw error
  const { data } = supabase.storage.from('blog-images').getPublicUrl(path)
  return data.publicUrl
}

// ─── Slug helper ──────────────────────────────────────────────────────────────

export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    + '-' + Date.now().toString(36)
}
