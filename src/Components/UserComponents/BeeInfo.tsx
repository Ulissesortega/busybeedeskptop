import {useState, useEffect, useContext } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Context/UserContext';
import { CreateChildAccount, GetChildUserData } from '../../Services/DataService';
import beeKeeperFImg from '../../Assets/BKeeperMom.png';
import beeKeeperMImg from '../../Assets/Bkeeper.png';
import honeyComb from '../../Assets/CartoonHoneyComb.png';
import BowTieBee from '../../Assets/BeeBoy.png';
import BowBee from '../../Assets/BeeGirl.png';
import HoneyComb from '../../Assets/CartoonHoneyComb.png';


export default function Template() {
    let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
    parentData = JSON.parse(sessionStorage.AdminData);

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
            let parentData: { adultUserId?: number, fullName?: string, adultUserEmail?: string, avatarLook?: string } = {};
            parentData = adminData;
            let beeData: object = {
                id: 0,
                parentId: parentData.adultUserId,
                username,
                password,
                CurrentStarCount: 0,
                TotalStarCount: 0,
                AvatarLook: createBee
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
                        <h1 className='left-title d-none d-sm-block'>Busy Bee!</h1>
                        <h1 className='Mobile-Title-format d-block d-sm-none mt-3'>Busy Bee!</h1>
                        <Row>
                            <Col className='mt-1 mt-sm-1 mt-xl-3 text-center'>
                                <p className='btn-title text-center '><span className='text-bold'>BeeKeeper in duty!</span></p>
                                <img className='img-fluid d-none d-sm-block mx-auto' src={ parentData.avatarLook === 'Masc' ? beeKeeperMImg : parentData.avatarLook === 'Fem' ? beeKeeperFImg : honeyComb } alt="Logo" width={200} />
                                <img className='img-fluid d-block d-sm-none mx-auto' src={ parentData.avatarLook === 'Masc' ? beeKeeperMImg : parentData.avatarLook === 'Fem' ? beeKeeperFImg : honeyComb } alt="Logo" width={200} />
                            </Col>
                        </Row>
                    </Col>

                    {/* Divider in the Middle */}
                    <Col xl={1}>
                        <div className="divider d-none d-sm-block d-md-none d-lg-block d-xl-block"></div>
                    </Col>


                    {/* Right Side */}
                    <Col xl={5}>
                        <h1 className='right-title d-none d-sm-block'>Bee Ready!</h1>
                        <Row>
                            <Col className='right-title mt-2'>
                                <p className='btn-title text-center text-bold'><br/>Let's get busy!</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='d-flex justify-content-center'>
                            <img className='img-fluid d-none d-sm-block' src={createBee === 'BowBee' ? BowBee : createBee === 'BowTieBee' ? BowTieBee : HoneyComb} alt="Logo" width={200} />
                                <img className='img-fluid d-block d-sm-none' src={createBee === 'BowBee' ? BowBee : createBee === 'BowTieBee' ? BowTieBee : HoneyComb} alt="Logo" width={200} />
                            </Col>
                        </Row>

                        <Row>
                            <Col className='right-title mt-2'>
                                <Link to="/TaskAssigner">
                                    <button className='btn2-format rounded-pill mt-3'>Assign Tasks</button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}