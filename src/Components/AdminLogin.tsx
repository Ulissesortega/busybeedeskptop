import { useState, useContext } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AdultLogin, GetAdultUserData, GetChildrenUsersByParentId } from '../Services/DataService';
import { MyContext } from '../Context/UserContext';
import MyNavBar from './MyNavBar';

export default function AdminLogin() {
  const [disabled, setDisabled] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  let navigate = useNavigate();
  const { setAdmin } = useContext(MyContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    setAdmin(await GetAdultUserData(email));
    let userData: object = {
      email,
      password
    }
    try {
      let token = await AdultLogin(userData);
      sessionStorage.setItem("AdminData", JSON.stringify(await GetAdultUserData(email)));
      let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
      parentData = JSON.parse(sessionStorage.AdminData);
      localStorage.setItem("Token", token.token);
      console.log('Success');
      await GetChildrenUsersByParentId(Number(parentData.adultUserId)) != null ? navigate("/UsersDashboard") : navigate("/StepOne");
    } catch (err) {
      handleShow();
    }
  }

  return (
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>
          <Col sm={12} md={12} xl={5}>
            <h1 className='left-title d-none d-sm-block'>Busy Bee!</h1>
            <Row>
              <Col className='mt-4 text-center'>
                <img className='image-radius img-fluid' src={require('../Assets/Logo.png')} alt="Logo" width={350} />
              </Col>
            </Row>
          </Col>

          {/* Divider in the Middle */}
          <Col xl={1}><div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
          </Col>


          {/* Right Side */}
          <Col xl={5}>
            <h1 className='left-title d-none d-sm-block'>Admin Login</h1>

            <Row>
              <Col className='right-title mt-2'>
                <Row>
                </Row>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label className='btn-title'>Email address</Form.Label>
                  <Form.Control className='text-center rounded-pill w-75 mx-auto' type="Email" placeholder="Your Email" onChange={({ target: { value } }) => setEmail(value)} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className='right-title mt-1'>
                <Row>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='btn-title'>Password</Form.Label>
                  <Form.Control className='text-center rounded-pill w-75 mx-auto' type="Password" placeholder="Your Password" onChange={({ target: { value } }) => setPassword(value)} />
                </Form.Group>

                <button className='btn-format rounded-pill mt-2' disabled={disabled} onClick={() => {
                  handleSubmit(); setDisabled(true); }}>Login</button>

                <Row>
                  <Col>
                    <p className='btn-title mt-4'><Link to='/PasswordRecovery'>Forgot Your Password?</Link></p>
                  </Col>
                </Row>

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton className='bgColormodal'>
          <Modal.Title>Could Not Login</Modal.Title>
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
