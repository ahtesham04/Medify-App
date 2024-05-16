import React from 'react'
import blogCard from '../../assets/div.st4-blog-single.png'
import './Blog.css'

const Blog = () => {
  return (
    <div className='container'>
        <div className='textContent'>
            <h5>Blog and News</h5>
            <h2>Read Our Latest News</h2>
        </div>
        
        <div className='row'>
            <div className='col-4'>
                <img className='cardImg' src={blogCard}/>
            </div>
            <div className='col-4'>
                <img className='cardImg' src={blogCard}/>
            </div>
            <div className='col-4'>
                <img className='cardImg' src={blogCard}/>
            </div>

            </div> 
      
    </div>
  )
}

export default Blog
