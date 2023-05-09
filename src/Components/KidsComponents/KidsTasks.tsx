import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GetTasksByParentAndChildId, UpdateReward, GetTaskById } from '../../Services/DataService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function KidsTasks() {
  const [tasks, setTasks] = useState<object[]>([]);
  const [updateTaskList, setUpdateTaskList] = useState<number>(0);

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
      <Container>

        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title d-none d-sm-block '>Busy Bee!</h1>
            <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
            <p className='btn-title text-center'>Welcome, please check<br /> Today's tasks.<br /></p>
            <Row>
              <Col className='text-center'>
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
            <p className='btn-title text-center d-none d-sm-block'>Looking forward to complete these tasks:</p>
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
                              {/* <Row>
                                  <Col md={6}><FontAwesomeIcon icon={faEdit} onClick={async () => handleShowEdit(Number(taskId))} /></Col>
                                  <Col md={6}><FontAwesomeIcon icon={faTrash} onClick={async () => handleDelete(Number(taskId))} /></Col>
                              </Row> */}
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
      </Container>
    </div>
  )
}
