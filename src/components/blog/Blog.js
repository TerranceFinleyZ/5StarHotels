import React from 'react'
import './Blog.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'


const Blog = () => {
  return (
    <div className="blog">
      <div className='blog box'>
        <div className='blog text'>
        </div>
      </div>
      <div>
        <Link to='blogger'>
        <button>
          <h1>Blog</h1>
        </button>
        </Link>
      </div>
      <div className='blog box'>
        <img src="pexels-aleksandar-pasaric-2338113.jpg" alt="" />
      </div>
    </div>
  )
}

export default Blog
