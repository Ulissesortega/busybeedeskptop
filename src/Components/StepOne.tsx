import { useContext } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/UserContext';

export default function StepOne() {
    let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
    parentData = JSON.parse(sessionStorage.AdminData);

    let navigate = useNavigate();
    const { setCreationBee } = useContext(MyContext);

    const setChildBowBee = () => {
        setCreationBee('BowBee');
        navigate("/BeeUser");
    }

    const setChildBowTieBee = () => {
        setCreationBee('BowTieBee');
        navigate("/BeeUser");
    }

    const setChildHoneyComb = () => {
        setCreationBee('HoneyComb');
        navigate("/BeeUser");
    }

    return (
        <div className='bgColor'>
            <Container>

                {/* Left-Side */}
                <Row>
                    <Col sm={12} md={12} xl={5}>
                        <h1 className='left-title d-none d-sm-block'>Hi {parentData.fullName}!</h1>
                        <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
                        <Row>
                            <h1 className='btn-title text-center'>Step 1</h1>
                            <p className='btn-title text-center'>Busy Bee works based on a<br /> Star Task Reward System.</p>
                            <Col className='d-flex justify-content-center'>
                                <img className='img-fluid d-none d-sm-block' src={require('../Assets/Medal.png')} alt="Logo" width={200} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className='btn-title text-center mt-2'>We need to Create a User for your Bee(s)</p>
                            </Col>
                        </Row>
                    </Col>

                    {/* Divider in the Middle */}
                    <Col xl={1}>
                        <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
                    </Col>


                    {/* Right Side */}
                    <Col xl={5}>
                        <h1 className='left-title d-none d-sm-block'>Kid(s) User for your Bee!</h1>
                        <p className='btn-title text-center'>Please choose one of the options bellow:</p>


                        <Row>
                            <Col xs={4} className='d-flex justify-content-center mt-xl-3'>
                                <img className='img-fluid' src={require('../Assets/BeeGirl.png')} alt="Logo" width={175} />
                            </Col>

                            <Col xs={4} className='d-flex justify-content-center mt-xl-3'>
                                <img className='img-fluid' src={require('../Assets/BeeBoy.png')} alt="Logo" width={175} />
                            </Col>
                            <Col xs={4} className='image-container'>
                                <img className='img-fluid' src={require('../Assets/CartoonHoneyComb.png')} alt="Logo" />
                            </Col>
                        </Row>

                        <Row clas>
                            <Col xs={4} className='d-flex justify-content-center'>
                                <button className='small-btn-format rounded-pill mt-3' onClick={setChildBowBee}>Bow Bee!</button>
                            </Col>

                            <Col xs={4} className='d-flex justify-content-center'>
                                <button className='small-btn-format rounded-pill mt-3' onClick={setChildBowTieBee}>Tie Bee!</button>
                            </Col>

                            <Col xs={4} className='d-flex justify-content-center'>
                                <button className='small-btn-format rounded-pill mt-3' onClick={setChildHoneyComb}>Comb!</button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
