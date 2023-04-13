import React, { useState, useContext } from 'react'
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
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title'><span className='hide'>Welcome to</span> Busy Bee!</h1>
            <Row>
              <Col className='mt-4 text-center'>
              <img className='image-radius img-fluid mobile-image' src={require('../Assets/Logo.png')} alt="Logo"/>
              </Col>
            </Row>
          </Col>

          {/* Divider in the Middle */}
          <Col xl={1}> <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div> </Col>


          {/* Right Side */}
          <Col xl={5}>
            <h1 className='left-title hide'>Home Screen</h1>
            <Row>
              <Col className='right-title mt-4'>
                <Row>
                  <Col>
                    <p className='btn-title'>New to Busy Bee?</p>
                  </Col>
                </Row>

                {/* Button 1 */}
                <Link to="/CreateAdminUser">
                  <button className='btn-format rounded-pill'> Create User</button>
                </Link>
                
              </Col>
            </Row>


            
            <Row>
              <Col className='right-title mt-3'>
                <Row>
                  <Col>
                    <p className='btn-title'>I'm a Bee Keeper!</p>
                  </Col>
                </Row>
                {/* Button 1 */}
                <Link to="/AdminLogin">
                  <button className='btn-format rounded-pill'>Admin Login</button>
                </Link>
              </Col>
            </Row>


            <Row>
              <Col className='right-title mt-3'>
                <Row>
                  <Col>
                    <p className='btn-title'>I'm a Busy Bee!</p>
                  </Col>
                </Row>
                <Link to="/KidsLogin">
                <button className='btn-format rounded-pill'>Kid's Login</button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
