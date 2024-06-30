// import { Container } from "react-bootstrap/Container";
// import { Navbar } from "react-bootstrap/Navbar";
// import { Nav } from "react-bootstrap/Nav";
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () =>{
    return(
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand to="/"><strong>Walkabout Users</strong></Navbar.Brand>

                    {/* align to right side */}
                    <Nav className="ml-auto"></Nav>

                    <Nav.Link as={Link} to="/" className="nav-link" >
                        Users
                    </Nav.Link>

                    <Nav.Link as={Link} to="/user" className="nav-link" >
                        Add Users
                    </Nav.Link>

                </Container>
            </Navbar>
        </>
    )

}

export default Header;