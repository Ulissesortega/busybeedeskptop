import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import leftImage from '../Assets/Logo.png';


export default function Template() {
  return (
    
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title'>Hi Username!</h1>

          </Col>

          {/* Divider in the Middle */}
          <Col xl={1}>
            <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
          </Col>


          {/* Right Side */}
          <Col xl={5}>
            <h1 className='left-title'>Kid(s) User for your Bee</h1>
            <p className='btn-title text-center'>Please choose one of the options bellow:</p>
          </Col>
        </Row>
      </Container>
    </div>
    
  )
}
