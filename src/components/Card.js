import React from 'react'
import './comp.css'
import image from '../images/katie-zaferes.png'
import image1 from '../images/star.png'

const Card = (props) => {
  console.log(props)
  return (
    <section className='card'>
        <img src={image} className='card-image'/>
        <div className="card--stats">
            <img className="card-star"src={image1}/>
            <span>{props.rating}</span>
            <span className='gray'>({props.reviewCount})• </span>
            <span className='gray'>{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className='bold'>From ${props.price}</span> / person</p>
    </section>
  )
}

export default Card