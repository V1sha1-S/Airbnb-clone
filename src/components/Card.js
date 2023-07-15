import React from 'react'
import './comp.css'
import image1 from '../images/star.png'

const Card = (props) => {
  console.log(props)
  return (
    <section className='card'>
      <img src={require(`../images/${props.img}`)} className="card--image" />
      <div className="card--stats">
        <img src={image1} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </section>
  )
}

export default Card