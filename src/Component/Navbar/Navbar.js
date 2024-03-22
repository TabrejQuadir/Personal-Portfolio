import React from 'react';
import './Navbar.scss'
import Sidebar from '../Sidebar/Sidebar';


const Navbar = () => {
    return (
        <div className='navbar'>
            {/* {Sidebar} */}
            <Sidebar/>
            <div className='wrapper'>
                <span>Tabrej Quadir</span>
                <div className='social'>
                <a href='https://www.google.com/'><img src='/facebook.png' alt='' /></a>
                <a href='#'><img src='/insta.png' alt=''  /></a>
                <a href='#'><img src='linkdin.png' alt=''  /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar