// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Card.css';

// eslint-disable-next-line react/prop-types
const Card = ({food}) => {
  console.log(food)
  // eslint-disable-next-line react/prop-types
  const {strMealThumb,strMeal } = food;
  // eslint-disable-next-line react/prop-types
  
  return (
    <div className='card-item'>
      <img src={strMealThumb}></img>
      <p><small>{strMeal}</small></p>
    </div>
  );
};

export default Card;