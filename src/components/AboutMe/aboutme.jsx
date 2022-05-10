import React from 'react'
import './aboutme.css'

import { Me } from './imports'

const aboutme = () => {
  return (
    <div className='website-aboutme' id='#aboutme'>
      <div className='website-aboutme_left'>
        <div className='website-aboutme_left-header'>
          <h1>About Me</h1>
        </div>

        <div className='website-aboutme_left-text'>
          <p> My name is Jeffery and I'm a Game designer. I love playing and creating games using Unity and Unreal Engine. I'm into creating websites like this using web-based programming
            languages like HTML, CSS, React and Javascript. I work with Python and Python Flask and I e
            <a href='#projects'>ven write Fictional Stories. </a> I am an energetic and motivated individual, without the coffee, with a drive to continue learning and expanding my knowledge base. 
            <a href='#contact'><br/>Connect with me @jeff_awagu on instagram or send me a mail at awagujeffery@gmail.com</a>.</p>
        </div>
      </div>

      <div className='website-aboutme_right'>
        <img src={ Me } alt='my_profile_pic'/>
      </div>
    </div>
  )
}

export default aboutme