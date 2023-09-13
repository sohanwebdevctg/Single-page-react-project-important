// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './Main.css';
import { useState } from 'react';
import Car from '../Car/Car';
import Select from '../Select/Select';

const Main = () => {
  const [cars,setCars] = useState([]);
  const [newCars,setNewCars] = useState([])

  useEffect(() => {
    fetch('fakedb.json')
    .then(res => res.json())
    .then(data => setCars(data))
  },[])

  const selectCar = (car) => {
    let newCar = [];
    let select = newCars.find(c => c.id === car.id);
    if(select){
      alert('sorry');
    }else{
     // eslint-disable-next-line no-const-assign
      newCar = [...newCars,car];
      setNewCars(newCar);
    }
    
  }

  return (
    <div className='main-container'>
      <div className='cars-container'>
        {
          cars.map(car => <Car
          key={car.id}
          car={car}
          selectCar={selectCar}
          ></Car>)
        }
      </div>
      <div className='select-container'>
        {
          <Select newCars={newCars}></Select>
        }
      </div>
    </div>
  );
};

export default Main;