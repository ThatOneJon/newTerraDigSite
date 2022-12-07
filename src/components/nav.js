import React from "react"
import styled from "styled-components"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Container  from "react-bootstrap/Container";
import terraDigitalLogo from "../assets/imagesStatic/terraDigitalLogo.png";
import {Link} from "gatsby"




export default function Navigation(){
    const[view,setView] = React.useState(true)
    
    React.useEffect(() => {
        window.addEventListener('scroll', ()=> {
        window.scrollY > 1 ? setView(false) : setView(true)
    }, [view])
            }
        )
    return(
        <Container fluid className="p-0 ">
            <Wrapper>
            <Navbar id="navBar" className= {`customNavBar ${view ? "p-4" : "p-1"} mb-3`} bg="dark"  expand="md" variant="dark">
                <Container  >
                    <Navbar.Brand as={Link} to="/"><img src={terraDigitalLogo}  alt="terra Digital" className="terradNavImg" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-evenly customNav" style={{width:"100%"}}>
                        <Nav.Link as={Link} to="/" className="customNavItem">Home</Nav.Link>
                        <Nav.Link as={Link} to="/anfrage" className="customNavItem">Anfrage</Nav.Link>
                        <NavDropdown title="Über Uns" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/terraDigital" className="customNavItem">Terra Digital</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/team" className="customNavItem">Team</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/leistungen" className="customNavItem">Leistungen</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/karriere" className="customNavItem">Karriere</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/kontakt" className="customNavItem">Kontakt</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
        </Wrapper>
    </Container>
    )
}

const Wrapper = styled.section`
    .customNavBar{
        color: white;
        box-shadow: 0px 3px blue;
    }
    .terradNavImg{
        width: 370px;
    }
    @media only screen and (max-width: 500px) {
        .terradNavImg{
            width: 200px;
        }
    }
    .customNav{
        font-size: 1.5em;
    }
    .customNavItem:hover{
        text-decoration: underline;
    }

`