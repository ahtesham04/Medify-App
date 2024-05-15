import React from 'react'
import Carausel from '../Carausel/Carausel'
import {drSpecialist} from '../../constant/data'
import './Specialist.css'

const Specialist = () => {
  return (
    <div>
      
    <div className='drContainer'>
    <div className='textContainer'>
            <h2>Our Medical Specialist</h2>
        </div>
        <Carausel allData={drSpecialist} type='specialist' />
      
    </div>
    </div>
  )
}

export default Specialist
