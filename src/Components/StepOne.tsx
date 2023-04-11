import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Medal from '../Assets/Medal.png'
import leftImage from '../Assets/BeeBoy.png';
import RightImage from '../Assets/BeeGirl.png';

export default function StepOne() {
    return (
        <div className='bgColor'>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title'>Hi Username!</h1>
                        <Row>
                            <p className='btn-title text-center'>Busy Bee works based on a<br /> Star Task Reward System.</p>

                            <Col className='d-flex justify-content-center'>
                                <img className='img-fluid custom-height' src={require('../Assets/Medal.png')} alt="Logo" width={200} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className='btn-title text-center'><h1>Step 1</h1></p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className='btn-title text-center'>We need to Create a User for your Bee(s)</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>

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
                        <h1 className='left-title'>Choose One of the Options Bellow:</h1>

                        <Row>
                            <Col className='d-flex justify-content-center mt-3'>
                                <img className='img-fluid custom-height' src={require('../Assets/BeeBoy.png')} alt="Logo" width={200} />
                            </Col>
                            
                            <Col className='d-flex justify-content-center mt-3'>
                                <img className='img-fluid custom-height' src={require('../Assets/BeeGirl.png')} alt="Logo" width={200} />
                            </Col>
                        </Row>

                        <Row>
                             <Col className='d-flex justify-content-center'>
                             <Link to="/StepOne">
                                    <button className='small-btn-format rounded-pill mt-3'>Let's Start!</button>
                                </Link>
                             </Col>

                             <Col className='d-flex justify-content-center'>
                             <Link to="/StepOne">
                                    <button className='small-btn-format rounded-pill mt-3'>Let's Start!</button>
                                </Link>
                             </Col>                           
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
