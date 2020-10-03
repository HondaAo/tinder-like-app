import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton  from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const SwipeButtons = () => {
    return (
        <div className="swipe-button">
         <IconButton>
         <Link to="/home"><ReplayIcon fontSize="large" className="swipe-button-replay" /></Link>
         </IconButton>
         <IconButton>
             <CloseIcon fontSize="large" className="swipe-button-left" />
         </IconButton>
         <IconButton>
             <Link to="/add"><AddIcon fontSize="large" className="swipe-button-star" /></Link>
         </IconButton>
         <IconButton>
             <FavoriteIcon fontSize="large" className="swipe-button-right" />
         </IconButton>
         <IconButton>
             <FlashOnIcon fontSize="large" className="swipe-button-lightning"/>
         </IconButton>
        </div>
    )
}

export default SwipeButtons
