import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>

          <Col xs={12} sm={12} md={12} xl={5}>
            <h1 className='left-title mt-5 d-none d-sm-block'>Welcome to Busy Bee</h1>
            <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
            <Row>
              <Col className='mt-2 text-center'>                
                <p className='btn-title text-center d-none d-sm-block'>Thank you for choosing us!<br />Together we'll make the best<br /> of your Kid's time.</p>                
                <img className='image-radius img-fluid d-none d-sm-block mx-auto' src={require('../Assets/BEEE.png')} alt="Logo" width={300} />

              </Col>
            </Row>
          </Col>

          {/* Divider in the Middle */}
          <Col xl={1}>
            <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
          </Col>


          {/* Right Side */}
          <Col xs={12} sm={12} md={12} xl={5}>
            <h1 className='left-title mt-2 mt-xl-5 mt-xs-1'>Admin's Info</h1>
            <Row>
              <Col className='right-title mt-2'>
              <p className='btn-title text-center'>Please enter the information below</p>
                <Form.Group className="mb-2" controlId="formBasic Full Name">
                  <Form.Label className='btn-title'>Full Name</Form.Label>
                  <Form.Control className='text-center rounded-pill' type="text" placeholder="Your Name" />
                </Form.Group>
              </Col>
            </Row>


            <Row>
              <Col className='right-title mt-2'>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className='btn-title'>Email Address</Form.Label>
                  <Form.Control className='text-center rounded-pill' type="Email" placeholder="Your Email" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className='text-center'>
                <Form.Label className='btn-title'>Gender</Form.Label>
                <Form.Select className='rounded-pill' aria-label="Default select example">
                  <option className='text-center'>Options</option>
                  <option className='text-center' value="1">Male</option>
                  <option className='text-center' value="2">Female</option>
                </Form.Select>
              </Col>
            </Row>


            <Row>
              <Col className='right-title mt-2'>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label className='btn-title'>Password</Form.Label>
                  <Form.Control className='text-center rounded-pill' type="Password" placeholder="Your Password" />
                </Form.Group>
                <Link to="/AdminInfo">
                  <button className='btn2-format rounded-pill mt-3'>Create User</button>
                </Link>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  )
}


