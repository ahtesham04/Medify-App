import React, { useState } from 'react';
import './medicalCard.css';
import medical from '../../assets/div.u-pos-has.png';
import like from '../../assets/Vector (1).png'
import SlotCarausal from '../SlotCarausal/SlotCarausal';

const MedicalCard = ({data}) => {
const[showBooking, setShowBooking] = useState(false);
  return (
    <div className='card medicalCard' >
        <div className='row' style={{gap:"18px"}} onClick={() => setShowBooking(!showBooking)}>
        <div className='col-2'>
          <img src={medical} alt='medicals' />
        </div>
        <div className='col-5'>
            <h5 className='hName'>{data['Hospital Name']}</h5>
            <h6>{data.City},{data.State}</h6>
            <p>Smilessence Center for Advanced Dentistry + 1</p>
            <p>more</p>
            <p><span>FREE</span> <span>500</span>Consultation fee at clinic</p>
            <div className='likes'><img  src={like} alt='like' style={{margin:"5px"}}/>{data['Hospital overall rating']}</div>
        </div>
        <div className='col-4 d-flex align-items-end'>
          <div>
            <p className='available'>Available Today</p>
            <button className='bookBtn'>Book Free Center Visit</button>
            </div>
        </div>
        </div>
        {showBooking ? (<div className='slotBooking'>
        <SlotCarausal />
        <div className='row g-4 mt-2'>
            <div className='col-2'>Morning</div>
            <div className='col-2'><div className='time'>10:00AM </div></div>
            <div className='col-2'><div className='time'>11:00AM</div></div>
            <div className='col-2'></div>
            <div className='col-2'></div>
            <div className='col-2'></div>
            <div className='col-2'>Afternoon</div>
            <div className='col-2'></div>
            <div className='col-2'><div className='time'>01:00PM</div></div>
            <div className='col-2'><div className='time'>03:00PM</div></div>
            <div className='col-2'><div className='time'>04:30PM</div></div>
            <div className='col-2'></div>
            <div className='col-2'>Evening</div>
            <div className='col-2'></div>
            <div className='col-2'></div>
            <div className='col-2'></div>
            <div className='col-2'></div>
            <div className='col-2'><div className='time'>07:00PM</div></div>
        </div>
        </div>) : ('')}
    </div>
  )
}

export default MedicalCard