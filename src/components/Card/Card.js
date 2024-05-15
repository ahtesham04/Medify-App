import React from 'react'
import './Card.css'

const Card = ({data,type}) => {
  return (
    <>
      { type==='service' ? (<div className='card' style={{borderRadius:"22px"}}> <img src={data} alt='card img' className='card-img-top'/></div>) :
      (
        <div className='drCard'>
        <img src={data.imgUrl} alt='card img' className='drImg'/>
        {/* <div className=" drText"> */}
        <h5 className="drName">{data.name}</h5>
        <p className="drSubText">{data.specialist}</p>
      
    {/* </div> */}
  </div>
  )}
  </>
  )
}

export default Card
