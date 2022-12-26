import React from 'react'
import './BlogCard.css'
import {useNavigate} from 'react-router-dom'


const BlogCard = (props) => {
  const {blog} = props

  const navigate = useNavigate();
  // console.log(blog);
  const discription = blog.discription;

  const showBlog = () => {
    // console.log(blog.title)
    navigate('/read-blog', {state:{blog}})
  }

  return (
    <div onClick={showBlog} className='blog__div col-lg-4 col-md-6'>
        <img src={blog.image} alt="" />
        <h3>{`${blog.title.substr(0, 20)}...`}</h3>
        <h5>{`${discription.substr(0, 50)}....`}</h5>
    </div>
  )
}

export default BlogCard