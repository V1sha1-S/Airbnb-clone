import React from 'react'
import './comp.css'
import image from '../images/katie-zaferes.png'
import image1 from '../images/star.png'

const Card = () => {
  return (
    <section className='card'>
        <img src={image} className='card-image'/>
        <div className="card--stats">
            <img className="card-star"src={image1}/>
            <span>5.0</span>
            <span className='gray'>(6) • </span>
            <span className='gray'>USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136</span> / person</p>
    </section>
  )
}

export default Card