import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
        <div className='card-top'>
            <h1>{props.name}</h1>
        </div>
        <div className='card-bottom'>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Card