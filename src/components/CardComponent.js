// src/components/CardComponent.js
import React from 'react';
import './CardComponent.css'; // Importing the CSS file

const CardComponent = ({ image, title, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
};

export default CardComponent;
