import React from 'react'
import './project_s.css' 

const project_s = ({image, text}) => {
  return (
    <div className='website-project'>
      <div className='website-project_card'>
        <div className='website-project_card-image'>
          <img src={image} alt='Project-Photo' />
        </div>

        <div className='website-project_card-text'>
          <p>{text}</p>
        </div>
      </div>

    </div>
  )
}

export default project_s