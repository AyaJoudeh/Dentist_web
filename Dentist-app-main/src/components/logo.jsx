import React from 'react';
import teeth from '../imgs/teeth.png';
import "./logo.css";

const Logo = () => {
    return ( 
        <div>
        <div className='divTeeth'>
            <img src={teeth} />
            <h3 id="Title">Dentist Center</h3>
        </div>
        
        </div>

     

     );
}
 
export default Logo;