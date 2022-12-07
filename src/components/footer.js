import React from "react"
import styled from "styled-components"
import { AiFillLinkedin, AiOutlineMail,AiOutlinePhone } from 'react-icons/Ai';
import Container from "react-bootstrap/Container"
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import {Link} from "gatsby"
import divider from "../assets/imagesStatic/divider.png"


export default function Footer(){
    return(
        <Wrapper>
            <Container fluid className="p-0 mt-5">
            <Row>
            <img src={divider} style={{width: "100%", minHeight:"3px" }} className="py-0 my-0 px-0 mx-0" />
            </Row>
                <Row  className="justify-content-evenly bg-dark text-white py-1 customFoot" >
                    <Col lg={2}>
                        <a href="https://www.linkedin.com/company/terra-digital-gmbh/"><h3><AiFillLinkedin/> LinkedIn</h3></a>
                        <a href="mailto:info@terra-digital.de"><h3><AiOutlineMail /> info@terra-digital.de</h3></a>
                    </Col>
                    <Col lg={2}>
                        <h3><AiOutlinePhone />+49 (0) 6192 / 200 9411</h3>
                        <h3><AiOutlinePhone />+49 (0) 171 12 20 077</h3>
                    </Col>
                    <Col lg={2}>
                        <Link to ="/datenschutz"><h3>Datenschutz</h3></Link>
                        <Link to ="/Impressum"><h3>Impressum</h3></Link>
                    </Col>
                    <Col lg={2}>
                    <p >
                        Terra-Digital GmbH <br></br>
                        Lorsbacher Straße 56a  <br></br>
                        65719 Hofheim 
                    </p>
                    </Col>
                </Row>
                </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    h3{
        font-size: 1.5em;
    }
    @media only screen and (max-width: 700px) {
        .customFoot{
            text-align: center;
            font-size: 0.7em;
        }
    }
`