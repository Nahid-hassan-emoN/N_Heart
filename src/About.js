import React from 'react';
import Common from './Common';
import heart_r from '../src/images/heaRt.png';

const About = () => {
    return (
        <>
            <Common 
            name=' Welcome To Our About Page '
            welText="We are delighted to have you among us. On behalf of all the members and the management, we would like to extend our warmest welcome and good wishes!"
            pName=" ツΝ_হার্টツ"
            imgsrc={heart_r}
            visit="/contract"
            btnName=" Contract Us"/>
            <div>
                <br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            
        </>
    );
};

export default About;