import React from 'react'
import image from '../images/photo-grid.png'
import './comp.css'

const Hero = () => {
  return (
    <section className='hero'>
        <img className='hero-img' src={image}/>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero