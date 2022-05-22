import React from 'react'
import './projects.css'

import { projectImage, projectImage1, projectImage2 } from './import.js'

import { SingleProject } from '../index.js'

const project = () => {
  return (
    <div className='website-projects' id='projects'>
      <div className='website-projects-title'>
        <h1>My Projects</h1>
      </div>

      <div className='website-projects-containers'>
        <a href='https://jeffery-awagu.itch.io'>
          <div className='website-projects-containers-single'>
            <SingleProject text='Game Design' imageVariable={projectImage} />
          </div>
        </a>

        <a href='https://jefferysnumberguess.herokuapp.com/'>
          <div className='website-projects-containers-single'>
            <SingleProject text='Guess the Number' imageVariable={projectImage2} />
          </div>
        </a>

        <a href='https://jefferyshangmangame.herokuapp.com/'>
          <div className='website-projects-containers-single'>
            <SingleProject text='Hangman' imageVariable={projectImage1} />
          </div>
        </a>

      </div>
    </div>
  )
}

export default project