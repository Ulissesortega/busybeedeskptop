import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UsersDashboard() {
  return (
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title '>Hi Username!</h1>
            <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
            <p className='btn-title text-center'>Admin Dashboard<br />From here You'll be able to<br /> manage your Busy Bee(s)</p>
          </Col>

          {/* Divider in the Middle */}
          <Col xl={1}>
            <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
          </Col>


          {/* Right Side */}
          <Col xl={5}>
            <h1 className='left-title'>Your Busy Bee's</h1>
            <p className='btn-title text-center'>Please choose one of the options bellow:</p>

            <Row>
              <Col><button className='small-btn-format rounded-pill mt-3'>Bee 1</button></Col>
              <Col><button className='small-btn-format rounded-pill mt-3'>Bee 2</button></Col>
              <Col><button className='small-btn-format rounded-pill mt-3'>Bee 3</button></Col>
              <Col><button className='small-btn-format rounded-pill mt-3'>Bee 4</button></Col>
            </Row>

            <Row>
              <Col className='right-title mt-2'>
                <Link to="/AddBeeUser">
                  <button className='btn-format rounded-pill mt-3'>Add Bee</button>
                </Link>
              </Col>
            </Row>


          </Col>
        </Row>
      </Container>
    </div>
  )
}
