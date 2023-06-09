import { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import { ChildLogin, GetChildUserData } from '../../Services/DataService';
import { useNavigate } from 'react-router-dom';

export default function KidsLogin() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  let navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    let userData = {
      username,
      password
    }
    try {
      let token = await ChildLogin(userData);
      localStorage.setItem("Token", token.token);
      sessionStorage.setItem("UserData", JSON.stringify(await GetChildUserData(username)));
      navigate('/KidsTasks');
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
                <img className='image-radius img-fluid' src={require('../../Assets/Logo.png')} alt="Logo" width={350} />
              </Col>
            </Row>
          </Col>

          {/* Divider in the Middle */}
          <Col xl={1}>
            <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
          </Col>


          {/* Right Side */}
          <Col xl={5}>
            <h1 className='left-title d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block'>Kid(s) Login</h1>
            <Row>
              <Col className='text-center mt-1'>
                <Form.Group className="mb-1" controlId="formBeeName">
                  <Form.Label className='btn-title'>Kid's Name:</Form.Label>
                  <Form.Control className='text-center rounded-pill w-75 mx-auto' type="Text" placeholder="Your Bee Name" onChange={({ target: { value } }) => setUsername(value)} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className='text-center mt-2'>
                <Form.Group className="mb-1" controlId="formBeePassword">
                  <Form.Label className='btn-title'>Password:</Form.Label>
                  <Form.Control className='text-center rounded-pill w-75 mx-auto' type="Password" placeholder="Your Password" onChange={({ target: { value } }) => setPassword(value)} />
                </Form.Group>
              </Col>
            </Row>

            <Row className='text-center mt-4'>
              <Col>
                <button className='btn-format rounded-pill' onClick={handleSubmit}>Login</button>
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

