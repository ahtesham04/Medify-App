import React from 'react'
import { useLocation } from 'react-router-dom'
import './Hospital.css'

const HospitalDetails = () => {
  const location = useLocation();
  const hospitalData = location.state;
  const totalMedical = hospitalData.length;
  const stateName = hospitalData[0].State
  console.log(hospitalData)
  return (
    <div>
<div className='container'>
    <h2 className='headerText'>{totalMedical} medical centers available in {stateName}</h2>
</div>
    </div>
  )
}

export default HospitalDetails
