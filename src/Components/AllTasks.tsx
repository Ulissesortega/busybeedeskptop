import { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CreateTask, GetTasksByParentId, UpdateTask, GetTaskById, DeleteTask, UpdateChildUserStarCount, GetChildUserDataById } from '../Services/DataService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash, faStar, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import MyNavBar from './MyNavBar';

export default function AllTasks() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [showEdit, setShowEdit] = useState(false);
    const [failedEdit, setFailedEdit] = useState(false);
    const handleEditShow = () => setShowEdit(true);
    const handleEditClose = () => {
        setShowEdit(false)
        setFailedEdit(false);
    };

    const [bees, setBees] = useState<object[]>([]);

    const [childIdCreate, setChildIdCreate] = useState<number>(0);
    const [taskInstructionsCreate, setTaskInstructionsCreate] = useState<string>('');
    const [taskRewardCreate, setTaskRewardCreate] = useState<number>(0);
    const [tasks, setTasks] = useState<object[]>([]);

    const [taskInstructionsEdit, setTaskInstructionsEdit] = useState<string>('');
    const [taskRewardEdit, setTaskRewardEdit] = useState<number>(0);

    const [updateTaskList, setUpdateTaskList] = useState<number>(0);

    const handleSubmit = async () => {
        if (!taskInstructionsCreate || !taskRewardCreate || !childIdCreate) {
            handleShow();
        } else {
            let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
            parentData = JSON.parse(sessionStorage.AdminData);
            let task = { id: 0, parentId: parentData.adultUserId, childId: childIdCreate, taskInstructions: taskInstructionsCreate, taskReward: taskRewardCreate, isCompleted: false, isDeleted: false }
            await CreateTask(task);
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
        handleEditShow();
    }

    const handleComplete = async (task: object) => {
        let completeTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = task;
        completeTask.isDeleted = true;
        let childUserData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = await GetChildUserDataById(Number(completeTask.childId));
        childUserData.currentStarCount = Number(childUserData.currentStarCount) + Number(completeTask.taskReward);
        childUserData.totalStarCount = Number(childUserData.totalStarCount) + Number(completeTask.taskReward);
        await UpdateChildUserStarCount(Number(childUserData.userId), true, Number(completeTask.taskReward));
        await DeleteTask(completeTask);
        reloadTasks();
        handleEditClose();
        setUpdateTaskList(updateTaskList + 1);
    }

    const handleEdit = async () => {
        if (!taskInstructionsEdit || !taskRewardEdit) {
            setFailedEdit(true);
        } else {
            let editTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = {};
            editTask = JSON.parse(sessionStorage.TaskToEdit)
            let task = { id: editTask.id, parentId: editTask.parentId, childId: editTask.childId, taskInstructions: taskInstructionsEdit, taskReward: taskRewardEdit, isCompleted: false, isDeleted: false }
            await UpdateTask(task);
            reloadTasks();
            sessionStorage.removeItem("TaskToEdit");
            handleEditClose();
        }
        setUpdateTaskList(updateTaskList + 1);
    }

    const handleIncomplete = async (task: object) => {
        let completeTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = task;
        completeTask.isCompleted = false;
        await UpdateTask(completeTask);
        reloadTasks();
        handleEditClose();
        setUpdateTaskList(updateTaskList + 1);
    }

    const handleDelete = async (taskId: number) => {
        sessionStorage.setItem("TaskToDelete", JSON.stringify(await GetTaskById(taskId)));
        let deleteTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = {};
        deleteTask = JSON.parse(sessionStorage.TaskToDelete)
        let task = { id: deleteTask.id, parentId: deleteTask.parentId, childId: deleteTask.childId, taskInstructions: deleteTask.taskInstructions, taskReward: deleteTask.taskReward, isCompleted: deleteTask.isCompleted, isDeleted: deleteTask.isDeleted }
        await DeleteTask(task);
        reloadTasks();
        sessionStorage.removeItem("TaskToDelete");
        handleEditClose();
        setUpdateTaskList(updateTaskList + 1);
    }

    const reloadTasks = async () => {
        let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
        parentData = JSON.parse(sessionStorage.AdminData);
        sessionStorage.setItem("AllTasks", JSON.stringify(await GetTasksByParentId(parentData.adultUserId)));
        setTasks(JSON.parse(sessionStorage.AllTasks));
    }

    useEffect(() => {
        reloadTasks();
    }, [updateTaskList])

    useEffect(() => {
        setBees(JSON.parse(sessionStorage.ChildUsers))
    }, [])

    return (
        <div className='bgColor'>
            <MyNavBar />
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
                        <Row>
                            <Col>
                                <h1 className='btn-title text-center'>Step 2</h1>
                                <p className='btn-title text-center'>Let's create Tasks for our bees!</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center'>
                                <Form.Label className='btn-title'>Select a Bee!</Form.Label>
                                <Form.Select className='rounded-pill w-75 mx-auto' aria-label="Default select example" onChange={({ target: { value } }) => setChildIdCreate(Number(value))} >
                                    <option className='text-center'>Options</option>
                                    {bees.map((bee: object, idx: number) => {
                                        let mappedBee: { id?: number, parentId?: number, username?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
                                        mappedBee = bee;
                                        return (
                                            <option key={idx} className='text-center' value={mappedBee.id}>{mappedBee.username}</option>
                                        );
                                    })}
                                </Form.Select>
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
                                    <option className='text-center' value="6">6 Stars</option>
                                    <option className='text-center' value="7">7 Stars</option>
                                    <option className='text-center' value="8">8 Stars</option>
                                    <option className='text-center' value="9">9 Stars</option>
                                    <option className='text-center' value="10">10 Stars</option>
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
                        <h1 className='left-title d-none d-sm-block'>All Active Tasks</h1>
                        <Row>
                            <Col>
                                {tasks.map((task: object, idx: number) => {
                                    let mappedTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = {};
                                    mappedTask = task;
                                    if (!mappedTask.isDeleted && mappedTask.isCompleted) {
                                        return (
                                            <div key={idx} className='border-box text-task'>
                                                <div className='d-flex justify-content-start'>
                                                    <div>{mappedTask.taskInstructions}</div>
                                                </div>
                                                <div className='d-flex justify-content-end align-items-center'>
                                                    <span>{mappedTask.taskReward}</span>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faCheck} className='edit-icon' onClick={async () => handleComplete(mappedTask)} />
                                                    <FontAwesomeIcon icon={faX} className='trash-icon' onClick={async () => handleIncomplete(mappedTask)} />
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className='btn-title text-center'></p>
                                {tasks.map((task: object, idx: number) => {
                                    let mappedTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = {};
                                    mappedTask = task;
                                    if (!mappedTask.isDeleted && !mappedTask.isCompleted) {
                                        let taskId = mappedTask.id;
                                        return (
                                            <div key={idx} className='border-box text-task'>
                                                <div className='d-flex justify-content-start'>
                                                    <div>{mappedTask.taskInstructions}</div>
                                                </div>
                                                <div className='d-flex justify-content-end align-items-center'>
                                                    <span>{mappedTask.taskReward}</span>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faEdit} className='edit-icon' onClick={async () => handleShowEdit(Number(taskId))} />
                                                    <FontAwesomeIcon icon={faTrash} className='trash-icon' onClick={async () => handleDelete(Number(taskId))} />
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Link to="/AllRewards">
                                    <button className='btn-format rounded-pill mt-3'>Add Rewards</button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
            <Modal className={failedEdit ? 'failedEdit' : ''} show={showEdit} onHide={handleEditClose}>
                <Modal.Header closeButton className='bgColormodal'>
                    <Modal.Title>{failedEdit ? 'Could Not Edit Task' : 'Edit Task'}</Modal.Title>
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
                        <option className='text-center' value="6">6 Stars</option>
                        <option className='text-center' value="7">7 Stars</option>
                        <option className='text-center' value="8">8 Stars</option>
                        <option className='text-center' value="9">9 Stars</option>
                        <option className='text-center' value="10">10 Stars</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer className='bgColormodal'>
                    <Button variant="dark rounded-pill" onClick={handleEditClose}>
                        Close
                    </Button>
                    <Button variant="dark rounded-pill" onClick={handleEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton className='bgColormodal'>
                    <Modal.Title>Could Not Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Footer className='bgColormodal'>
                    <Button variant="dark rounded-pill" onClick={handleClose}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
