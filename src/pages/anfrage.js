import * as React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from "styled-components"
import {Link} from "gatsby"
//s
export default function Anfrage(){
    return(
        <Layout>
            <Wrapper>
                <Container fluid="lg" style={{minHeight:"100vh"}}>
                    <Row lg={1}>
                        <Col><h1>Wie stelle ich eine Anfrage?</h1>
                        <h5><Link to="/leistungen">Zu unseren Leistungen!</Link></h5>
                        <h5><Link to="/kontakt">Anfrage stellen.</Link></h5>
                        </Col>
                    </Row>
                    <Row style={{height:"100%"}}>
                        <Col>
                        <h4>Unsere Leistungen</h4>
                        <p>Terra-Digital hat das Know-how und die Erfahrung aus bereits erfolgreich durchgeführten Projekten. Wir decken die Leistungen des gesamten Ortungsprozesses ab: Von der Datenerfassung über die Auswertung bis zur Dokumentation:  </p>
                        <p>----------------- USW</p>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </Layout>
    )
}


const Wrapper = styled.div`
    h1{
        text-align: center;
    }
    h5{
        text-align: center;
    }
`