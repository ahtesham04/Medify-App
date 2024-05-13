import React from 'react'

const Card = ({imgUrl}) => {
  return (
    <div className='card' style={{borderRadius:"22px"}}>
      <img src={imgUrl} alt='card img' className='card-img-top'/>
    </div>
  )
}

export default Card
