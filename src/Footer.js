import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import IconButton from '@mui/material/IconButton';
import { pink } from '@mui/material/colors';

const Footer = () => {
  return (
    <div className='footer'>
        <h2>Contact Us</h2>
        <div className="socials__icons">
            <IconButton href="https://www.linkedin.com/in/mohit-choyal/" target='_blank'>
                <LinkedInIcon fontSize='large' color="primary" />
            </IconButton>
            <IconButton href="https://github.com/mohitchoyal2002" target='_blank'>
                <GitHubIcon fontSize='large'/>
            </IconButton>
            <IconButton href="https://www.instagram.com/mohitchoyal2002/" target='_blank'>
                <InstagramIcon fontSize='large' sx={{ color: pink[500] }}/>
            </IconButton>
        </div>
        <h6><CopyrightIcon sx={{ fontSize: 15 }}/> 2022 Zummit Infolab, India</h6>
    </div>
  )
}

export default Footer