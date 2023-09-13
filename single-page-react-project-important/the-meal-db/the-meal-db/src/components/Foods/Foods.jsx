// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Foods.css';
import Food from '../Food/Food';
import Card from '../Card/Card';

const Foods = () => {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then(response => response.json())
    .then(data => setFoods(data.meals))
  },[])

  const [food, setFood] = useState([]);
  const addFood = (foodes) => {
    const newFood = [...food, foodes];
    setFood(newFood);
  }

  return (
    <div className='foods-container'>
      <div className='food-container'>
        {
          foods.map(food => <Food
          key={food.idMeal}
          food={food}
          addFood={addFood}
          ></Food>)
        }
      </div>
      <div className='card-container'>
        <div className='card-con'>
          <p>Image</p>
          <p>Item</p>
        </div>
          <hr></hr>
        {
          // eslint-disable-next-line react/jsx-key
          food.map(food => <Card  food={food}></Card>)
        }
      </div>
    </div>
  );
};

export default Foods;