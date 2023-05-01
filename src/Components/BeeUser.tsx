import { useState, useContext } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { MyContext } from '../Context/UserContext';
import { CreateChildAccount, GetChildUserData } from '../Services/DataService';
import { useNavigate } from 'react-router-dom';
import leftImage from '../Assets/BeeBoy.png';
import RightImage from '../Assets/BeeGirl.png';

export default function BeeUser() {
    let navigate = useNavigate();
    const { createBee } = useContext(MyContext);
    const { adminData } = useContext(MyContext);
    const { setUser } = useContext(MyContext);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleCreateBee = async () => {
        if (!username || !password) {
            alert("Account Not Created");
        } else {
            let parentData: { adultUserId?: number, adultUserEmail?: string, avatarLook?: string } = {};
            parentData = adminData;
            let beeData: object = {
                id: 0,
                parentId: parentData.adultUserId,
                username,
                password,
                CurrentStarCount: 0,
                TotalStarCount: 0,
                createBee
            }
            if (await CreateChildAccount(beeData)) {
                setUser(await GetChildUserData(username));
                sessionStorage.setItem("UserData", JSON.stringify(await GetChildUserData(username)));
                console.log('Success');
                navigate("/TaskAssigner")
            } else {
                alert("Account Not Created");
            }
        }

    }

    return (
        <div className='bgColor'>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title d-none d-sm-block'>Bee Awesome!</h1>
                        <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
                        <Row>
                            <p className='btn-title text-center'>Let's give our Bee<br />A Name and Password</p>
                            <Col className='d-flex justify-content-center'>
                                <img className='img-fluid d-none d-sm-block' src={createBee === 'Girl' ? RightImage : leftImage} alt="Logo" width={200} />
                                <img className='img-fluid d-block d-sm-none' src={createBee === 'Girl' ? RightImage : leftImage} alt="Logo" width={150} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className='btn-title text-center'>The easier the better<br />So they never forget</p>
                            </Col>
                        </Row>
                    </Col>

                    {/* Divider in the Middle */}
                    <Col xl={1}>
                        <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
                    </Col>


                    {/* Right Side */}
                    <Col xl={5}>
                        <h1 className='left-title d-none d-sm-block'>Bee User!</h1>
                        <p className='btn-title text-center'>Please enter the info below</p>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Form.Group className="mb-2" controlId="formBasic BeeName">
                                    <Form.Label className='btn-title'>Bee Name</Form.Label>
                                    <Form.Control className='text-center rounded-pill w-75 mx-auto' type="text" placeholder="Kid's User Name" onChange={({ target: { value } }) => setUsername(value)} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Form.Group className="mb-2" controlId="formBasic BeePassword">
                                    <Form.Label className='btn-title'>Password</Form.Label>
                                    <Form.Control className='text-center rounded-pill w-75 mx-auto' type="Password" placeholder="Your Password" onChange={({ target: { value } }) => setPassword(value)} />
                                </Form.Group>
                                <button className='btn2-format rounded-pill mt-3' onClick={handleCreateBee}>Create User</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
