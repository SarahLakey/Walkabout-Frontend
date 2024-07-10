import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css"
import navLogo from './Logo-Yel-nav.png'

const Header = () =>{
    return(
        <>
            {/* <Navbar bg="primary" variant="dark"> */}
            <Navbar variant="dark">

                <Container>
                    <Navbar.Brand to="/">
                        <img src={navLogo} className="img-fluid" alt="Responsive logo"/>
                        {/* <strong> Walkabout Users</strong> */}
                    </Navbar.Brand>

                    {/* align to right side */}
                    <Nav className="ml-auto">

                        <Nav.Link as={Link} to="/" className="nav-link" >
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/userList" className="nav-link" >
                            User List
                        </Nav.Link>

                        <Nav.Link as={Link} to="/register" className="nav-link" >
                            Register
                        </Nav.Link>

                        <Nav.Link as={Link} to="/steps" className="nav-link" >
                            Add Steps
                        </Nav.Link>

                    </Nav>

                </Container>
            </Navbar>
        </>
    )

}

export default Header;