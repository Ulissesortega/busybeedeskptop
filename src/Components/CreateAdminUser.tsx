import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CreateAdultAccount } from '../Services/DataService';

export default function () {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [avatarLook, setAvatarLook] = useState('');

  const handleSubmit = async () => {
    let adultUserData = {
        id: 0,
        fullName,
        email,
        password,
        avatarLook: "Boy"
    }
    console.log(adultUserData);
    CreateAdultAccount(adultUserData);
}

  return (
    <div className='bgColor'>
    <Container>

      {/* Left-Side */}
      <Row>
        <Col sm={12} md={12} xl={5}>
          <h1 className='left-title'> - Step 1 - </h1>
          <Row>
            <Col className='mt-3 text-center'>
            <p className='btn-title text-center'>Welcome to Busy Bee!<br/>Making Sure Things Get Done!<br/></p>
            <img className='image-radius img-fluid' src={require('../Assets/BEEE.png')} alt="Logo" width={350}/>


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
          <h1 className='left-title'>Admin Info</h1>
          <Row>
            <Col className='right-title mt-2'>
              <Row>                  
              </Row>
              <Form.Group className="mb-3" controlId="formBasic Full Name">
                <Form.Label className='btn-title'>Please Enter Your Name</Form.Label>
                <Form.Control className='text-center rounded-pill' type="text" placeholder="Name and Last Name" onChange={({target: { value }}) => setFullName(value)} />
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='btn-title'>Email address</Form.Label>
                <Form.Control className='text-center rounded-pill' type="Email" placeholder="Your Email" onChange={({target: { value }}) => setEmail(value)} />
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
                <Form.Control className='text-center rounded-pill' type="Password" placeholder="Your Password" onChange={({target: { value }}) => setPassword(value)} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Link to="/CreateAdminUser">
                <button className='btn-format rounded-pill mt-3' onClick={handleSubmit}>Login</button>
              </Link>

            </Col>
          </Row>                
        </Col>
      </Row>
    </Container>
  </div>
  )
}