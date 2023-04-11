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
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title'></h1>
            <Row>
              <Col className='mt-2 text-center'>
                <p className='btn-title text-center'><h1>Who's Busy Bee for?</h1></p>
                <p className='btn-title text-center'>For every parent who want's to make to<br/> make sure that you are making the best<br/> out of their availble time</p>
                <img className='image-radius img-fluid' src={require('../Assets/BEEE.png')} alt="Logo" width={200} />
                <p className='btn-title text-center'>We work based on <br/>Start Task Reward System<br/> every time a task get done!</p>

              </Col>
            </Row>
          </Col>

          {/* Divider in the Middle */}
          <Col xl={1}>
            <div className="divider 
          d-none d-sm-block 
          d-md-none d-lg-block
          d-xl-block"></div>
          </Col>


          {/* Right Side */}
          <Col xl={5}>
            <h1 className='left-title'>Step 1 - Admin User Info</h1>
            <Row>
              <Col className='right-title mt-2'>
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
                  <button className='btn-format rounded-pill mt-3'>Create User</button>
                </Link>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  )
}


