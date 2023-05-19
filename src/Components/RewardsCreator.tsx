import { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CreateReward, GetRewardsByParentAndChildId, UpdateReward, GetRewardById, DeleteReward } from '../Services/DataService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import MyNavBar from './MyNavBar';

export default function RewardCreator() {
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

    const [rewardTextCreate, setRewardTextCreate] = useState<string>('');
    const [rewardCostCreate, setRewardCostCreate] = useState<number>(0);
    const [rewards, setRewards] = useState<object[]>([]);

    const [rewardTextEdit, setRewardTextEdit] = useState<string>('');
    const [rewardCostEdit, setRewardCostEdit] = useState<number>(0);

    const [updateRewardList, setUpdateRewardList] = useState<number>(0);

    let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
    childData = JSON.parse(sessionStorage.UserData);

    const handleSubmit = async () => {
        if (!rewardTextCreate || !rewardCostCreate) {
            handleShow();
        } else {
            let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
            parentData = JSON.parse(sessionStorage.AdminData);
            let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
            childData = JSON.parse(sessionStorage.UserData);
            let reward = {
                id: 0,
                parentId: parentData.adultUserId,
                childId: childData.userId,
                Reward: rewardTextCreate,
                RewardCost: rewardCostCreate,
                isDeleted: false
            }
            await CreateReward(reward);
            reloadRewards();
        }
        setUpdateRewardList(updateRewardList + 1);
    }

    const handleShowEdit = async (rewardId: number) => {
        sessionStorage.setItem("RewardToEdit", JSON.stringify(await GetRewardById(rewardId)));
        let editReward: { id?: number, parentId?: number, childId?: number, reward?: string, rewardCost?: number, isDeleted?: boolean } = {};
        editReward = JSON.parse(sessionStorage.RewardToEdit)
        setRewardTextEdit(String(editReward.reward));
        setRewardCostEdit(Number(editReward.rewardCost));
        handleEditShow();
        console.log(editReward);
    }

    const handleEdit = async () => {
        if (!rewardTextEdit || !rewardCostEdit) {
            setFailedEdit(true);
        } else {
            let editReward: { id?: number, parentId?: number, childId?: number, reward?: string, rewardCost?: number, isDeleted?: boolean } = {};
            editReward = JSON.parse(sessionStorage.RewardToEdit)
            let reward = {
                id: editReward.id,
                parentId: editReward.parentId,
                childId: editReward.childId,
                reward: rewardTextEdit,
                rewardCost: rewardCostEdit,
                isDeleted: false
            }
            await UpdateReward(reward);
            reloadRewards();
            sessionStorage.removeItem("RewardToEdit");
            handleEditClose();
        }
        setUpdateRewardList(updateRewardList + 1);
    }

    const handleDelete = async (rewardId: number) => {
        sessionStorage.setItem("RewardToDelete", JSON.stringify(await GetRewardById(rewardId)));
        let deleteReward: { id?: number, parentId?: number, childId?: number, reward?: string, rewardCost?: number, isDeleted?: boolean } = {};
        deleteReward = JSON.parse(sessionStorage.RewardToDelete)
        let reward = {
            id: deleteReward.id,
            parentId: deleteReward.parentId,
            childId: deleteReward.childId,
            reward: deleteReward.reward,
            rewardCost: deleteReward.rewardCost,
            isDeleted: false
        }
        await DeleteReward(reward);
        reloadRewards();
        sessionStorage.removeItem("RewardToDelete");
        handleEditClose();
        setUpdateRewardList(updateRewardList + 1);
    }

    const reloadRewards = async () => {
        let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
        parentData = JSON.parse(sessionStorage.AdminData);
        let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
        childData = JSON.parse(sessionStorage.UserData);
        sessionStorage.setItem("Rewards", JSON.stringify(await GetRewardsByParentAndChildId(parentData.adultUserId, childData.userId)));
        setRewards(JSON.parse(sessionStorage.Rewards));
    }

    useEffect(() => {
        reloadRewards();
    }, [updateRewardList])

    return (
        <div className='bgColor'>
            <MyNavBar />
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title d-none d-sm-block'>{childData.userUsername}!</h1>
                        <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
                        <Row>
                            <Col>
                                <h1 className='btn-title text-center'>Step 3</h1>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Form.Group className="mb-2" controlId="formBasic Task">
                                    <Form.Label className='btn-title'>Create Rewards</Form.Label>
                                    <Form.Control className='text-center rounded-pill w-75 mx-auto' type="text" placeholder="1 hour Nintendo Switch" onChange={({ target: { value } }) => setRewardTextCreate(value)} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='text-center'>
                                <Form.Label className='btn-title'>Start Reward Price</Form.Label>
                                <Form.Select className='rounded-pill w-75 mx-auto' aria-label="Default select example" onChange={({ target: { value } }) => setRewardCostCreate(Number(value))}>
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
                                <button className='btn-format rounded-pill mt-3' onClick={handleSubmit}>Add Reward</button>
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
                        <h1 className='left-title d-none d-sm-block'>{childData.userUsername} Available Rewards Rewards</h1>

                        <Row>
                            <Col>
                                {rewards.map((reward: object, idx: number) => {
                                    let mappedReward: {
                                        id?: number,
                                        parentId?: number,
                                        childId?: number,
                                        reward?: string,
                                        rewardCost?: number,
                                        isDeleted?: boolean
                                    } = {};
                                    mappedReward = reward;
                                    if (!mappedReward.isDeleted) {
                                        let rewardId = mappedReward.id;
                                        return (
                                            <div key={idx} className='border-box text-task'>
                                                <div className='d-flex justify-content-start'>
                                                    <div>{mappedReward.reward}</div>
                                                </div>
                                                <div className='d-flex justify-content-end align-items-center'>
                                                    <span>{mappedReward.rewardCost}</span>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <FontAwesomeIcon icon={faEdit} className='edit-icon' onClick={async () => handleShowEdit(Number(rewardId))} />
                                                    <FontAwesomeIcon icon={faTrash} className='trash-icon' onClick={async () => handleDelete(Number(rewardId))} />
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
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
            <Modal className={failedEdit ? 'failedEdit' : ''} show={showEdit} onHide={handleEditClose}>
                <Modal.Header closeButton className='bgColormodal'>
                    <Modal.Title>{failedEdit ? 'Could Not Edit Reward' : 'Edit Reward'}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bgColormodal'>
                    <Form.Control className='text-center rounded-pill w-75 mx-auto' type="text" defaultValue={rewardTextEdit} onChange={({ target: { value } }) => setRewardTextEdit(value)} />
                    <Form.Select className='rounded-pill w-75 mx-auto mt-2' aria-label="Default select example" onChange={({ target: { value } }) => setRewardCostEdit(Number(value))} >
                        <option className='text-center' defaultValue={rewardCostEdit}>{rewardCostEdit} Star(s)</option>
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
                    <Modal.Title>Could Not Create Reward</Modal.Title>
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
