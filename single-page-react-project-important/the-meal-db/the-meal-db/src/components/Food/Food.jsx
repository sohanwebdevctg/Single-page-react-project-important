// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Food.css';

const Food = (props) => {
  // eslint-disable-next-line react/prop-types
  // eslint-disable-next-line react/prop-types
  const {idMeal, strArea, strMealThumb, strCategory,strMeal,strInstructions} = props.food;

  const addFood = props.addFood;

  return (
    <div className='food-item'>
      <img src={strMealThumb}></img>
      <div>
        <p><b>Name</b>: <i>{strMeal}</i></p>
        <p><b>Category</b>: <i>{strCategory}</i></p>
        <p><b>Area</b>: <i>{strArea}</i></p>
        {/* // eslint-disable-next-line react/prop-types */}
        <p><b>Details</b>: <i>{strInstructions.slice(0,135)}...</i></p>
      </div>
      <button onClick={() => {addFood(props.food)}}>Select-Item</button>
    </div>
  );
};

export default Food;