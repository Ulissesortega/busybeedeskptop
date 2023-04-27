import React, { useState, useContext, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CreateTask, GetTasksByParentAndChildId } from '../Services/DataService';
import { MyContext } from '../Context/UserContext';

export default function TaskAssigner() {
    const { adminData } = useContext(MyContext);
    const { userData } = useContext(MyContext);

    const [taskInstructions, setTaskInstructions] = useState<string>('');
    const [taskReward, setTaskReward] = useState<number>(0);
    const [tasks, setTasks] = useState<object[]>([]);
    const [updateTasks, setUpdateTasks] = useState<number>(0);

    const handleSubmit = async () => {
        if (!taskInstructions || !taskReward) {
            alert('Could Not Create Task');
        } else {
            let parentData: { adultUserId?: number, adultUserEmail?: string } = {};
            parentData = adminData;
            console.log(userData);
            let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number } = {};
            childData = userData;
            let task = {
                id: 0,
                parentId: parentData.adultUserId,
                childId: childData.userId,
                taskInstructions,
                taskReward,
                isCompleted: false,
                isDeleted: false
            }
            console.log(task);
            CreateTask(task);
            reloadTasks();
        }
        setUpdateTasks(updateTasks + 1);
    }

    const reloadTasks = async () => {
        let parentData: { adultUserId?: number, adultUserEmail?: string } = {};
        parentData = adminData;
        let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number } = {};
        childData = userData;
        setTasks(await GetTasksByParentAndChildId(parentData.adultUserId, childData.userId))
        console.log(tasks);
    }

    useEffect(() => {
        reloadTasks();
    }, [updateTasks])

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
                                <h1 className='btn-title text-center'>Step 2</h1>
                                <p className='btn-title text-center'>Let's create Tasks for our bee!</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Form.Group className="mb-2" controlId="formBasic Task">
                                    <Form.Label className='btn-title'>Enter a Task</Form.Label>
                                    <Form.Control className='text-center rounded-pill w-75 mx-auto' type="text" placeholder="Get Ready For School" onChange={({ target: { value } }) => setTaskInstructions(value)} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center'>
                                <Form.Label className='btn-title'>Assign Start Rewards!</Form.Label>
                                <Form.Select className='rounded-pill w-75 mx-auto' aria-label="Default select example" onChange={({ target: { value } }) => setTaskReward(Number(value))} >
                                    <option className='text-center'>Options</option>
                                    <option className='text-center' value="1">1 Star</option>
                                    <option className='text-center' value="2">2 Stars</option>
                                    <option className='text-center' value="3">3 Stars</option>
                                    <option className='text-center' value="4">4 Stars</option>
                                    <option className='text-center' value="5">5 Stars</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                {/* <Link to="/AdminInfo"> */}
                                <button className='btn-format rounded-pill mt-3' onClick={handleSubmit}>Add Task</button>
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
                        <h1 className='left-title d-none d-sm-block'>Username Active Tasks</h1>
                        <p className='btn-title text-center'>This is the reserved spot for the tasks</p>

                        <Row>
                            <Col>
                                {
                                    tasks.map((task: object, idx: number) => {
                                        let mappedTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = {};
                                        mappedTask = task;
                                        return (
                                            <div key={idx}>
                                                {
                                                    
                                                    (<Row>
                                                        <div className='border-box'>
                                                        <Col md={6} className='d-flex justify-content-center  '>{mappedTask.taskInstructions}</Col>
                                                        <Col md={6} className='d-flex justify-content-center border-right'>{mappedTask.taskReward}</Col>
                                                        </div>
                                                    </Row>)
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Link to="/RewardsCreator">
                                    <button className='btn-format rounded-pill mt-3'>Add Rewards</button>
                                </Link>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}
