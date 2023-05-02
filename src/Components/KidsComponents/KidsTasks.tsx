import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function KidsTasks() {
  return (
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title d-none d-sm-block '>Busy Bee!</h1>
            <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
            <p className='btn-title text-center'>Welcome, please check<br/> Today's tasks.<br/></p>
          <Row>
            <Col className='text-center'>
              <img className='image-radius img-fluid d-none d-sm-block' src={require('../../Assets/Beetasks.png')} alt="Logo" width={350}/>
            </Col>
          </Row>
          
          </Col>
          {/* Divider in the Middle */}
          <Col xl={1}>
            <div className="divider d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block"></div>
          </Col>


          {/* Right Side */}
          <Col xl={5}>
            <h1 className='right-title d-none d-sm-block'>Today's Tasks!</h1>
            <p className='btn-title text-center d-none d-sm-block'>Looking forward to complete these tasks:</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
