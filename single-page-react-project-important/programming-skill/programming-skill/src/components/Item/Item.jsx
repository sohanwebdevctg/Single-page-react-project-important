// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Item.css';

// eslint-disable-next-line react/prop-types
const Item = ({reads,items}) => {
  console.log(items)

  let total = 0;
  for(let read of reads){
    total = total + parseInt(read)
  }

  return (
    <div className='item '>
      <div className='p-2 text-center border-solid border-2 border-cyan-500 rounded-lg mb-3 bg-cyan-200'>
        <p className='text-cyan-600 font-bold text-lg'>Spend item on read : {total} min</p>
      </div>
      <div className='bg-black text-center py-3'>
        <p className='font-bold text-xl text-white'>Read Items : {items.length}</p>
        <div>
          {
            // eslint-disable-next-line react/jsx-key, react/prop-types
            items.map(item => <div className='bg-slate-100 py-3 m-3 font-medium'>{item.blogTitle}</div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Item;