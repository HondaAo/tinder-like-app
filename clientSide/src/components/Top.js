import React from 'react'
import Button  from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Top = () => {
    return (
        <div className="top-page">
            <header className="top-page-header">
             <h2>Tinder</h2>
             <Button className="button"><Link to="/login" className="link-line">Login</Link></Button>
            </header>
            <main className="top-page-main">
             <div className="neon">
             <h1><span>Swipe</span><br /><span>Night</span></h1>
             </div>
             <h2>Let's explore new world</h2>
             <p>Create new friend and new story</p>
             <Button className="button"><Link to="/home" className="link-line">Get started</Link></Button>
            </main>
        </div>
    )
}

export default Top
