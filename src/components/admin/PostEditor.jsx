import { useState, useRef } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import { createPost, updatePost, uploadImage, slugify } from '../../lib/blog'

const inputCls = 'w-full bg-[#0d0d0d] border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-[#facd12] focus:ring-1 focus:ring-[#facd12]/30 transition-all'

export default function PostEditor({ post, onSave, onCancel }) {
  const isEdit = !!post

  const [title, setTitle] = useState(post?.title ?? '')
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '')
  const [thumbnailUrl, setThumbnailUrl] = useState(post?.thumbnail_url ?? '')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [uploadingThumb, setUploadingThumb] = useState(false)
  const thumbRef = useRef()
  const imageInsertRef = useRef()

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false, allowBase64: false }),
      Placeholder.configure({ placeholder: 'Paste or type your post content here. You can paste images directly too.' }),
    ],
    content: post?.content ?? '',
    editorProps: {
      attributes: { class: 'tiptap-editor' },
      handlePaste(view, event) {
        const items = Array.from(event.clipboardData?.items || [])
        const imageItem = items.find(item => item.type.startsWith('image/'))
        if (imageItem) {
          event.preventDefault()
          const file = imageItem.getAsFile()
          uploadImage(file)
            .then(url => {
              const { schema } = view.state
              const node = schema.nodes.image.create({ src: url })
              const tr = view.state.tr.replaceSelectionWith(node)
              view.dispatch(tr)
            })
            .catch(err => setError('Image upload failed: ' + err.message))
          return true
        }
        return false
      },
    },
  })

  const toolbar = [
    { label: 'B',  title: 'Bold',      action: () => editor.chain().focus().toggleBold().run(),                active: () => editor?.isActive('bold') },
    { label: 'I',  title: 'Italic',    action: () => editor.chain().focus().toggleItalic().run(),              active: () => editor?.isActive('italic') },
    { label: 'H1', title: 'Heading 1', action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), active: () => editor?.isActive('heading', { level: 1 }) },
    { label: 'H2', title: 'Heading 2', action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: () => editor?.isActive('heading', { level: 2 }) },
    { label: 'H3', title: 'Heading 3', action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), active: () => editor?.isActive('heading', { level: 3 }) },
    { label: '—',  title: 'Divider',   action: () => editor.chain().focus().setHorizontalRule().run(),         active: () => false },
  ]

  // ─── Thumbnail ───────────────────────────────────────────────────────────────

  async function handleThumbFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadingThumb(true)
    try {
      const url = await uploadImage(file)
      setThumbnailUrl(url)
    } catch (err) {
      setError('Thumbnail upload failed: ' + err.message)
    } finally {
      setUploadingThumb(false)
    }
  }

  // ─── Insert image via button ──────────────────────────────────────────────────

  async function handleImageInsert(e) {
    const file = e.target.files?.[0]
    if (!file || !editor) return
    e.target.value = ''
    try {
      const url = await uploadImage(file)
      editor.chain().focus().setImage({ src: url }).run()
    } catch (err) {
      setError('Image upload failed: ' + err.message)
    }
  }

  // ─── Save ─────────────────────────────────────────────────────────────────────

  async function handleSave() {
    if (!title.trim()) { setError('Title is required.'); return }
    if (!editor) return
    setError('')
    setSaving(true)
    try {
      const payload = {
        title: title.trim(),
        excerpt: excerpt.trim() || null,
        thumbnail_url: thumbnailUrl.trim() || null,
        content: editor.getHTML(),
        published_at: post?.published_at ?? new Date().toISOString(),
      }
      if (isEdit) {
        await updatePost(post.id, payload)
      } else {
        await createPost({ ...payload, slug: slugify(title) })
      }
      onSave()
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b bg-[#0B0B0B]/90 backdrop-blur-md"
           style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <button onClick={onCancel}
                  className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </button>
          <span className="text-xs text-zinc-500 font-medium">{isEdit ? 'Edit Post' : 'New Post'}</span>
          <button onClick={handleSave} disabled={saving}
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold text-[#0B0B0B] bg-[#facd12] hover:brightness-110 disabled:opacity-50 transition-all">
            {saving ? 'Saving…' : isEdit ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <div className="flex flex-col gap-7">

          {error && (
            <div className="px-4 py-3 rounded-lg text-sm text-red-400"
                 style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-2">Title *</label>
            <input value={title} onChange={e => setTitle(e.target.value)}
                   placeholder="Post title"
                   className={inputCls + ' text-xl font-bold'} />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-2">
              Excerpt <span className="text-zinc-700 normal-case tracking-normal font-normal">(shown on blog cards)</span>
            </label>
            <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)}
                      rows={2} placeholder="A short summary of the post…"
                      className={inputCls + ' resize-none'} />
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-2">Thumbnail Image</label>
            <div className="flex flex-col gap-3">
              {thumbnailUrl && (
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden"
                     style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <img src={thumbnailUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                  <button onClick={() => setThumbnailUrl('')}
                          className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs"
                          style={{ background: 'rgba(0,0,0,0.6)' }}>✕</button>
                </div>
              )}
              <div className="flex items-center gap-3">
                <button onClick={() => thumbRef.current?.click()}
                        disabled={uploadingThumb}
                        className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-colors disabled:opacity-40"
                        style={{ border: '1px solid rgba(255,255,255,0.08)', background: '#111' }}>
                  {uploadingThumb ? 'Uploading…' : '↑ Upload image'}
                </button>
                <span className="text-zinc-700 text-xs">or</span>
                <input value={thumbnailUrl} onChange={e => setThumbnailUrl(e.target.value)}
                       placeholder="Paste image URL"
                       className="flex-1 bg-[#0d0d0d] border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-[#facd12] transition-all" />
              </div>
              <input ref={thumbRef} type="file" accept="image/*" className="hidden" onChange={handleThumbFile} />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

          {/* Rich text editor */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-[10px] font-semibold text-zinc-600 uppercase tracking-widest">Content</label>
              <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white cursor-pointer transition-colors"
                     style={{ border: '1px solid rgba(255,255,255,0.08)', background: '#111' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="4" cy="4.5" r="1" fill="#facd12"/>
                  <path d="M1 8.5l3-3 2.5 2.5L8.5 6l2.5 2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Insert image
                <input ref={imageInsertRef} type="file" accept="image/*" className="hidden" onChange={handleImageInsert} />
              </label>
            </div>

            {/* Formatting toolbar */}
            <div className="flex items-center gap-1 mb-2">
              {toolbar.map(btn => (
                <button key={btn.label} title={btn.title} onClick={btn.action}
                        className={`px-2 h-7 rounded text-xs font-semibold transition-colors ${
                          btn.active?.()
                            ? 'bg-[#facd12] text-[#0B0B0B]'
                            : 'text-zinc-500 hover:text-white'
                        }`}
                        style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Editor */}
            <div className="rounded-xl overflow-hidden"
                 style={{ border: '1px solid rgba(255,255,255,0.08)', background: '#0d0d0d' }}>
              <EditorContent editor={editor} />
            </div>
            <p className="text-[10px] text-zinc-700 mt-2">
              Paste text and images directly into the editor. Use the toolbar to add headings or formatting.
            </p>
          </div>

        </div>
      </main>

      <style>{`
        .tiptap-editor {
          min-height: 420px;
          padding: 1.25rem 1.5rem;
          color: #d4d4d8;
          font-size: 0.9rem;
          line-height: 1.85;
          outline: none;
        }
        .tiptap-editor h1 { color: #fff; font-size: 1.7rem; font-weight: 700; margin: 1.2em 0 0.5em; line-height: 1.2; }
        .tiptap-editor h2 { color: #fff; font-size: 1.3rem; font-weight: 600; margin: 1em 0 0.4em; line-height: 1.3; }
        .tiptap-editor h3 { color: #e4e4e7; font-size: 1.05rem; font-weight: 600; margin: 0.9em 0 0.3em; }
        .tiptap-editor p { margin: 0 0 0.8em; }
        .tiptap-editor p:last-child { margin-bottom: 0; }
        .tiptap-editor strong { color: #fff; font-weight: 600; }
        .tiptap-editor em { font-style: italic; }
        .tiptap-editor hr { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 1.5em 0; }
        .tiptap-editor img { max-width: 100%; border-radius: 10px; margin: 1em 0; border: 1px solid rgba(255,255,255,0.07); display: block; }
        .tiptap-editor ul { list-style: disc; padding-left: 1.4em; margin: 0.5em 0 0.8em; }
        .tiptap-editor ol { list-style: decimal; padding-left: 1.4em; margin: 0.5em 0 0.8em; }
        .tiptap-editor li { margin-bottom: 0.3em; }
        .tiptap-editor p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: #3f3f46;
          pointer-events: none;
          float: left;
          height: 0;
        }
      `}</style>
    </div>
  )
}
