import React from 'react'
import './home.css'

import { Logo } from './import.js'

const home = () => {
  return (
    <div className='website-home scale-up-center' id='#home'>
      <div className='website-home_image'>
        <img src={Logo} alt='logo' />
      </div>

      <div className='website-home_text'>
        <h1>Web and Game Designer</h1>
      </div>

      <div className='website-home_button'>
        <button className='button'><a href = 'https://www.dropbox.com/s/4wff5ing9iu9gdn/Jeffery%27s%20CV.docx?dl=0'>Check out my Resume</a></button>
      </div>
    </div>
  )
}

export default home