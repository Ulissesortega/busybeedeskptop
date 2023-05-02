import { useState, useContext } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AdultLogin, GetAdultUserData } from '../Services/DataService';
import { MyContext } from '../Context/UserContext';

export default function AdminLogin() {
  let navigate = useNavigate();
  const { setAdmin } = useContext(MyContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    setAdmin(await GetAdultUserData(email));
    sessionStorage.setItem("AdminData", JSON.stringify(await GetAdultUserData(email)));
    let userData:object = {
      email,
      password
    }
    console.log(userData);
    let token = await AdultLogin(userData);
    if (token.token != null) {
      localStorage.setItem("Token", token.token);
      console.log('Success');
      navigate("/StepOne");
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

                <button className='btn-format rounded-pill mt-2' onClick={handleSubmit}>Login</button>

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
    </div>
  )
}
