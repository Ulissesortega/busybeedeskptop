import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import leftImage from '../Assets/Bkeeper.png';
import RightImage from '../Assets/Emial1.png';




export default function Template() {
    return (
        <div className='bgColor'>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title'>Busy Bee!</h1>
                        <Row>
                            <Col className='mt-3 text-center'>
                                <p className='btn-title text-center'>Bee Awesome<br/>You just become a <span className='text-bold'>BeeKeeper </span></p>
                                <img className='img-fluid custom-height' src={require('../Assets/Bkeeper.png')} alt="Logo" />
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
                        <h1 className='left-title'>Admin's Info</h1>
                        <Row>
                            <Col className='right-title mt-2'>
                                <p className='btn-title text-center'>A copy of your Information <br />has been sent to your Email!</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <img className='img-fluid custom-height' src={require('../Assets/Email1.png')} alt="Logo" width={300} />
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Link to="/StepOne">
                                    <button className='btn-format rounded-pill mt-3'>Let's Start!</button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}