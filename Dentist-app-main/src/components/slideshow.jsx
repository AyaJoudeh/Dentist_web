import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import girl from '../imgs/Girl.jpg';
import whitegirl from '../imgs/Wgirl.jpg';
import steeth from '../imgs/Steeth.jpg'
import  "./slideshow.css";

const Slideshow = () => {
  
    return (
        <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block "
            src={girl}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={whitegirl}
            alt="Second slide"
          />
          <Carousel.Caption>
  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={steeth}
            alt="Third slide"
          />
          <Carousel.Caption>
     
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
   
}
 
export default Slideshow;