import { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CreateReward, GetRewardsByParentAndChildId } from '../Services/DataService';

export default function RewardCreator() {

    const [rewardText, setRewardText] = useState<string>('');
    const [rewardCost, setRewardCost] = useState<number>(0);
    const [rewards, setRewards] = useState<object[]>([]);
    const [updateRewards, setUpdateRewards] = useState<number>(0);

    
    let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
    childData = JSON.parse(sessionStorage.UserData);

    const handleSubmit = async () => {
        if (!rewardText || !rewardCost) {
            alert('Could Not Create Reward');
        } else {
            let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
            parentData = JSON.parse(sessionStorage.AdminData);
            let childData: { userId?: number, parentId?: number, userUsername?: string, currentStarCount?: number, totalStarCount?: number, avatarLook?: string } = {};
            childData = JSON.parse(sessionStorage.UserData);
            let reward = {
                id: 0,
                parentId: parentData.adultUserId,
                childId: childData.userId,
                Reward: rewardText,
                RewardCost: rewardCost,
                isDeleted: false
            }
            CreateReward(reward);
            reloadRewards();
        }
        setUpdateRewards(updateRewards + 1);
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
    }, [updateRewards])

    return (
        <div className='bgColor'>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title d-none d-sm-block'>{childData.userUsername}!</h1>
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
                        <h1 className='left-title d-none d-sm-block'>Username Available Rewards Rewards</h1>
                        <p className='btn-title text-center'>This is the reserved spot for the rewards</p>

                        <Row>
                            <Col>
                                {
                                    rewards.map((reward: object, idx: number) => {
                                        let mappedReward: { id?: number, parentId?: number, childId?: number, reward?: string, rewardCost?: number, isDeleted?: boolean } = {};
                                        mappedReward = reward;
                                        return (
                                            <div key={idx}>
                                                {
                                                    (<Row>
                                                        <Col md={6} className='d-flex justify-content-center'>{mappedReward.reward}</Col>
                                                        <Col md={6} className='d-flex justify-content-center'>{mappedReward.rewardCost}</Col>
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
