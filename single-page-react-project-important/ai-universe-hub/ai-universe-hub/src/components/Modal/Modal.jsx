// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Modal.css';


const Modal = ({singleModalData}) => {
  const {description,image_link,features,integrations,pricing,input_output_examples} = singleModalData;
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          {/* card section start */}
          <div className="card lg:card-side bg-base-100 flex justify-between gap-5">
            <div className="card-body bg-red-100 rounded border border-1 border-red-600">
              <h2 className="card-title">{description ? description : 'No-Data'}</h2>
              <div className='flex justify-around items-center'>
                <div className='text-green-500 text-center bg-black py-3 px-8 rounded'>
                  <h4>$10/</h4>
                  <p>month<br></br>Basic</p>
                </div>
                <div className='text-orange-500 text-center bg-black py-3 px-8 rounded'>
                  <h4>$50/</h4>
                  <p>month<br></br>Pro</p>
                </div>
                <div className='text-red-500 text-center bg-black py-3 px-8 rounded'>
                  <h4>$00/</h4>
                  <p>Contact<br></br>Us</p>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div>
                  <h4 className='text-xl font-bold'>Features</h4>
                  {
                    // eslint-disable-next-line react/jsx-key
                    Object.values(features || {}).map((feature, index) => <p>{++index}. {feature.feature_name}</p>)
                  }
                </div>
                <div>
                  <h4 className='text-xl font-bold'>Integrations</h4>
                  {
                    // eslint-disable-next-line react/jsx-key
                    integrations && integrations.map((int,index) => <h4>{++index}. {int}</h4>)
                  }
                </div>
              </div>
            </div>
            <div className='text-center bg-slate-100'>
                <figure><img src={image_link ? image_link[0] : 'no-data'} alt="Album"/></figure>
                <h3 className='font-bold text-2xl'>Hi, how are you doing today?</h3>
                <p className='text-gray-400 font-bold'>I'm doing well, thank you for asking. <br></br>How can I assist you today?</p>
            </div>
          </div>
          {/* card section end */}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
</dialog>
    </div>
  );
};

export default Modal;