import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <div className='website-navbar scale-up-center'>
        <div className='website-navbar_name'>
            <p>Ozoekwe-Awagu Jeffery</p>
        </div>

        <div className='website-navbar_button'>
            <button className='button'><a href='#projects'>What I do</a></button>
        </div>
    </div>
  )              
}

export default navbar