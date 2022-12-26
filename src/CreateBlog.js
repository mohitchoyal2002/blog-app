import React, { useState } from 'react'
import './CreateBlog.css'
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';
import {postBlog} from './features/blogSlice'
import {useNavigate} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'

const CreateBlog = () => {

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [discription, setDiscription] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePost = (e)=>{
    e.preventDefault();
    dispatch(postBlog({
      title: title,
      image: image,
      discription:discription
    }))

    setTitle('');
    setImage('')
    setDiscription('')
    navigate('../')
    
  }

  return (
    <div className='create__blog'>
      <div className="back-div">
        <Link to='/' className='back-link'><h4><ArrowBackIcon />  Back</h4></Link>
      </div>
        <form onSubmit={handlePost}>
            <input className = 'text-input' type="text" placeholder='Enter The Title' value={title} onChange = {e=>setTitle(e.target.value)} required/>
            <input className = 'text-input' type="text" placeholder='Link Of The Image' value={image} onChange={e=>setImage(e.target.value)} required/>
            <textarea className = 'textarea-input' placeholder='Discription...' rows={20} cols={100} value={discription} onChange={e=>setDiscription(e.target.value)}></textarea>
            <div className="btn-div" required>
                <button className='btn btn-dark btn-lg'>Post Blog  <SendIcon/></button>
            </div>
        </form>
    </div>
  )
}

export default CreateBlog