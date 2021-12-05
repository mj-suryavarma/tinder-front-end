import React from 'react'
import './header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/ForumTwoTone';

 
function Header() {
    return (
        <div className="header">
             <IconButton>
             <PersonIcon className="person_icon" fontSize="large" />
             </IconButton>

             <img
              className='header_logo' 
             src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"></img>
   
        <ForumIcon fontSize="large" className="header_icon" />
   
        </div>
   
        );


}

export default Header
