import React from 'react';
import slider1 from '../../images/slider-1.jpg';


const Slider = () => {
    return (
        <div>
             <div className="slider flex justify-start">
                <img src={slider1} alt=""  height={200}/>
            </div>
        </div>
    );
};

export default Slider;