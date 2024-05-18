import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Hospital.css'
import MedicalCard from '../../MedicalCard/MedicalCard';
import Navbar from '../../Navbar/Navbar'
import sensodyne from '../../../assets/sensodyne_dweb.png.png';
import locationIcon from '../../../assets/Icon (4).png'
import Faq from '../../Faq/Faq';
import Footer from '../../Footer/Footer';
import sIcon from '../../../assets/IconS.png';
import vIcon from '../../../assets/verify.png';

const HospitalDetails = () => {
  const[medicalCenters, setMedicalCenters] = useState([])
  const location = useLocation();
  const[stateList, setStateList] = useState([]);
  const[cityList, setCityList] = useState([]);
  const[selectedState, setSelectedState] = useState('')
  const[selectedCity, setSelectedCity] = useState('')
  // const[hospitalData, setHospitalData] = useState([])
// const navigate = useNavigate()
  const getStateList = async() =>{
    const res = await fetch('https://meddata-backend.onrender.com/states')
    const data = await res.json();
console.log(data)
    setStateList(data)
  }
const getCitiesList = async(stateName) =>{
  const res = await fetch(`https://meddata-backend.onrender.com/cities/${stateName}`)
  const data = await res.json();
console.log(data)
  setCityList(data)
}
  const stateHandler = (e) =>{
    let dropdownValue =e.target.value 
    setSelectedState(dropdownValue)
    getCitiesList(dropdownValue)
  }
const cityHandler = (e) =>{
  setSelectedCity(e.target.value)
}
const getHospitalData = async() =>{
  const res = await fetch(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`)
  const data = await res.json()
  // navigate('/hospitals',{state:data})
  // console.log(data)
  setMedicalCenters(data)
}
  useEffect(()=>{
      getStateList()
      if(location.state !== null){
        const hospitals = location.state;
        setMedicalCenters(hospitals)
      }
  },[])

  
  return (
    <div>
      <div> <Navbar type="detail"/></div>
      <div className='headerBar'>
        <div className='container barContainer'>
        <div className='searchBox2'>
        <div className='searchField2'>
          <img src={locationIcon} alt="search icon" className='sIcon2'/>
          <select value={selectedState} onChange={stateHandler} className='dropdown2'>
            <option value='' disabled>State</option>
            {stateList.map(item => <option value={item}>{item}</option>)}
          </select>
        </div>
        <div className='searchField'>
        <img src={locationIcon} alt="search icon" className='sIcon2'/>
          <select value={selectedCity} onChange={cityHandler} className='dropdown3'>
            <option value='' disabled>City</option>
            {cityList.map(item => <option value={item}>{item}</option>)}
          </select>
          </div>
          <div>
            <button onClick={getHospitalData}  className='searchBtn2'><img src={sIcon} alt='sIcon' />Search</button>
          </div>
          <div>
          
          </div>
      </div>
        </div>
      </div>
      <div className='mainContent'>
<div className='container'>
    <h2 className='headerText' style={{paddinTop:"90px"}}>{medicalCenters?.length} medical centers available in {medicalCenters[0]?.State}</h2>
    <p className='notify'><img src={vIcon} alt='vIcon' />Book appointments with minimum wait-time & verified doctor details</p>
    <div className='row'>
    <div className='col-8'>
      {medicalCenters.length>0 ? (medicalCenters.map(item => <MedicalCard data={item} />)) : ('No Data Available')}
    </div>
    <div className='col-4'>
      <div className='card'>
      <img src={sensodyne} alt='sensodyne'/>
      </div>
      
    </div>
    </div>
</div>
</div>
<Faq />
<Footer />
    </div>
  )
}

export default HospitalDetails
