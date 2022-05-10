import React from 'react'
import './contact.css'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const contact = () => {
  return (
    <div className='website-contact' id='contact'>
      <div className='website-contact-text'>
        <div className='website-contact-text-header'>
          <h1>I'll love to hear from you</h1>
        </div>

        <div className='website-contact-text-other'>
          <p>08121469989</p>
          <p>awagujeffery@gmail.com</p>
        </div>
      </div>

      <div className='website-contact-bottomitems'>
        <div className='website-contact-bottomitems-bottomleft'>
          <p>Designed by Ozoekwe-Awagu Jeffery</p>
        </div>

        <div className='website-contact-bottomitems-icons'>
          <div className='website-contact-icon'>
            <a href=''><FaFacebookF color='white' size={30}/></a>
          </div>

          <div className='website-contact-icon'>
            <a href='https://www.instagram.com/jeff_awagu/'><FaInstagram color='white' size={30}/></a>
          </div>

          <div className='website-contact-icon'>
            <a href='https://www.linkedin.com/in/jeffery-ozoekwe-awagu/'><FaLinkedinIn color='white' size={30}/></a>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default contact