import React from 'react';
import './Card.css';

function Card({ title, status, description, rating, imageUrl }) {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} className="card-img-top" alt="Card" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Status: {status}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">Rating: {rating}</p>
      </div>
    </div>
  );
}

export default Card;