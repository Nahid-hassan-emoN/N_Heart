import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from './images/nL.jpg'
import pic2 from './images/wbg.jpg'

const Common = (props) => {
    return (
        <> 
          <section id='' className='d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>

                        <div className='col-sm-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                            <h1>{props.name}<strong className='brand-name'>{props.pName}</strong></h1>
                            <h3 className='my-3'>
                                {props.welText}
                            </h3>
                            <div className='mt-3'>
                                <NavLink to={props.visit} className='btn-get-started'> {props.btnName}</NavLink>
                            </div>
                        </div>
                        <div className='col-sm-6 order-1 order-lg-2 header-img '>
                            <img src={props.imgsrc} alt="" className='img-fluid animated' />
                            <img src={pic2} alt="" className='img-fluid animated' />

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

           
        </>
    );
};

export default Common;