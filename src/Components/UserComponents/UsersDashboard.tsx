import React, { useEffect, useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { GetChildrenUsersByParentId, GetChildUserData } from '../../Services/DataService';
import BoyBeeImg from '../../Assets/BeeBoy.png';
import GirlBeeImg from '../../Assets/BeeGirl.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';

export default function UsersDashboard() {
  let navigate = useNavigate();
  let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
  parentData = JSON.parse(sessionStorage.AdminData);

  const [childrenUsers, setChildrenUsers] = useState<object[]>([]);
  const [username, setUsername] = useState<any>('');

  const reloadChildUsers = async () => {
    sessionStorage.setItem("ChildUsers", JSON.stringify(await GetChildrenUsersByParentId(Number(parentData.adultUserId))));
    setChildrenUsers(JSON.parse(sessionStorage.ChildUsers));
  }

  const handleClick = async (username: any) => {
    sessionStorage.setItem("UserData", JSON.stringify(await GetChildUserData(username)));
    navigate('/TaskAssigner');
  }

  useEffect(() => {
    reloadChildUsers();
  }, [])

  return (
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title '>Hi {parentData.fullName}!</h1>
            <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
            <p className='btn-title text-center'>From here You'll be able to<br /> manage your Busy Bee(s)</p>
            <Col className='text-center'>
              <img className='image-radius img-fluid' src={require('../../Assets/bees.png')} alt="Logo" width={350} />
            </Col>
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
              <Col>
                {
                  childrenUsers.map((user: object, idx: number) => {
                    let childUser: { id?: number, parentId?: number, username?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
                    childUser = user;
                    let beeUsername = childUser.username;
                    return (
                      <div key={idx}>
                        {
                          (<>
                            <Row>
                              <Col md={6}>
                                <Row>
                                  <Col className='d-flex justify-content-center'>
                                    <img className='img-fluid d-none d-sm-block' src={childUser.avatarLook === 'Girl' ? GirlBeeImg : BoyBeeImg} alt="Logo" width={200} />
                                    <img className='img-fluid d-block d-sm-none' src={childUser.avatarLook === 'Girl' ? GirlBeeImg : BoyBeeImg} alt="Logo" width={150} />
                                  </Col>
                                </Row>
                                <Row>
                                  <Col className='d-flex justify-content-center'>
                                    <button className='btn-format rounded-pill mt-3' onClick={async () => {
                                      handleClick(beeUsername);
                                      console.log(beeUsername);
                                    }}>{beeUsername}</button>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </>)
                        }
                      </div>
                    )
                  })
                }
              </Col>
            </Row>

            <Row>
              <Col className='right-title mt-2'>
                <Link to="/StepOne">
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
