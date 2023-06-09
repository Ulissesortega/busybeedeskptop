import { useState, useContext } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CreateAdultAccount, GetAdultUserData } from '../Services/DataService';
import { MyContext } from '../Context/UserContext';

export default function CreateAdminUser() {
  const [disabled, setDisabled] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  let navigate = useNavigate();
  const { setAdmin } = useContext(MyContext);

  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [avatarLook, setAvatarLook] = useState<string>('');

  const handleSubmit = async () => {
    if (!email || !fullName || !password) {
      handleShow();
      setDisabled(false);
    } else {
      let adultUserData: object = {
        id: 0,
        fullName,
        email,
        password,
        avatarLook
      }
      if (await CreateAdultAccount(adultUserData)) {
        setAdmin(await GetAdultUserData(email));
        sessionStorage.setItem("AdminData", JSON.stringify(await GetAdultUserData(email)));
        console.log('Success');
        navigate("/AdminInfo");
      } else {
        handleShow();
        setDisabled(false);
      }
    }
  }

  return (
    <div className='bgColor'>
      <Container>

        {/* Left-Side */}
        <Row>
          <Col xs={12} sm={12} md={12} xl={5}>
            <h1 className='left-title mt-5 d-none d-sm-block'>Welcome to Busy Bee</h1>
            <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
            <Row>
              <Col className='mt-2 text-center'>
                <p className='btn-title text-center d-none d-sm-block'>Thank you for choosing us!<br />Together we'll make the best<br /> of your Kid's time.</p>
                <img className='image-radius img-fluid d-none d-sm-block mx-auto' src={require('../Assets/BEEE.png')} alt="Logo" width={300} />
              </Col>
            </Row>
          </Col>

          {/* Divider in the Middle */}
          <Col xl={1}>
            <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
          </Col>


          {/* Right Side */}
          <Col xs={12} sm={12} md={12} xl={5}>
            <h1 className='left-title mt-2 mt-xl-5 mt-xs-1'>Admin's Info</h1>
            <Row>
              <Col className='right-title mt-2'>
                <p className='btn-title text-center'>Please enter the information below</p>
                <Form.Group className="mb-2" controlId="formBasic Full Name">
                  <Form.Label className='btn-title'>Full Name</Form.Label>
                  <Form.Control className='text-center rounded-pill w-75 mx-auto' type="text" placeholder="Your Name" onChange={({ target: { value } }) => setFullName(value)} />
                </Form.Group>
              </Col>
            </Row>


            <Row>
              <Col className='right-title mt-2'>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className='btn-title'>Email Address</Form.Label>
                  <Form.Control className='text-center rounded-pill w-75 mx-auto' type="Email" placeholder="Your Email" onChange={({ target: { value } }) => setEmail(value)} />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className='text-center'>
                <Form.Label className='btn-title'>Avatar Look (Optional)</Form.Label>
                <Form.Select className='rounded-pill w-75 mx-auto' aria-label="Default select example" onChange={({ target: { value } }) => setAvatarLook(value)}>
                  <option className='text-center'>Options</option>
                  <option className='text-center' value="Masc">Masculine</option>
                  <option className='text-center' value="Fem">Feminine</option>
                  <option className='text-center' value="Other">Non Binary</option>
                  <option className='text-center' value="Other">I Rather Not Say!</option>
                </Form.Select>
              </Col>
            </Row>


            <Row>
              <Col className='right-title mt-2'>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label className='btn-title'>Password</Form.Label>
                  <Form.Control className='text-center rounded-pill w-75 mx-auto' type="Password" placeholder="Your Password" onChange={({ target: { value } }) => setPassword(value)} />
                </Form.Group>
                <button className='btn2-format rounded-pill mt-3' disabled={disabled} onClick={() => { handleSubmit(); setDisabled(true); }}>Create User</button>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton className='bgColormodal'>
          <Modal.Title>Could Not Create Account</Modal.Title>
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