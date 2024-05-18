import React from 'react'
import simg1 from '../../assets/Frame 1000011411.png'
import simg2 from '../../assets/Frame 1000011411 (1).png'
import simg3 from '../../assets/Frame 1000011411 (2).png'
import simg4 from '../../assets/Frame 1000011411 (3).png'
import simg5 from '../../assets/Frame 1000011411 (4).png'
import simg6 from '../../assets/Frame 1000011411 (5).png'
import simg7 from '../../assets/Frame 1000011411 (6).png'
import simg8 from '../../assets/Frame 1000011411 (7).png'
import './Services.css'
const Service = () => {
  return (
    <div style={{background:'linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)'
    }}>
        <div className='textContainer'>
            <h2>Find by Specialisation</h2>
        </div>
    <div className='container serviceContained'>

        <div className='row g-3'>
            <div className='col-3'>
                <div className='serviceCard'>
                    <img alt="img" className='serviceImg' src={simg1} />

                </div>

            </div>
            <div className='col-3'>
            <div className='serviceCard'>
                    <img alt="img"  src={simg2} />

                </div>
            </div>
            <div className='col-3'>
            <div className='serviceCard'>
                    <img alt="img"  src={simg3} />

                </div>
            </div>
            <div className='col-3'>
            <div className='serviceCard'>
                    <img alt="img"  src={simg4} />

                </div>
            </div>
            <div className='col-3'>
            <div className='serviceCard'>
                    <img alt="img"  src={simg5} />

                </div>
            </div>
            <div className='col-3'>
            <div className='serviceCard'>
                    <img alt="img"  src={simg6} />

                </div>
            </div>
            <div className='col-3'>
            <div className='serviceCard'>
                    <img alt="img"  src={simg7} />

                </div>
            </div>
            <div className='col-3'>
            <div className='serviceCard'>
                    <img alt="img"  src={simg8} />

                </div>
            </div>
        </div>
      
    </div>
    <div className='btnContainer'>
        <button className='serviceBtn'>View All</button>
    </div>
    </div>
  )
}

export default Service
