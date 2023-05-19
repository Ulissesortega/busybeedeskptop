import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GetRewardsByParentAndChildId, UpdateTask, UpdateChildUserStarCount, GetChildUserData } from '../../Services/DataService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import KidsNavBar from '../KidsNavBar'


export default function KidsRewards() {
    let userData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
    userData = JSON.parse(sessionStorage.UserData);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [rewards, setRewards] = useState<object[]>([]);
    const [claimReward, setClaimReward] = useState<{ id?: number, parentId?: number, childId?: number, reward?: string, rewardCost?: number, isDeleted?: boolean }>({});
    const [updateRewardList, setUpdateRewardList] = useState<number>(0);

    const handleShowComplete = async (reward: object) => {
        setClaimReward(reward);
        handleShow();
    }

    const handleClaim = async (reward: object) => {
        let claimReward: { id?: number, parentId?: number, childId?: number, reward?: string, rewardCost?: number, isDeleted?: boolean } = reward;
        let childUserData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
        childUserData = JSON.parse(sessionStorage.UserData);
        if (Number(childUserData.currentStarCount) >= Number(claimReward.rewardCost)) {
            await UpdateChildUserStarCount(Number(childUserData.userId), false, (Number(claimReward.rewardCost) * -1));
            sessionStorage.setItem("UserData", JSON.stringify(await GetChildUserData(String(userData.userUsername))));
            await GetChildUserData(String(userData.userUsername));
            await reloadRewards();
            setUpdateRewardList(updateRewardList + 1);
        } else {
            alert('Cannot Claim Reward');
        }
        handleClose();
    }

    const reloadRewards = async () => {
        let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
        childData = JSON.parse(sessionStorage.UserData);
        sessionStorage.setItem("Rewards", JSON.stringify(await GetRewardsByParentAndChildId(childData.parentId, childData.userId)));
        setRewards(JSON.parse(sessionStorage.Rewards));
    }

    useEffect(() => {
        reloadRewards();
    }, [updateRewardList])
    return (
        <div className='bgColor'>
            <KidsNavBar />
            <Container>
                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title d-none d-sm-block '>Busy Bee!</h1>
                        <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
                        <p className='btn-title text-center'>Welcome, here are<br /> your Rewards!<br /></p>
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
                        <h1 className='right-title d-none d-sm-block'>Rewards!</h1>
                        <div className='d-flex justify-content-center'>
                            <img className='img-fluid-lg-none d-xl-block d-xl-none' src={require('../../Assets/Medal.png')} alt="Logo" width={100} />
                        </div>
                        <h1 className='text-task d-sm-block'>Total Stars: {userData.currentStarCount}<FontAwesomeIcon icon={faStar} /></h1>
                        <p className='btn-title text-center d-none d-sm-block'>Looking forward to claim these:</p>
                        {
                            rewards.map((reward: object, idx: number) => {
                                let mappedReward: { id?: number, parentId?: number, childId?: number, reward?: string, rewardCost?: number, isDeleted?: boolean } = {};
                                mappedReward = reward;
                                if (!mappedReward.isDeleted) {
                                    return (
                                        <div key={idx}>
                                            {
                                                (<Row>
                                                    <div className='border-box text-task'>
                                                        <Col md={6} className='d-flex justify-content-center'>{mappedReward.reward}</Col>
                                                        <Col md={4} className='d-flex justify-content-center align-items-center'>{mappedReward.rewardCost} <FontAwesomeIcon icon={faStar} /></Col>
                                                        <Col md={2}>
                                                            <Row>
                                                                <Col md={6}>
                                                                    <FontAwesomeIcon icon={faCheck} onClick={() => handleShowComplete(mappedReward)} />
                                                                </Col>
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
                        <Row>
                            <Col className='right-title mt-2'>
                                <Link to="/KidsTasks">
                                    <button className='btn-format rounded-pill mt-3'>Check Tasks</button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Claim Reward?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={() => handleClaim(claimReward)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
