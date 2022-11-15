import style from '../style.css';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
const Header = () => {
    const [showNav, setShowNav] = React.useState(false)
    const mobileNav = () =>{
            setShowNav(prevShowNav => !prevShowNav)
            console.log(showNav)
    }
    return (
        <div>
        <div className='nav'>
            <span>
                <input type='text' placeholder='Search for 1000s of items...' className='center'></input>
            </span>
            <span className='navList'>
                <Link to='/' className='navItem'>Home</Link>
                <Link to='/account' className='navItem'>Account</Link>
                <Link to='/orders' className='navItem'>Orders</Link>
                <Link to='/help' className='navItem'>Help</Link>
            </span>
            <span>
                <i></i>
                <Link to='/cart' className='cart'>Your Cart</Link>
            </span>
        </div>
        <div className='mobileNavContainer'>
            <div className={showNav ? "showClose": "showButton"}onClick={mobileNav}>{showNav ? 'Close' : 'Menu'}</div>
            <div className={showNav ? "mobileNavShow" : "mobileNavHide"}>
                <span>
                    <input type='text' placeholder='Search for 1000s of items...' className='center'></input>
                </span>
                <span className='navList'>
                    <Link to='/' className='navItem'>Home</Link>
                    <Link to='/account' className='navItem'>Account</Link>
                    <Link to='/orders' className='navItem'>Orders</Link>
                    <Link to='/help' className='navItem'>Help</Link>
                </span>
                <span>
                    <i></i>
                    <Link to='/cart' className='cart'>Your Cart</Link>
                </span>
            </div>
        </div>
        </div>

    )

}


export default Header;