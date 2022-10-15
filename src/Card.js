import React from 'react';
import './Gallery.css';

const Card = (props) => {
    return (
        <>

            
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold ">{props.title} </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={props.link} target=' ' className="btn btn-primary">Watch Now</a>
                    </div>
                </div>
            


        </>
    );
};

export default Card;