import React from 'react';
import Logo from './logo';
import Slideshow from './slideshow';
import  "./starting.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Starting = () => {
    return ( 
        <div class="startingDiv">
        <Row>
       
           <Col >
              <Logo />
           </Col>
         </Row>


        <Row>

            
          <Col>
            <h3 id="Welcome">Welcome</h3>
            <p id="first">We take care of</p>
            <p id="second">Your smile.</p> 
            <p class="details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
                <br/>
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna. </p>
              <Button variant="primary" style={{borderRadius:"75px",marginRight:"3%",width:"10%"}}>Doctor</Button>
              <Button variant="outline-primary" style={{borderRadius:"75px",marginRight:"3%",width:"10%"}}>User</Button>

           </Col>
          <Col>
            <Slideshow class="slidePosition" />
          </Col>
        
        </Row>

        </div>
        
     );
}
 
export default Starting;