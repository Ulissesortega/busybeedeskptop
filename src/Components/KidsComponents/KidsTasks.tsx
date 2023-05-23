import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GetTasksByParentAndChildId, UpdateTask, GetChildUserData } from '../../Services/DataService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import KidsNavBar from '../KidsNavBar'

export default function KidsTasks() {
  let userData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
  userData = JSON.parse(sessionStorage.UserData);

  let taskNum: number = 0;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tasks, setTasks] = useState<object[]>([]);
  const [completeTask, setCompleteTask] = useState<{ childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number }>({});
  const [updateTaskList, setUpdateTaskList] = useState<number>(0);

  const handleShowComplete = async (task: object) => {
    setCompleteTask(task);
    handleShow();
  }

  const handleComplete = async (task: object) => {
    let completeTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = task;
    completeTask.isCompleted = true;
    await UpdateTask(completeTask);
    await reloadTasks();
    setUpdateTaskList(updateTaskList + 1);
    handleClose();
  }

  const reloadTasks = async () => {
    let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
    childData = JSON.parse(sessionStorage.UserData);
    sessionStorage.setItem("Tasks", JSON.stringify(await GetTasksByParentAndChildId(childData.parentId, childData.userId)));
    setTasks(JSON.parse(sessionStorage.Tasks));
  }

  

  useEffect(() => {
    reloadTasks();
  }, [updateTaskList])
  return (
    <div className='bgColor'>
      <KidsNavBar/>
      <Container>
        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title d-none d-sm-block '>Busy Bee!</h1>
            <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
            <p className='btn-title text-center'>Welcome, please check<br /> Today's tasks.<br /></p>
            <Row>
              <Col className='d-flex justify-content-center'>
                <img className='image-radius img-fluid d-none d-sm-block' src={require('../../Assets/Beetasks.png')} alt="Logo" width={350} />
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
            <div  className='d-flex justify-content-center'>
            <img className='img-fluid-lg-none d-xl-block d-xl-none' src={require('../../Assets/BeeTaskList.png')} alt="Logo" width={100} />     
            </div>
            <h1 className='text-task d-sm-block'>Total Stars: {userData.currentStarCount}<FontAwesomeIcon icon={faStar} /></h1>
            <p className='btn-title text-center d-none d-sm-block'>Looking forward to complete these tasks:</p>
            {
              tasks.map((task: object, idx: number) => {
                let mappedTask: { childId?: number, id?: number, isCompleted?: boolean, isDeleted?: boolean, parentId?: number, taskInstructions?: string, taskReward?: number } = {};
                mappedTask = task;
                if (!mappedTask.isDeleted && !mappedTask.isCompleted) {
                  taskNum++;
                  return (
                    <div key={idx}>
                      {
                        (<Row>
                          <div className='border-box text-task'>
                            <Col md={6} className='d-flex justify-content-center'>{mappedTask.taskInstructions}</Col>
                            <Col md={4} className='d-flex justify-content-center align-items-center'>{mappedTask.taskReward} <FontAwesomeIcon icon={faStar} /></Col>
                            <Col md={2}>
                              <Row>
                                <Col md={6}>
                                  <FontAwesomeIcon icon={faCheck} onClick={() => handleShowComplete(mappedTask)} />
                                </Col>
                              </Row>
                            </Col>
                          </div>
                        </Row>)
                      }
                    </div>
                  )
                }
              })}
              {!taskNum ? (<p className='btn-title text-center d-none d-sm-block'>Let Your BeeKeeper Know Youve Done All Your Tasks!</p>) : (null)}
        <Row>
          <Col className='right-title mt-2'>
            <Link to="/KidsRewards">
              <button className='btn-format rounded-pill mt-3'>Check Rewards</button>
            </Link>
          </Col>
        </Row>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bgColormodal' closeButton>
          <Modal.Title>Complete Task?</Modal.Title>
        </Modal.Header>
        <Modal.Footer className='bgColormodal'>
          <Button variant="dark rounded-pill" onClick={handleClose}>
            No
          </Button>
          <Button variant="dark rounded-pill" onClick={() => handleComplete(completeTask)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
