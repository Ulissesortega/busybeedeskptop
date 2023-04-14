import React, { useState } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Login() {

  return (
    <div className='bgColor'>
      <Container>
        <Row>
          {/* Left Column */}
          <Col xs={12} sm={12} md={5} xl={5} className='text-center'>
            <h1 className='mt-5'>Welcome to Busy Bee</h1>
            <Row>
              <Col>
              <img className='image-radius img-fluid mt-2' src={require('../Assets/Logo.png')} alt="Logo"/>

              </Col>
            </Row>
          </Col>


          {/* Middle Divider */}
          <Col xl={1}> <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div> </Col>


          {/* Right Column */}
          <Col xs={12} sm={12} md={5} xl={5} className='text-center mt-5 mt-md-5 mt-xl-5'>
            <h1 className='d-none d-sm-block'>Welcome to Busy Bee</h1>

            <Row>
              <Col className='mt-xl-3'>
                <label className='btn-title'>New to Busy Bee:</label><br />
                <Link to="/CreateAdminUser">
                  <button className='btn-format rounded-pill'> Create User</button>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col className='mt-xl-5'>
                <label className='btn-title mt-3'>Admin User:</label><br />
                <Link to="/CreateAdminUser">
                  <button className='btn-format rounded-pill'> Create User</button>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col className='mt-xl-5'>
                <label className='btn-title mt-4'>Kids User:</label><br />
                <Link to="/CreateAdminUser">
                  <button className='btn-format rounded-pill'> Create User</button>
                </Link>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
