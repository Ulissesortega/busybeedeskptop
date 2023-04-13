import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AdultLogin } from '../Services/DataService';

export default function AdminLogin() {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    let userData = {
      email,
      password
    }
    console.log(userData);
    let token = await AdultLogin(userData);
    if (token.token != null) {
      localStorage.setItem("Token", token.token);
      console.log('Success');
      navigate("/StepOne");
    }
  }
  return (
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title'>Busy Bee!</h1>
            <Row>
              <Col className='mt-3'>
                <img className='image-radius img-fluid' src={require('../Assets/Logo.png')} alt="Logo" />
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
                  <Form.Control className='text-center rounded-pill' type="Email" placeholder="Your Email" onChange={({ target: { value } }) => setEmail(value)} />
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
                  <Form.Control className='text-center rounded-pill' type="Password" placeholder="Your Password" onChange={({ target: { value } }) => setPassword(value)} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <button className='btn-format rounded-pill mt-3' onClick={handleSubmit}>Login</button>

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
