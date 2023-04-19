import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function MyComponent() {
  return (
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title d-none d-sm-block'>Password Reset!</h1>
            <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
            <Row>
              <Col className='right-title mt-2'>
                <p className='btn-title text-center'>In order to reset your password<br />please fill the form</p>
              </Col>
            </Row>

            <Row>
              <Col className='mt-1 mt-sm-1 mt-xl-3 text-center'>                
                <img className='img-fluid d-none d-sm-block mx-auto' src={require('../../Assets/Bkeeper.png')} alt="Logo" width={200} />
                <img className='img-fluid d-block d-sm-none mx-auto' src={require('../../Assets/Bkeeper.png')} alt="Logo" width={125} />
              </Col>
            </Row>

          </Col>



          {/* Divider in the Middle */}
          <Col xl={1}>
            <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
          </Col>


          {/* Right Side */}
          <Col xl={5}>
            <h1 className='left-title d-none d-sm-block'>User Info</h1>
            <p className='btn-title text-center d-none d-sm-block'>Please fill the information below:</p>

            <Row>
              <Col className='right-title mt-2'>
                <Form.Group className="mb-2" controlId="formBasic Full Name">
                  <Form.Label className='btn-title'>Full Name</Form.Label>
                  <Form.Control className='text-center rounded-pill' type="text" placeholder="Your Name" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className='right-title mt-2'>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className='btn-title'>Email Address</Form.Label>
                  <Form.Control className='text-center rounded-pill' type="Email" placeholder="Your Email" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className='right-title mt-2'>
                <Link to="/TempPassword">
                  <button className='btn-format rounded-pill mt-3'>Reset Password</button>
                </Link>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default MyComponent;