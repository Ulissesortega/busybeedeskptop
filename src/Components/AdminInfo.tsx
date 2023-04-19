import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';





export default function Template() {
    return (
        <div className='bgColor'>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title d-none d-sm-block'>Busy Bee!</h1>
                        <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
                        <Row>
                            <Col className='mt-1 mt-sm-1 mt-xl-3 text-center'>
                                <p className='btn-title text-center '>Awesome!<br/>You have become a <br/><span className='text-bold'>BeeKeeper </span></p>
                                <img className='img-fluid d-none d-sm-block mx-auto' src={require('../Assets/Bkeeper.png')} alt="Logo" width={200}/>
                                <img className='img-fluid d-block d-sm-none mx-auto' src={require('../Assets/Bkeeper.png')} alt="Logo" width={125}/>
                                
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
                        <h1 className='right-title d-none d-sm-block'>Admin's Info</h1>
                        <h1 className='text-center d-block d-sm-none'>Admin's Info</h1>
                        <Row>
                            <Col className='right-title mt-2'>
                                <p className='btn-title text-center'>A copy of your Information <br />has been sent to your Email!</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <img className='img-fluid d-none d-sm-block' src={require('../Assets/Email1.png')} alt="Logo" width={275} />                                
                                <img className='img-fluid d-sm-none mx-auto' src={require('../Assets/Email1.png')} alt="Logo" width={125} /> 
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Link to="/StepOne">
                                    <button className='btn2-format rounded-pill mt-3'>Let's Start!</button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}