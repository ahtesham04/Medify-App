import React from 'react';
import './medicalCard.css'

const MedicalCard = ({data}) => {

  return (
    <div className='card medicalCard'>
        <div className='row'>
        <div className='col-2'></div>
        <div className='col-6'>
            <h5>{data['Hospital Name']}</h5>
            <h6>{data.City},{data.State}</h6>
        </div>
        <div className='col-4 d-flex align-items-end'>
            <button>Book Free Center Visit</button>
        </div>
        </div>
    </div>
  )
}

export default MedicalCard