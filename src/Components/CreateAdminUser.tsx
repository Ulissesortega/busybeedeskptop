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
        avatarLook
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
            <h1 className='left-title'></h1>
            <Row>
              <Col className='mt-2 text-center'>
                <h1 className='btn-title text-center'>Welcome to Busy Bee!</h1>
                <p className='btn-title text-center'>Thank you for choosing us,<br />Together we'll make the best<br /> of your Kid's time.</p>
                <img className='image-radius img-fluid' src={require('../Assets/BEEE.png')} alt="Logo" width={300} />

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
                <Form.Group className="mb-2" controlId="formBasic Full Name">
                  <Form.Label className='btn-title'>Full Name</Form.Label>
                  <Form.Control className='text-center rounded-pill' type="text" placeholder="Your Name" onChange={({target: {value}}) => setFullName(value)} />
                </Form.Group>
              </Col>
            </Row>


            <Row>
              <Col className='right-title mt-2'>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className='btn-title'>Email Address</Form.Label>
                  <Form.Control className='text-center rounded-pill' type="Email" placeholder="Your Email" onChange={({target: {value}}) => setEmail(value)} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className='text-center'>
                <Form.Label className='btn-title'>Gender</Form.Label>
                <Form.Select className='rounded-pill' aria-label="Default select example"  onChange={({target: {value}}) => setAvatarLook(value)}>
                  <option className='text-center'>Options</option>
                  <option className='text-center' value="Male">Male</option>
                  <option className='text-center' value="Female">Female</option>
                </Form.Select>
              </Col>
            </Row>


            <Row>
              <Col className='right-title mt-2'>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label className='btn-title'>Password</Form.Label>
                  <Form.Control className='text-center rounded-pill' type="Password" placeholder="Your Password" onChange={({target: {value}}) => setPassword(value)} />
                </Form.Group>
                <Link to="/AdminInfo">
                  <button className='btn-format rounded-pill mt-3' onClick={handleSubmit}>Create User</button>
                </Link>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  )
}