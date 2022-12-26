import React from 'react'
import './Home.css'
import BlogCard from './BlogCard'
import {allBlogs} from './features/blogSlice'
import CreateIcon from '@mui/icons-material/Create';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import NoBlog from './NoBlog';

const Home = () => {

  const myBlogs = useSelector(allBlogs)
  let renderCard
  
  if(myBlogs === null){
    return(
      <NoBlog/>
    )
  }
  else{

    renderCard = myBlogs.map((blog)=>{
      // console.log(blog);
      return(<BlogCard blog = {blog}/>)
    })
  }


  return (
    <div className='home'>
      <div className="btn-div">
        <Link to = '/create-blog'>
          <button className='btn btn-dark btn-lg'><CreateIcon/>  Create Blog</button>
        </Link>
      </div>
      <div className="row card__row">
        {renderCard}
      </div>
    </div>
  )
}

export default Home