import React, { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Medal from '../../Assets/Medal.png'
import leftImage from '../../Assets/BeeBoy.png';
import RightImage from '../../Assets/BeeGirl.png';

export default function AddBeeUser() {
  return (
    <div className='bgColor'>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title'>A New Bee, Awesome!</h1>
                        <Row>
                            <p className='btn-title text-center'>Our little Bee will have <br/>Company and Help!</p>
                            <Col className='d-flex justify-content-center'>
                                <img className='img-fluid custom-height mt-3' src={require('../../Assets/BeeGirl.png')} alt="Logo" width={200} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className='btn-title text-center mt-5'>Congratulatios for you new Bee!</p>
                            </Col>
                        </Row>
                    </Col>

                    {/* Divider in the Middle */}
                    <Col xl={1}>
                        <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
                    </Col>


                    {/* Right Side */}
                    <Col xl={5}>
                        <h1 className='left-title'>Kid(s) User for your Bee!</h1>
                        <p className='btn-title text-center'>Please choose one of the options bellow:</p>


                        <Row>
                            <Col className='d-flex justify-content-center mt-4'>
                                <img className='img-fluid custom-height' src={require('../../Assets/BeeGirl.png')} alt="Logo" width={225} />
                            </Col>

                            <Col className='d-flex justify-content-center mt-3'>
                                <img className='img-fluid custom-height' src={require('../../Assets/BeeBoy.png')} alt="Logo" width={225} />
                            </Col>
                        </Row>

                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <Link to="/BeeUser">
                                    <button className='small-btn-format rounded-pill mt-3'>Bee Girl!</button>
                                </Link>
                            </Col>

                            <Col className='d-flex justify-content-center'>
                                <Link to="/BeeUser">
                                    <button className='small-btn-format rounded-pill mt-3'>Bee Boy!!</button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
  )
}
