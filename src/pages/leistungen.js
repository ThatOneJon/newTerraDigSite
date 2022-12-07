import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from "styled-components"
import {Link} from "gatsby"



export default function Leistungen(){
    return(
        <Layout>
            <Container className="mt-3" style={{minHeight:"100vh"}}>
                <Row>
                    <Col>
                        <h1 style={{textAlign:"center", marginBottom:"20px"}}>Unsere Leistungen im Detail</h1>
                        <h5 style={{textAlign:"center", marginBottom:"20px"}}><Link to="/kontakt">Anfrage stellen.</Link></h5>

                        <p>Terra-Digital hat das Know-how und die Erfahrung aus bereits erfolgreich durchgeführten Projekten. Wir decken die Leistungen des gesamten Ortungsprozesses ab: Von der Datenerfassung über die Auswertung bis zur Dokumentation:</p>
                        <p>Sint irure dolor pariatur sunt reprehenderit laborum ipsum quis sit. Dolor Lorem proident Lorem aute excepteur duis ullamco irure non sint aute anim dolore quis. Reprehenderit ut irure eu incididunt et pariatur enim do dolore ut enim elit dolore. Cupidatat nisi duis enim ut.
                        Enim tempor amet minim irure qui nostrud culpa ad id. In est laboris nisi nulla consequat do. Est labore dolor sint esse in ut tempor. Occaecat cillum sunt ad tempor eu nulla occaecat dolor sit nostrud.
                        Aliquip dolore id quis consectetur incididunt. Deserunt consectetur ipsum sunt est veniam. In id in ut tempor magna Lorem velit fugiat occaecat enim sit. Nisi cillum aliquip deserunt pariatur cupidatat qui commodo irure est officia aliqua pariatur.</p>
                        Ullamco sunt veniam anim non dolore do sit est duis pariatur veniam elit. Exercitation deserunt sint deserunt deserunt consectetur magna sunt pariatur esse quis Lorem reprehenderit. Consequat culpa aute nulla aliqua sunt deserunt consectetur pariatur adipisicing enim deserunt reprehenderit ad excepteur. Non aliquip in elit esse.

Cillum cupidatat aliqua deserunt nulla cillum nulla ullamco cillum adipisicing qui cupidatat esse aliqua id. Nostrud adipisicing veniam elit minim esse sit enim anim amet aliqua nulla voluptate. Ullamco eu laboris est enim dolore. Adipisicing et laboris cupidatat in id magna consequat. Ea id ea ad in est nisi irure est mollit.

Ipsum non officia magna labore est eu aliquip eu incididunt ad pariatur magna aute. Dolor et occaecat veniam ea non. Eiusmod ipsum minim fugiat labore aliquip pariatur dolore ullamco officia esse id. Elit aliquip excepteur mollit eu sit sint id officia id non et ullamco. Non adipisicing anim dolor cillum id sit.

Id aute est fugiat ipsum aliquip incididunt commodo irure duis est occaecat. Dolor ea ea sit enim. Voluptate dolor deserunt velit consectetur est incididunt magna esse consectetur. Non commodo proident eiusmod cillum nostrud do id mollit do.

Ex quis pariatur tempor magna officia elit culpa fugiat. Amet incididunt magna reprehenderit elit duis duis consectetur ullamco nostrud consequat nisi sint anim eiusmod. Fugiat officia et irure sit Lorem.
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}