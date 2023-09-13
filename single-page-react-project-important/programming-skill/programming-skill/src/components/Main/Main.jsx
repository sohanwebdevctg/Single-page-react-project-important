// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Main.css';
import Data from '../Data/Data';
import Item from '../Item/Item';

const Main = () => {

  // fakeDatabase
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('fakedb.json')
    .then(response => response.json())
    .then(data => setDatas(data))
  },[])

  // reading time count
  const [reads,setReads] = useState([])
  const readTimeCount = (readingTime) => {
    const newRead = [...reads, readingTime];
    setReads(newRead);
  }

  const [items,setItems] = useState([])
  const selectItem = (select) => {

    let newItem = [];
    const findItem = items.find(item => item.id === select.id)
    if(findItem){
      alert('sorry')
    }else{
      newItem = [...items,select];
      setItems(newItem);
    }
  }

  return (
    <div className='mainContainer container mx-auto my-10'>
      <div className='skillContainer'>
        {
          datas.map(data => <Data 
          key={data.id}
          data={data}
          readTimeCount={readTimeCount}
          selectItem={selectItem}
          ></Data>)
        }
      </div>
      <div className='itemContainer'>
        <Item
        reads={reads}
        items={items}
        ></Item>
      </div>
    </div>
  );
};

export default Main;