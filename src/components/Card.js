import React from 'react'
import "./Card.css";
import {BsArrowRight} from "react-icons/bs";
const Card = ({title,details,link,image}) => {
  return (
    <div className="card">
            <div className="card-details">
                <h2>{title}</h2>
                <h3>{details}</h3>
                <p className='link'>{link}<BsArrowRight className='icon'/></p>
            </div>
            <div className="card-image">
                <img src={image} alt="card-img" />
            </div>
    </div>
  )
}

export default Card