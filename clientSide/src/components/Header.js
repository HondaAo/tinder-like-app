import React, { useContext, useEffect } from 'react'
import PersonalIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/authContext';
import './Component.css'


const Header = () => {
    const { user } = useContext(AuthContext);
    const userId = user.i.u;
    return (
        <div className="header">
        <IconButton>
         <Link to={`/account/id#${userId}`}><PersonalIcon fontSize="large" className="header_icon" /></Link>
        </IconButton>
        <IconButton>
        <Link to="/"><img src={logo} className="header-logo" alt=""/></Link>
        </IconButton>
        <IconButton>
         <ForumIcon />
        </IconButton>
        </div>
    )
}

export default Header
