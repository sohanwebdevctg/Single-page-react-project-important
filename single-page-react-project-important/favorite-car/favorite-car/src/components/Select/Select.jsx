// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Select.css';

// eslint-disable-next-line react/prop-types
const Select = ({newCars}) => {
  let price = 0;
  for(let prices of newCars){
    price = price + prices.balance;
  }
  return (
    <div className='select-item'>
      <div className='title'>
        <p>Name</p>
        <p>Price</p>
      </div>
      <div className='items'>
        {
          // eslint-disable-next-line react/jsx-key, react/prop-types
          newCars.map(car => <div className='item'><img style={{width:'50%',height:'40%'}} src={car.picture}></img><p>${car.balance}</p></div>)
        }
      </div>
      <div className='total-section'>
        <p>total:</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Select;