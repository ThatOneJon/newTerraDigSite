import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"
import Navigation from "./nav";
import Footer from "./footer";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"


export default function Layout({children}){
    return(
        <Wrapper>
            <Container fluid className="mains">
                <Row className="sticky-top">
                    <Navigation  />
                </Row>
                    {children}
                <Row className="position-bottom mt-4">
                    <Footer />
                </Row>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .mains{
        background-color:#e6ecff;
        height: 100%;
    }
   
`