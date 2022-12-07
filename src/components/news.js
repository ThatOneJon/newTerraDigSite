import React from "react"
import Col from "react-bootstrap/Col"
import { graphql, useStaticQuery } from "gatsby"
import Card from "react-bootstrap/Card"


const query = graphql`
  query {
    allContentfulNews {
      nodes {
        article {
          article
          id
        }
        createdAt
        title
        media {
        gatsbyImageData
          }
      }
    }
  }
`


export default function News(){
    const rawData = useStaticQuery(query)
    const entries= rawData.allContentfulNews.nodes

    return(
            <>
                {entries.map((entry) => {return(
                    <Col key={entry.article.id} className="my-2">
                        <Card>
                        <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                    <Card.Title>{entry.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer>{entry.createdAt}</Card.Footer>
                        </Card>
                    </Col>
                    )})}
                </>

    )
}