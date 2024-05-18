import React, { useState } from 'react'
import './mybooking.css'
import MedicalCard from '../../MedicalCard/MedicalCard';
import Navbar from '../../Navbar/Navbar'
import sensodyne from '../../../assets/sensodyne_dweb.png.png';
import sIcon from '../../../assets/IconS.png';
import BookingCard from '../../BookingCard/BookingCard';
import Footer from '../../Footer/Footer';
const getBookingDataFromLocalStorage = () =>{
    let data = JSON.parse(localStorage.getItem("myBooking"))
    console.log(data,'data')
    if(data.length>0){
      return data    
    }
    return []
}
const MyBooking = () => {
    const[bookingData,setBookingData] = useState(getBookingDataFromLocalStorage())
  return (
    <div>
    <div> <Navbar type="detail"/></div>
    <div className='headerBar'>
        <div className='container headerContainer'>
        <p className='bookingText'>MyBooking</p>
        <div className='searchBar d-flex'>
        <input type='text' placeholder='Search By Hospital' className='headerSearch'/>
        <button className='searchB'><img src={sIcon} />Search</button>
        </div>
        </div>
        </div>
<div className='container mt-5'>
  {/* <h2 className='headerText'>{totalMedical} medical centers available in {stateName}</h2> */}
  <div className='row'>
  <div className='col-8'>
    {bookingData.length>0 ? (bookingData.map(item => <BookingCard data={item} />)) : ('No Data Available')}
  </div>
  <div className='col-4'>
    <div className='card'>
    <img src={sensodyne} height="269" alt='sensodyne'/>
    </div>
    
  </div>
  </div>
</div>
<Footer />
  </div>
  )
}

export default MyBooking
