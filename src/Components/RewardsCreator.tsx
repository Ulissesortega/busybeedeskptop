import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TaskAssigner() {
    return (
        <div className='bgColor'>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title'>Username!</h1>
                        <Row>
                            <Col>
                                <p className='btn-title text-center'><h1>Step 3</h1></p>
                                <p className='btn-title text-center'>Now we need to create the task(s)</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Form.Group className="mb-2" controlId="formBasic Task">
                                    <Form.Label className='btn-title'>Enter a Task</Form.Label>
                                    <Form.Control className='text-center rounded-pill' type="text" placeholder="Get Ready For School" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center'>
                                <Form.Label className='btn-title'>Assign Start Rewards!</Form.Label>
                                <Form.Select className='rounded-pill' aria-label="Default select example">
                                    <option className='text-center'>Options</option>
                                    <option className='text-center' value="1">1 Star</option>
                                    <option className='text-center' value="2">2 Stars</option>
                                    <option className='text-center' value="3">3 Stars</option>
                                    <option className='text-center' value="4">4 Stars</option>
                                    <option className='text-center' value="4">5 Stars</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Link to="/AdminInfo">
                                    <button className='btn-format rounded-pill mt-3'>Add Task</button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>

                    {/* Divider in the Middle */}
                    <Col xl={1}>
                        <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
                    </Col>


                    {/* Right Side */}
                    <Col xl={5}>
                        <h1 className='left-title'>Username Active Tasks</h1>
                        <p className='btn-title text-center'>This is the reserved spot for the tasks</p>

                        <Row>
                            <Col>
                                <p className='btn-title text-center'>Task1</p>
                                <p className='btn-title text-center'>Task2</p>
                                <p className='btn-title text-center'>Task3</p>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}
