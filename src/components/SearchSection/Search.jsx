import React, { useEffect, useState } from 'react'
import searchIcon from '../../assets/searchicon.png'
import './search.css'
import drImg0 from '../../assets/Doctor.png';
import drImg1 from '../../assets/Drugstore.png';
import drImg2 from '../../assets/Hospital.png';
import drImg3 from '../../assets/Capsule.png';
import drImg4 from '../../assets/Ambulance.png';
import { useNavigate } from 'react-router-dom';
import sIcon from '../../assets/IconS.png'

const Search = () => {
  const[stateList, setStateList] = useState([]);
  const[cityList, setCityList] = useState([]);
  const[selectedState, setSelectedState] = useState('')
  const[selectedCity, setSelectedCity] = useState('')
  const[hospitalData, setHospitalData] = useState([])
const navigate = useNavigate()
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
  navigate('/hospitals',{state:data})
  console.log(data)
}
  useEffect(()=>{
      getStateList()
  },[])

  return (
    <div className='searchContainer'>
      <div className='searchBox'>
        <div className='searchField'>
          <img src={searchIcon} alt="search icon" className='sIcon'/>
          <select value={selectedState}  className='dropdown' onChange={stateHandler}>
            <option value='' disabled>State</option>
            {stateList.map(item => <option value={item}>{item}</option>)}
          </select>
        </div>
        <div className='searchField'>
        <img src={searchIcon} alt="search icon" className='sIcon'/>
          <select className='dropdown' value={selectedCity} onChange={cityHandler}>
            <option value='' disabled>City</option>
            {cityList.map(item => <option value={item}>{item}</option>)}
          </select>
          </div>
          <div>
            <button onClick={getHospitalData} className='searchBtn'><img src={sIcon} alt='sIcon' />Search</button>
          </div>
          <div>
          
          </div>
      </div>
      <div className='category'>
        <p className='cardService'>You May Be Looking For</p>
        <div className='d-flex'>
          <div className='drCards'>
          <img className='drImgs' src={drImg0} alt='card Service0'/>
          <h6>Doctors</h6>
          </div>
          <div className='drCards'>
          <img className='drImgs' src={drImg1} alt='card Service1'/>
          <h6>Labs</h6>
          </div>
          <div className='drCards'>
            <img className='drImgs' src={drImg2} alt='card Service2'/>
            <h6>Hospitals</h6>
          </div>
          <div className='drCards'>
          <img className='drImgs' src={drImg3} alt='card Service3'/>
          <h6>Medical Store</h6>

          </div>
          <div className='drCards'>
          <img className='drImgs' src={drImg4} alt='card Service4'/>
          <h6>Ambulance</h6>
          </div>
         
        </div>

      </div>
    </div>
  )
}

export default Search
