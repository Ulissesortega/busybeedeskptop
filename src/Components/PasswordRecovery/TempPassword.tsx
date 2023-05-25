import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TempPassword() {
  return (
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title d-none d-sm-block'>Check Your Email!</h1>
            <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
            <Row>
              <Col className='right-title mt-2'>
                <p className='btn-title text-center'>A temporary password<br/>has been Sent <br/>to your Email!</p>
              </Col>
            </Row>
            <Row>
              <Col className='mt-1 mt-sm-1 mt-xl-3 text-center'>                
                <img className='img-fluid d-none d-sm-block mx-auto' src={require('../../Assets/Email1.png')} alt="Logo" width={300} />
                <img className='img-fluid d-block d-sm-none mx-auto' src={require('../../Assets/Email1.png')} alt="Logo" width={200} />
              </Col>
            </Row>
          </Col>

          {/* Divider in the Middle */}
          <Col xl={1}>
            <div className="divider d-none d-sm-block d-sm-none d-md-none d-lg-none d-xl-block d-xl-block d-xl-block"></div>
          </Col>


          {/* Right Side */}
          <Col xl={5}>
            <h1 className='left-title'>Soon to be Back!</h1>
            <p className='btn-title text-center'>Please click the button<br/>bellow to go back home</p>
            <Row>
              <Col className='mt-1 mt-sm-1 mt-xl-3 text-center'>                
                <img className='img-fluid d-none d-sm-block mx-auto' src={require('../../Assets/BusyBee.png')} alt="Logo" width={200} />
                <img className='img-fluid d-none d-sm-block d-md-none d-lg-block d-lg-none d-xl-block d-xl-none mx-auto' src={require('../../Assets/Email1.png')} alt="Logo" width={200} />
              </Col>
            </Row>
            <Row>
              <Col className='right-title mt-2'>
                <Link to="/AdminLogin">
                  <button className='btn-format rounded-pill mt-3'>Home</button>
                </Link>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
