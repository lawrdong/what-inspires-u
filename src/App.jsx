import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import CreatePost from './pages/CreatePost/CreatePost'
import PostPage from './pages/PostPage/PostPage'
import { PostsProvider } from './context/PostsContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

// App sets up routing and provides the PostsProvider for local state
export default function App() {
  return (
    <PostsProvider>
      <div className="app">
        <Hero />
        <Header />
        <main className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </PostsProvider>
  )
}
