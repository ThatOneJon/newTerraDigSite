import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Employee from "../components/employees"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export default function Team() {
    return(
        <Layout>
            <Container fluid className="mt-3" style={{minHeight:"100vh"}}>
                <Row>
                    <Col>
                    </Col>
                </Row>
                <Row lg ="5" className="justify-content-center">
                    <Employee />
                </Row>
            </Container>
        </Layout>
    )
}