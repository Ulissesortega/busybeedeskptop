import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdminLogin() {
  return (
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title'>Busy Bee!</h1>
            <Row>
              <Col className='mt-3'>
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
            <h1 className='left-title'>Admin Login</h1>
            
            <Row>
              <Col className='right-title mt-2'>
                <Row>                  
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='btn-title'>Email address</Form.Label>
                  <Form.Control className='text-center' type="Email" placeholder="Your Email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>

             <Row>
              <Col className='right-title mt-2'>
                <Row>                  
                </Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='btn-title'>Password</Form.Label>
                  <Form.Control className='text-center' type="Password" placeholder="Your Password" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Link to="/CreateAdminUser">
                  <button className='btn-format'>Login</button>
                </Link>

              </Col>
            </Row>                
          </Col>
        </Row>
      </Container>
    </div>
  )
}
