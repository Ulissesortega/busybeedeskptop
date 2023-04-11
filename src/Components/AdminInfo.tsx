import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import leftImage from '../Assets/Bkeeper.png';


export default function Template() {
    return (
        <div className='bgColor'>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title'>You're Awesome!</h1>
                        <Row>
                            <Col className='mt-3 text-center'>
                                <p className='btn-title text-center'>You have become a BeeKeeper.</p>
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
                        <h1 className='left-title'>Step 2 - Bee User Info</h1>
                        <Row>
                            <Col className='mt-3 text-center'>
                                <p className='btn-title text-center'>Let's create your first Bee!</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Form.Group className="mb-2" controlId="formBasic Bee Name">
                                    <Form.Label className='btn-title'>Your First Bee User Name</Form.Label>
                                    <Form.Control className='text-center rounded-pill' type="text" placeholder="Bee Name" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Form.Group className="mb-3" controlId="formBasic Bee Password">
                                    <Form.Label className='btn-title'>Your First Bee Password</Form.Label>
                                    <Form.Control className='text-center rounded-pill' type="text" placeholder="Bee Password" />
                                </Form.Group>

                                <Link to="/AdminInfo">
                                    <button className='btn-format rounded-pill mt-3'>Login</button>
                                </Link>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}