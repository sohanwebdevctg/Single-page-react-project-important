// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Data.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const Data = (props) => {
  // eslint-disable-next-line react/prop-types
  const {blogCoverImg,blogImg,blogName,blogTitle,date,readTime,tag} = props.data;
  // eslint-disable-next-line react/prop-types
  const readTimeCount = props.readTimeCount;

  // eslint-disable-next-line react/prop-types
  const selectItem = props.selectItem;
  
  return (
    <div className='data  mb-10'>
      <div className='h-full mb-2'>
        <img className='w-full h-80' src={blogCoverImg}></img>
        <div className='px-4 py-6 bg-slate-100'>
          <div className='h-20 flex justify-between items-center'>
            <div className='flex gap-5'>
              <img className='w-12' src={blogImg}></img>
              <ul>
                <li className='text-lg font-bold'>{blogName}</li>
                <li className='text-gray-600'><em>{date}</em></li>
              </ul>
            </div>
            <div className='flex gap-3 items-center'>
              <span className='text-gray-500'>{readTime} read Time</span>
              {/* // eslint-disable-next-line react/prop-types */}
              <a href="#" className='icon' onClick={() => selectItem(props.data)}><FontAwesomeIcon className='text-gray-500' icon={faBookBookmark} /></a>
            </div>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>{blogTitle}</h3>
            <p className='text-gray-600 text-lg py-3 font-semibold'>{tag}</p>
            <a onClick={() => readTimeCount(readTime)} href='#' className='border-solid border-2 border-black p-2 hover:bg-black hover:text-white'>Mark as Read</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;