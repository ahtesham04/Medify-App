import React from 'react'
import { useLocation } from 'react-router-dom'
import './Hospital.css'
import MedicalCard from '../../MedicalCard/MedicalCard';
import Navbar from '../../Navbar/Navbar'
import sensodyne from '../../../assets/sensodyne_dweb.png.png'

const HospitalDetails = () => {
  const location = useLocation();
  const hospitalData = location.state;
  const totalMedical = hospitalData.length;
  const stateName = hospitalData[0].State
  console.log(hospitalData)
  return (
    <div>
      <div> <Navbar type="detail"/></div>
      <div className='headerBar'></div>
<div className='container'>
    <h2 className='headerText'>{totalMedical} medical centers available in {stateName}</h2>
    <div className='row'>
    <div className='col-8'>
      {hospitalData.length>0 ? (hospitalData.map(item => <MedicalCard data={item} />)) : ('No Data Available')}
    </div>
    <div className='col-4'>
      <div className='card'>
      <img src={sensodyne} alt='sensodyne'/>
      </div>
      
    </div>
    </div>
</div>
    </div>
  )
}

export default HospitalDetails
