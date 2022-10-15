import React from 'react';
import './index.css';


const Footer = () => {
    const years = new Date().getFullYear();
    return (
        <div className='footer text-center '>
            <p> copyright ©  ツΝ_হার্টツ {years}</p>
        </div>
    );
};

export default Footer;