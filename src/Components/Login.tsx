import React, {useState} from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Login() {


  return (
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={6}>
            <h1 className='left-title'>Welcome to Busy Bee!</h1>
            <Row>
              <Col className='mt-3'>
                <img className='image-radius' src={require('../Assets/Logo.png')} width={450} height={450} alt="Logo" />
              </Col>
            </Row>
          </Col>
          {/* Divider in the Middle */}
          <div className="divider d-sm-none d-md-none d-xl-block"></div>

          {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          {/* Right Side */}

          {/* Buttons */}
          <Col>
            <h1 className='left-title'>Let's Create a User</h1>

            <Row>
              <Col className='right-title mt-3'>
                <Row>
                  <Col>
                    <p className='btn-title'>New to Our App?</p>
                  </Col>
                </Row>
                
                <Link to="/AdminInfo">
                  <button className='btn-format'> Create User</button>
                </Link>
                
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col className='text-center'>
                <p className='mb-0 sub-title'>New to Our App?</p>
               
                {/* Button */}
                {/* <Button as={Link} to="AdminInfo">Create User</Button> */}
              
              </Col>
            </Row>

            <Row>
              <Col className='right-title mt-3'>
                <Row>
                  <Col>
                    <p className='btn-title'>Parent Loggin:</p>
                  </Col>
                </Row>
                
                <button className='btn-format'>Parent Login</button>
              
              </Col>
            </Row>


            <Row>
              <Col className='right-title mt-3'>
                <Row>
                  <Col>
                    <p className='btn-title'>New to Our App?</p>
                  </Col>
                </Row>

                <button className='btn-format'>Kid's Login</button>
              
              </Col>
            </Row>




          </Col>
        </Row>
      </Container>
    </div>
  );
}
