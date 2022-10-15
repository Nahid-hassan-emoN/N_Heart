import React from 'react';
import Common from './Common';
import nl from '../src/images/nL.jpg';



const Home = () => {
    return (
        <>
            <Common
                name=' Grow Your Business With '
                welText='The entire team of ツΝ_হার্টツ is thrilled to welcome you on board. We hope you’ll do some amazing work here!'
                pName=" ツΝ_হার্টツ"
                imgsrc={nl}
                visit="/gallery"
                btnName=" Get Started" />

            <div>
                <br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </>
    );
};

export default Home;