import React from 'react';
import Card from './Card';
import './Gallery.css';
import Ndata from './Ndata';

const Gallery = () => {
  return (
    <>
      <div>
        <h1 className='text-center mt-4'>Gallery Of <strong>ツΝ_হার্টツ</strong> </h1>
      </div>
      <div class="row ">
          <div className='container-fluid mb-5'>
            <div className='col-10 mx-auto'>
              <div className='row gy-3'>
                {
                  Ndata.map((val, ind) => {
                    return <Card key={ind}
                      imgsrc={val.imgsrc}
                      title={val.titel}
                      link={val.link} />
                  })
                }
              </div>
            </div>
          </div>
      </div>




    </>
  );
};

export default Gallery;