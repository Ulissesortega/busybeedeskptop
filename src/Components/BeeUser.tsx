import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Medal from '../Assets/Medal.png'
import leftImage from '../Assets/BeeBoy.png';
import RightImage from '../Assets/BeeGirl.png';

export default function BeeUser() {
    return (
        <div className='bgColor'>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title'>Bee Awesome!</h1>
                        <Row>
                            <p className='btn-title text-center'><h1>Step 2</h1></p>
                            <p className='btn-title text-center'>Let's give our Bee<br />A Name and Password</p>
                            <Col className='d-flex justify-content-center'>
                                <img className='img-fluid custom-height' src={require('../Assets/BeeGirl.png')} alt="Logo" width={200} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className='btn-title text-center'>The easier the better<br />so they never forget</p>
                            </Col>
                        </Row>
                    </Col>

                    {/* Divider in the Middle */}
                    <Col xl={1}>
                        <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
                    </Col>


                    {/* Right Side */}
                    <Col xl={5}>
                        <h1 className='left-title'>Bee User!</h1>
                        <p className='btn-title text-center'>Please enter the info below</p>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Form.Group className="mb-2" controlId="formBasic BeeName">
                                    <Form.Label className='btn-title'>Bee Name</Form.Label>
                                    <Form.Control className='text-center rounded-pill' type="text" placeholder="Your Name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Form.Group className="mb-2" controlId="formBasic BeePassword">
                                    <Form.Label className='btn-title'>Password</Form.Label>
                                    <Form.Control className='text-center rounded-pill' type="Password" placeholder="Your Password" />
                                </Form.Group>
                                <Link to="/TaskAssigner">
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
