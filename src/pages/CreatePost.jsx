import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePosts } from '../context/PostsContext'

export default function CreatePost() {
  const { createPost } = usePosts()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [tags, setTags] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return alert('Title is required')

    setLoading(true)
    try {
      const newPost = await createPost({
        title: title.trim().toLowerCase(),
        content,
        imageURL: imageUrl,
        tags: tags.split(',').map(t => t.trim()).filter(Boolean).join(',')
      })

      navigate(`/post/${newPost.id}`)
    } catch (err) {
      console.error('Failed to create post:', err)
      alert('Failed to create post')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="post-page">
      <form onSubmit={handleSubmit} className="polaroid">
        <label>Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} />

        <label>Content</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} />

        <label>Image URL </label>
        <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} />

        <label>Feelings / Tags (comma separated)</label>
        
        <input value={tags} onChange={e => setTags(e.target.value)} />

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? 'Sharing...' : 'Share'}
          </button>
        </div>
      </form>
    </div>
  )
}
