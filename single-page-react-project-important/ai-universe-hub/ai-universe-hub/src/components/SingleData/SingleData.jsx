// eslint-disable-next-line no-unused-vars
import React from 'react';
import './SingleData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCalendarDays, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


const SingleData = (props) => {
  
  // eslint-disable-next-line react/prop-types
  const {id,image,features,name,published_in} = props.singleData;
  const modalData = props.modalData;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure><img src={image ? image : 'no-data'} className='h-40 w-full' /></figure>
      <div className="card-body">
        <div>
          <h3 className='font-bold text-xl'>Features</h3>
          {
            // eslint-disable-next-line react/jsx-key, react/prop-types
            features.map((value,index) => <p>{++index}. <em>{value}</em></p>)
          }
        </div>
        <hr className='my-2'></hr>
        <div className='flex justify-between items-center'>
          <div>
            <h4 className='font-bold text-base'>{name}</h4>
            <div className='flex items-center gap-2'>
              <FontAwesomeIcon className='text-orange-600' icon={faCalendarDays} />
              <p className='text-gray-400'>{published_in}</p>
            </div>
          </div>
          <div>
          {/* modal section start */}
          <span onClick={()=>document.getElementById('my_modal_4').showModal()}>
            <FontAwesomeIcon onClick={()=> modalData(id)} className='text-orange-600 border border-orange-600 p-2 rounded-full hover:bg-orange-100' icon={faArrowRightLong} />
          </span>
          {/* modal section end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;