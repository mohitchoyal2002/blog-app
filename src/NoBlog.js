import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create';

const NoBlog = () => {
	return (
		<div className='home no__home'>
			<div className="btn-div">
        <Link to = '/create-blog'>
          <button className='btn btn-dark btn-lg'><CreateIcon/>  Create Blog</button>
        </Link>
				<h1 className='no__head'>No Blogs Available Currently</h1>
      </div>
		</div>
	)
}

export default NoBlog