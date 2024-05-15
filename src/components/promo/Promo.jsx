import React from 'react'
import Carausel from '../Carausel/Carausel'
import './promo.css'
import {promoImg} from '../../constant/data';

const Promo = () => {
  return (
    <div className='promoContent container'>
      <Carausel allData={promoImg} type='service'/>
    </div>
  )
}

export default Promo
