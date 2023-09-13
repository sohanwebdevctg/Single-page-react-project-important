// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Car.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'

const Car = (props) => {
  // eslint-disable-next-line react/prop-types
  const {id,balance,color,picture,name,email,company,about} = props.car;
  // eslint-disable-next-line react/prop-types
  const selectCar = props.selectCar;
  return (
    <div className='card-item'>
        <img src={picture}></img>
      <div style={{padding:'10px'}}>
        <p><b>Name:</b>{name}</p>
        <p><b>Balance:</b>{balance}</p>
        <p><b>Color:</b>{color}</p>
        <p><b>Company:</b>{company}</p>
        <p><b>Email:</b>{email}</p>
        <button onClick={()=> selectCar(props.car)}>Select<FontAwesomeIcon style={{marginLeft:'8px'}} icon={faCar} /></button>
      </div>
    </div>
  );
};

export default Car;