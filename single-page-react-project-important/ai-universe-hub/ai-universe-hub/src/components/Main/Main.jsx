// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Main.css';
import SingleData from '../SingleData/SingleData';
import Modal from '../Modal/Modal';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  const [showAllData, setShowAllData] = useState(false);
  const [modalDatas, setModalDatas] = useState(null);
  const [singleModalData, setSingleModalData] = useState({})

  // main data
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(response => response.json())
    .then(data => setMainData(data.data.tools))
  },[]);

  // modal id
  const modalData = (id) => {
    setModalDatas(id)
  }

  // modal data
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${modalDatas}`)
    .then(response => response.json())
    .then(data => setSingleModalData(data.data))
  },[modalDatas]);

  // sorting data
  const handleSorting = () => {
    const sorting = mainData.sort((a,b) => {
      return new Date(a.published_in) - new Date(b.published_in);
    });
    setMainData([...mainData, sorting])
  }


  return (
    <div className='my-10 container mx-auto'>
      <div className='text-center' onClick={handleSorting}>
        <button className="btn btn-error font-bold">Sorting Data</button>
      </div>
      {/* mainData-container start */}
      <div className='main-container my-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
          // eslint-disable-next-line react/jsx-key
          mainData.slice(0, showAllData ? 12 : 6).map(singleData => <SingleData
          key={singleData.id}
          singleData={singleData}
          modalData={modalData}
          ></SingleData>)
        }
      </div>
      {/* mainsData-container end */}
      {
        showAllData ? (<div className='text-center' onClick={() => {setShowAllData(false)}}>
        <button className="btn btn-error font-bold">Show Less</button>
      </div>) : (<div className='text-center' onClick={() => {setShowAllData(true)}}>
        <button className="btn btn-error font-bold">Show All</button>
      </div>)
      }
      <Modal singleModalData={singleModalData}></Modal>
    </div>
  );
};

export default Main;