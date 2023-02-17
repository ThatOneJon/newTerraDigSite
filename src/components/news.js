import React from "react"
import Col from "react-bootstrap/Col"
import { graphql, useStaticQuery } from "gatsby"
import Card from "react-bootstrap/Card"
import {StaticImage, GatsbyImage} from "gatsby-plugin-image"
import { slice } from 'lodash'
import {MdKeyboardArrowDown} from "react-icons/Md"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Reactmarkdown from "react-markdown"


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

    const [index, setIndex] = React.useState(3)
    const initialPosts = slice(entries, 0, index)

    function handleClick(){
      console.log("click")
      setIndex(prev => (prev + 3))
    }

    return(
            <>
                {initialPosts.map((entry) => {return(
                    <Col key={entry.article.id != null ? entry.article.id : "noIdProvKey"} className="my-2">
                        <Card style={{minHeight:"50vh"}}>
                          <StaticImage src="https://picsum.photos/600" alt="Article Image" /> 
                            <Card.Body>
                                    <Card.Title>{entry.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                      <Reactmarkdown>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Reactmarkdown>
                                    </Card.Text>
                            </Card.Body>
                            <Card.Footer>{entry.createdAt}</Card.Footer>
                        </Card>
                    </Col>
                    )})}
                    <Row className="text-center justify-content-center lign-items-center my-5" style={{minWidth:"100%"}}><Col><Button onClick={() =>handleClick()} style={{width:"400px", fontWeight:"bold", fontSize:"1.5em"}}>Mehr <MdKeyboardArrowDown /></Button></Col></Row>
                </>
    )
}