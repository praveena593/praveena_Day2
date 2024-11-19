// src/components/CardList.js
import React from 'react';
import CardComponent from './CardComponent';

// Import all images from the assets folder
import chocoImage from '../assets/choco.jpeg';
import vanillaImage from '../assets/vanilla.jpeg';
import redImage from '../assets/red.jpg';
import lemonImage from '../assets/lemon.jpg';
import carrotImage from '../assets/carrot.webp';
import cheeseImage from '../assets/cheese.jpg';
import blackForestImage from '../assets/choco.jpeg'; // Use the same image for demonstration
import fruitTartImage from '../assets/img2.jpg';

const cardData = [
  {
    image: chocoImage,
    title: 'Chocolate Cake',
    description: 'Delicious chocolate cake with layers of chocolate frosting.',
    price: '15.00'
  },
  {
    image: vanillaImage,
    title: 'Vanilla Cupcakes',
    description: 'Fluffy vanilla cupcakes topped with buttercream frosting.',
    price: '12.00'
  },
  {
    image: redImage,
    title: 'Red Velvet Cake',
    description: 'A rich red velvet cake with cream cheese frosting.',
    price: '18.00'
  },
  {
    image: lemonImage,
    title: 'Lemon Drizzle Cake',
    description: 'Light and refreshing lemon drizzle cake.',
    price: '14.00'
  },
  {
    image: carrotImage,
    title: 'Carrot Cake',
    description: 'Classic carrot cake with cream cheese frosting.',
    price: '16.00'
  },
  {
    image: cheeseImage,
    title: 'Cheesecake',
    description: 'Creamy cheesecake with a graham cracker crust.',
    price: '20.00'
  },
  {
    image: blackForestImage,
    title: 'Black Forest Cake',
    description: 'Chocolate sponge cake with cherries and whipped cream.',
    price: '22.00'
  },
  {
    image: fruitTartImage,
    title: 'Fruit Tart',
    description: 'Fresh fruit tart with a sweet pastry crust.',
    price: '18.00'
  }
];

const CardList = () => {
  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <CardComponent
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default CardList;
