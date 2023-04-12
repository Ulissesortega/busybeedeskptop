import React, { useState } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Test() {

    return (
        <div className='bgColor'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center title-text mt-5'>Busy Bee!</h1>
                    </Col>
                </Row>

                <Row>
                    <Col className='d-flex justify-content-center mt-3'>
                        <img className='img-responsive border-radius' src={require('../Assets/Logo.png')} alt="Logo" height={240}/>
                    </Col>
                </Row>
                
                <Row>
                  <Col>
                    <p className='btn-title text-center mt-3'>New to Busy Bee?</p>
                  </Col>
                </Row>

                <Row>
                    <Col className='d-flex justify-content-center'>
                        <button className='btn-format-test rounded-pill'> Create User</button>
                    </Col>
                </Row>

                <Row>
                  <Col>
                    <p className='btn-title text-center mt-3'>New to Busy Bee?</p>
                  </Col>
                </Row>

                <Row>
                    <Col className='d-flex justify-content-center'>
                        <button className='btn-format-test rounded-pill'> Create User</button>
                    </Col>
                </Row>

                <Row>
                  <Col>
                    <p className='btn-title text-center mt-3'>New to Busy Bee?</p>
                  </Col>
                </Row>

                <Row>
                    <Col className='d-flex justify-content-center'>
                        <button className='btn-format-test rounded-pill'> Create User</button>
                    </Col>
                </Row>

                




            </Container>
        </div>

    );
}
