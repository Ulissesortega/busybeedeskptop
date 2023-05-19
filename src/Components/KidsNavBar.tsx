import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'


export default function MyNavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='ty'>Busy Bee!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " className='ty' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">                                      
                            <Nav.Link className='ty' as={Link} to='/'>LOGOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
