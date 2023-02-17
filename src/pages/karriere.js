import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import colorbar from "../assets/imagesStatic/colorbar.png"
import {Link, graphql,useStaticQuery} from "gatsby"
import Accordion from "react-bootstrap/Accordion"
import Reactmarkdown from "react-markdown"

const query = graphql`
  query {
    allContentfulJobListing {
      nodes {
        createdAt
        contentful_id
        jobTitle
        childContentfulJobListingDescriptionTextNode {
          description
        }
      }
    }
  }
`


export default function Karriere(){
const rawData = useStaticQuery(query);
const jobListings = rawData.allContentfulJobListing.nodes

    return(
        <Layout>
            <Container fluid="lg" className="mt-4" style={{minHeight:"100vh"}}>
                <Row className="mb-1">
                    <h2 className="mb-5" style={{textAlign:"center"}}>Career - Karriere - Werde ein Teil unseres Teams - Become a part of the Team</h2>
                    <img src={colorbar} style={{width: "100%", height: "5px"}} alt="seperator" />
                </Row>
                <Row className="mt-3" xs={1}>
                    <Accordion defaultActiveKey="0" >
                    {jobListings.map((listing)=> { 
                    return(
                    <Col key={listing.contentful_id} className="mt-3">
                    <Accordion.Item eventKey={jobListings.indexOf(listing)}>
                    <Accordion.Header><b>{listing.jobTitle}</b></Accordion.Header>
                    <Accordion.Body>
                    <h2 className="mt-4"><u>{listing.jobTitle}</u></h2> <Reactmarkdown>{listing.childContentfulJobListingDescriptionTextNode.description}</Reactmarkdown>
                    <p>Wir freuen uns, Sie kennenzulernen! Senden Sie uns Ihre vollständigen Bewerbungsunterlagen bitte per E- Mail an: <b><u>info@terra-digital.de</u></b> </p>
                    <p>Bitte beachten Sie unsere Hinweise zum<Link to="/datenschutz">Datenschutz</Link></p>
                    </Accordion.Body>
                    </Accordion.Item>
                    </Col>
                    )})}
                    </Accordion>
                </Row>
                <Row className="mt-5 mb-1">
                  <img src={colorbar} style={{width: "100%", height: "5px"}} alt="devider" />
                </Row>
            </Container>
        </Layout>
    )
}