import React, { useState, useContext, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CreateReward } from '../Services/DataService';
import { MyContext } from '../Context/UserContext';

export default function TaskAssigner() {
    const { adminData } = useContext(MyContext);
    const { userData } = useContext(MyContext);
    
    const [rewardText, setRewardText] = useState<string>('');
    const [rewardCost, setRewardCost] = useState<number>(0);
    const [rewards, setRewards] = useState<object[]>([]);
    const [updateRewards, setUpdateRewards] = useState<number>(0);

    // const handleSubmit = async () => {
    //     if (!taskInstructions || !taskReward) {
    //         alert('Could Not Create Task');
    //     } else {
    //         let parentData: { adultUserId?: number, adultUserEmail?: string } = {};
    //         parentData = adminData;
    //         console.log(userData);
    //         let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number } = {};
    //         childData = userData;
    //         let task = {
    //             id: 0,
    //             parentId: parentData.adultUserId,
    //             childId: childData.userId,
    //             taskInstructions,
    //             taskReward,
    //             isCompleted: false,
    //             isDeleted: false
    //         }
    //         console.log(task);
    //         CreateTask(task);
    //         reloadTasks();
    //     }
    //     setUpdateTasks(updateTasks + 1);
    // }

    return (
        <div className='bgColor'>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title d-none d-sm-block'>Username!</h1>
                        <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>                        
                        <Row>
                            <Col>
                                <h1 className='btn-title text-center'>Step 3</h1>
                                <p className='btn-title text-center'></p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Form.Group className="mb-2" controlId="formBasic Task">
                                    <Form.Label className='btn-title'>Create A Rewards</Form.Label>
                                    <Form.Control className='text-center rounded-pill w-75 mx-auto' type="text" placeholder="1 hour Nintendo Switch" onChange={({ target: { value } }) => setRewardText(value)} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center'>
                                <Form.Label className='btn-title'>Start Reward Price</Form.Label>
                                <Form.Select className='rounded-pill w-75 mx-auto' aria-label="Default select example" onChange={({ target: { value } }) => setRewardCost(Number(value))}>
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
                                {/* <Link to="/AdminInfo"> */}
                                    <button className='btn-format rounded-pill mt-3'>Add Reward</button>
                                {/* </Link> */}
                            </Col>
                        </Row>
                    </Col>

                    {/* Divider in the Middle */}
                    <Col xl={1}>
                        <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
                    </Col>


                    {/* Right Side */}
                    <Col xl={5}>
                        <h1 className='left-title d-none d-sm-block'>Username Available Rewards Rewards</h1>
                        <p className='btn-title text-center'>This is the reserved spot for the rewards</p>

                        <Row>
                            <Col>
                                <p className='btn-title text-center'>Reward 1</p>
                                <p className='btn-title text-center'>Reward 2</p>
                                <p className='btn-title text-center'>Reward 3</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Link to="/UsersDashboard">
                                    <button className='btn-format rounded-pill mt-3'>Dashboard</button>
                                </Link>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}
