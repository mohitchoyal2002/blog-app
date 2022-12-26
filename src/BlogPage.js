import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './BlogPage.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BlogPage = () => {
  const {state} = useLocation()
    const {blog} = state
    console.log(state)
  return (
    <div className='blog-page container'>
      <div className="back-div">
        <Link to='/' className='back-link'><h4><ArrowBackIcon />  Back</h4></Link>
      </div>
        <h1>{blog.title}</h1>
        <img className='blog-img' src={blog.image} alt="" />
        <h4 className='blog-dis'>{blog.discription}</h4>
    </div>
  )
}

export default BlogPage