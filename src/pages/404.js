import React from "react"
import {Link} from "gatsby"
import terraDigitalLogo from "../assets/imagesStatic/terraDigitalLogo.png"
import Container from "react-bootstrap/Container"



export default function PageNotFound() {
    return(
        <Container className="align-items-center justify-content-center d-flex flex-column" style={{height:"100vh"}}>
            <h1>404 - Page not found!</h1>
            <Link to ="/"> Go Back.</Link>
            <img src={terraDigitalLogo} />
        </Container>
    )
}