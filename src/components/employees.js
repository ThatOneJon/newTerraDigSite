import React from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  query {
    allContentfulEmployee {
      nodes {
        id
        degree
        imageEmp {
            gatsbyImageData
        }
        name
        position
      }
    }
  }
`


export default function Employee(){
    const rawData = useStaticQuery(query);
    const allEmployees = rawData.allContentfulEmployee.nodes
    console.log(allEmployees)
    return(
            <>
                {allEmployees.map((emp) => { return (
                    <Col key={emp.id}>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img as ={GatsbyImage} image={emp.imageEmp.gatsbyImageData} alt="profile Image" style={{height:"auto", width:"100%"}} />
                            <Card.Body>
                                <Card.Title>{emp.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{emp.degree}</Card.Subtitle>
                                <Card.Text>{emp.position}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )})}
            </>
    )
}