import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
  return (
    <div className="card">
      <img alt='Robots' src={`https://robohash.org/${id}`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;