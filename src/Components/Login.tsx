import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png'

<Container className='bgColor'>
        <Row>
          <Col xs={12} xl={5} className='mt-sx-2 mt-sm-3 mt-xl-5'>
            <h1 className='left-title col-xs-12 d-xs-flex justify-content-xs-center'><span className='d-none d-sm-'>Welcome to</span> Busy Bee!</h1>
            <Row>
              <Col className='mt-4 text-center'>
                <img className='image-radius img-fluid mobile-image mx-auto d-block' src={Logo} alt='Logo' />
              </Col>
            </Row>
          </Col>

          <Col sm={1}>
            <div className='divider d-none d-sm-block d-md-none d-lg-block d-xl-block'></div>
          </Col>

          <Col xl={5}>
            <h1 className='left-title d-none d-sm-block'>Home Screen</h1>

            <Row>
              <Col className='right-title mt-4'>
                <Row>
                  <Col>
                    <p className='btn-title'>New to Busy Bee?</p>
                  </Col>
                </Row>
                <Link to='/CreateAdminUser'>
                  <Button className='btn-format rounded-pill btn btn-dark'>Create User</Button>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col className='right-title mt-3'>
                <Row>
                  <Col>
                    <p className='btn-title'>I'm a Bee Keeper!</p>
                  </Col>
                </Row>
                <Link to='/AdminLogin'>
                  <Button className='btn-format rounded-pill btn btn-dark'>Admin Login</Button>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col className='right-title mt-3'>
                <Row>
                  <Col>
                    <p className='btn-title'>I'm a Busy Bee!</p>
                  </Col>
                </Row>
                <Link to='/KidsLogin'>
                  <Button className='btn-format btn btn-dark rounded-pill'>Kid's Login</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
