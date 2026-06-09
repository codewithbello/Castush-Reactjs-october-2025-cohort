import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='brand-wrapper flex-row'>
            <p>🎬</p>
            <h1>AhFlix</h1>
        </div>

        <div className='menu-container flex-row'>
            <button className='btn'>All Movies</button>
            <button className='btn'>My Favorites</button>
        </div>
    </div>
  )
}

export default NavBar