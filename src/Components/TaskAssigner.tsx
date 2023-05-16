import { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CreateTask, GetTasksByParentAndChildId, UpdateTask, GetTaskById, DeleteTask } from '../Services/DataService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import MyNavBar from './MyNavBar';

export default function TaskAssigner() {
    const [showEdit, setShowEdit] = useState(false);
    const handleClose = () => setShowEdit(false);
    const handleShow = () => setShowEdit(true);

    const [taskInstructionsCreate, setTaskInstructionsCreate] = useState<string>('');
    const [taskRewardCreate, setTaskRewardCreate] = useState<number>(0);
    const [tasks, setTasks] = useState<object[]>([]);

    const [taskInstructionsEdit, setTaskInstructionsEdit] = useState<string>('');
    const [taskRewardEdit, setTaskRewardEdit] = useState<number>(0);

    const [updateTaskList, setUpdateTaskList] = useState<number>(0);

    let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
    childData = JSON.parse(sessionStorage.UserData);

    const handleSubmit = async () => {
        if (!taskInstructionsCreate || !taskRewardCreate) {
            alert('Could Not Create Task');
        } else {
            let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
            parentData = JSON.parse(sessionStorage.AdminData);
            let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
            childData = JSON.parse(sessionStorage.UserData);
            let task = {
                id: 0,
                parentId: parentData.adultUserId,
                childId: childData.userId,
                taskInstructions: taskInstructionsCreate,
                taskReward: taskRewardCreate,
                isCompleted: false,
                isDeleted: false
            }
            await CreateTask(task);
            handleClose();
            reloadTasks();
        }
        setUpdateTaskList(updateTaskList + 1);
    }

    const handleShowEdit = async (taskId: number) => {
        sessionStorage.setItem("TaskToEdit", JSON.stringify(await GetTaskById(taskId)));
        let editTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = {};
        editTask = JSON.parse(sessionStorage.TaskToEdit)
        setTaskInstructionsEdit(String(editTask.taskInstructions));
        setTaskRewardEdit(Number(editTask.taskReward));
        handleShow();
    }

    const handleEdit = async () => {
        if (!taskInstructionsEdit || !taskRewardEdit) {
            alert('Could Not Update Task');
        } else {
            let editTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = {};
            editTask = JSON.parse(sessionStorage.TaskToEdit)
            let task = {
                id: editTask.id,
                parentId: editTask.parentId,
                childId: editTask.childId,
                taskInstructions: taskInstructionsEdit,
                taskReward: taskRewardEdit,
                isCompleted: false,
                isDeleted: false
            }
            await UpdateTask(task);
            reloadTasks();
            sessionStorage.removeItem("TaskToEdit");
            handleClose();
        }
        setUpdateTaskList(updateTaskList + 1);
    }

    const handleDelete = async (taskId: number) => {
        sessionStorage.setItem("TaskToDelete", JSON.stringify(await GetTaskById(taskId)));
        let deleteTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = {};
        deleteTask = JSON.parse(sessionStorage.TaskToDelete)
        let task = {
            id: deleteTask.id,
            parentId: deleteTask.parentId,
            childId: deleteTask.childId,
            taskInstructions: deleteTask.taskInstructions,
            taskReward: deleteTask.taskReward,
            isCompleted: false,
            isDeleted: false
        }
        await DeleteTask(task);
        reloadTasks();
        sessionStorage.removeItem("TaskToDelete");
        handleClose();
        setUpdateTaskList(updateTaskList + 1);
    }

    const reloadTasks = async () => {
        let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
        parentData = JSON.parse(sessionStorage.AdminData);
        let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
        childData = JSON.parse(sessionStorage.UserData);
        sessionStorage.setItem("Tasks", JSON.stringify(await GetTasksByParentAndChildId(parentData.adultUserId, childData.userId)));
        setTasks(JSON.parse(sessionStorage.Tasks));
    }

    useEffect(() => {
        reloadTasks();
    }, [updateTaskList])

    return (
        <div className='bgColor'>
            <MyNavBar/>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title d-none d-sm-block'>{childData.userUsername}!</h1>
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
                                    <Form.Control className='text-center rounded-pill w-75 mx-auto' type="text" placeholder="Get Ready For School" onChange={({ target: { value } }) => setTaskInstructionsCreate(value)} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center'>
                                <Form.Label className='btn-title'>Assign Start Rewards!</Form.Label>
                                <Form.Select className='rounded-pill w-75 mx-auto' aria-label="Default select example" onChange={({ target: { value } }) => setTaskRewardCreate(Number(value))} >
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
                        <h1 className='left-title d-none d-sm-block'>{childData.userUsername} Active Tasks</h1>
                        <p className='btn-title text-center'>This is the reserved spot for the tasks</p>

                        <Row>
                            <Col>
                                {
                                    tasks.map((task: object, idx: number) => {
                                        let mappedTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = {};
                                        mappedTask = task;
                                        if (!mappedTask.isDeleted) {
                                            let taskId = mappedTask.id;
                                            return (
                                                <div key={idx}>
                                                    {
                                                        (<Row>
                                                            <div className='border-box text-task'>
                                                                <Col md={6} className='d-flex justify-content-center'>{mappedTask.taskInstructions}</Col>
                                                                <Col md={4} className='d-flex justify-content-center align-items-center'>{mappedTask.taskReward} <FontAwesomeIcon icon={faStar} /></Col>
                                                                <Col md={2}>
                                                                    <Row>
                                                                        <Col md={6}><FontAwesomeIcon icon={faEdit} onClick={async () => handleShowEdit(Number(taskId))} /></Col>
                                                                        <Col md={6}><FontAwesomeIcon icon={faTrash} onClick={async () => handleDelete(Number(taskId))} /></Col>
                                                                    </Row>
                                                                </Col>
                                                            </div>
                                                        </Row>)
                                                    }
                                                </div>
                                            )
                                        }
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
            <Modal show={showEdit} onHide={handleClose}>
                <Modal.Header closeButton className='bgColormodal'>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bgColormodal'>
                    <Form.Control className='text-center rounded-pill w-75 mx-auto' type="text" defaultValue={taskInstructionsEdit} onChange={({ target: { value } }) => setTaskInstructionsEdit(value)} />
                    <Form.Select className='rounded-pill w-75 mx-auto mt-2' aria-label="Default select example " onChange={({ target: { value } }) => setTaskRewardEdit(Number(value))} >
                        <option className='text-center' defaultValue={taskRewardEdit}>{taskRewardEdit} Star(s)</option>
                        <option className='text-center' value="1">1 Star</option>
                        <option className='text-center' value="2">2 Stars</option>
                        <option className='text-center' value="3">3 Stars</option>
                        <option className='text-center' value="4">4 Stars</option>
                        <option className='text-center' value="5">5 Stars</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer className='bgColormodal'>
                    <Button variant="dark rounded-pill" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark rounded-pill" onClick={handleEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
