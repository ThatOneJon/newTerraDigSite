import * as React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components"
import { BiNews } from "react-icons/Bi"
import News from "../components/news"
import Button from "react-bootstrap/Button"
import {StaticImage, GatsbyImage} from "gatsby-plugin-image"
import demoVid from "../assets/video/demoVid.mp4"
import { graphql, useStaticQuery, Link } from "gatsby"
import Collapse from "react-bootstrap/Collapse"
import Fade from "react-bootstrap/Fade"
import "@fontsource/permanent-marker"
import "@fontsource/arvo"

//        <img src ={tiefBau} alt="Tiefbau Image" className="landingImage" />

const query = graphql`
  query {
    allContentfulLandingPageImages {
      nodes {
        imagesLanding {
          contentful_id
          id
          filename
          gatsbyImageData(layout:CONSTRAINED, resizingBehavior: FILL,aspectRatio: 2.9)
        }
      }
    }
  }
`

export default function Home() {
  const [reachedBottom, setReachedBottom] = React.useState(false)
  React.useEffect(()=>{
    document.addEventListener('scroll', () => {
      if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight )
        setReachedBottom(true)
    })
  })


  const rawData = useStaticQuery(query)
  const images = rawData.allContentfulLandingPageImages.nodes[0].imagesLanding
  let video = <video controls>
  <source src={demoVid} type="video/mp4" />
  </video>

  return (
  <Layout>
      <Wrapper>
      <Container  fluid className="d-flex flex-column align-items-center " style={{minHeight:"100vh"}}>
        <Row  style={{width: "100%"}}>
            <StaticImage src ="../assets/imagesStatic/city-background.jpg" alt="Title Image GEORadar" 
            layout="constrained"
            aspectRatio={10/1}
            style={{minHeight:"100px"}}
            />
        </Row>
        <Row lg="1" className="my-5 text-center bg-dark p-4" style={{color: "white", width:"100%", borderRadius:"10px"}}>
          <Col>
            <h1 style={{fontSize:"4.2em"}} id="firstHeader"> <u> Gewusst wo! </u></h1>
            <h1 className="mt-4" >Innovative Lösungen für Leitungsortung und Bodensondierung! </h1>
          </Col>
        </Row>
        <Row className="my-5">
        <Carousel >
          <Carousel.Item interval={5000}>
          <StaticImage src="../assets/imagesStatic/tiefBau.jpg"  
            alt=" Image Tiefbau"
            layout="constrained"
            aspectRatio={6/2}
            style={{minHeight:"250px"}}
          />
          </Carousel.Item>

          {images.map((img) => {return(
              <Carousel.Item  key={img.contentful_id}> 
                <GatsbyImage  image={img.gatsbyImageData} alt={img.filename}  style={{minHeight:"350px"}} /> 
              </Carousel.Item>
              )})
            }
        </Carousel>
        </Row>
        <Container>
            <Row className="my-5">
              <StaticImage src="../assets/imagesStatic/colorbar.png" alt="divider" className="mb-5" />
              <h2 className="text-center">Sie planen eine Baumaßnahme und haben keine oder nur unvollständige Bestandspläne über die vorhandenen Leitungen, Kabel oder Rohre?</h2>
              <StaticImage src="../assets/imagesStatic/colorbar.png" alt="divider" className="mt-5 mb-3" />
              </Row>
            </Container>
            <Row lg="4" xs="1" className="justify-content-evenly">
              <Col>
                <p> Sie möchten mehr wissen über Oberflächenbelege, Bodenschichten oder mögliche Anomalien, bevor Sie mit dem Bau beginnen?
                Terra-Digital erfasst ein Gebiet beliebiger Größe mit unseren Bodenradar- und Ortungsgeräten und bestimmt die exakte Lage und Tiefe der Objekte im Boden.</p>
              </Col>
              <Col>
                <p>Das führt zu weniger Leitungsschäden, mehr Sicherheit und schnellerem Arbeiten: Kein langwieriges Suchen und Beobachten, sondern zielgerichtetes Graben mit Tempo. Sichere Einsatzplanung und Logistik, weil Ihre Baumaßnahme nicht durch die Beseitigung komplexer Leitungsschäden unterbrochen wird. Am Ende mehr Trasse in weniger Zeit, also mehr Umsatz und Gewinn.</p>
              </Col>
              <Col>
                <p>Terra-Digital bietet verschiedene Dienstleistungen rund um Leitungsortung und die Bodensondierung an. Als Partner der Leica Geosystems beraten wir Sie auch gern beim Kauf der entsprechenden Ortungsgeräte und über mögliches Zubehör.</p>
              </Col>
            </Row>
            <Row className="my-5 text-center">
              <h2>Eine genaue Leitungsortung senkt das Risiko, die Kosten und erhöht die Produktivität maßgeblich!</h2>
            </Row>


            <Row style={{ marginBottom:"5vh", minWidth:"50vw"}}>
                <StaticImage src="../assets/imagesStatic/colorbar.png" alt="divider" className="mt-5 mb-3" />
                <h2 className="mt-5 text-center">Wir arbeiten individuell...</h2>
            </Row>

            <Row xs={1} lg={3} className="mb-5 justify-content-between p-3" style={{ border:"2px solid grey", borderRadius:"10px"}} >
              <Col >
                <StaticImage src="../assets/imagesStatic/DS200PNG.png" alt="ds2000" height={280} />
                <h4 className="text-center">Im kleinen ....</h4>
              </Col>
              <Col >
                <StaticImage src="../assets/imagesStatic/streamCPNG.png" alt="ds2000" height={280} />
                <h4 className="text-center">.......</h4>
              </Col>
              <Col >
                <StaticImage src="../assets/imagesStatic/StreamUPPNG.png" alt="ds2000" height={500} />
                <h4 className="text-center">... und im großen Stil!</h4>
              </Col>
            </Row>
            <Row style={{width:"50vw", height:"55vh", minWidth:"400px"}}>
              <iframe src= "https://velvety-faloodeh-6ce944.netlify.app" title ="3d" />
            </Row>
            <Row className="my-5">
              <Fade in ={reachedBottom}>
                <Button as={Link} to="/leistungen" className="p-3 customB" style={{fontWeight:"bold", fontSize:"1.6em"}}>Leistungen im Detail</Button>
              </Fade>
            </Row>
            <Row className="my-5" xs={1} style={{minWidth:"50vw"}} >
              <StaticImage src="../assets/imagesStatic/colorbar.png" alt="divider"  />
            </Row>
            <Row className="my-5">
              <Fade in ={reachedBottom}>
                <Button as={Link} to="/kontakt" className="p-3 customB" style={{fontWeight:"bold", fontSize:"1.6em"}}>Kontakt aufnehmen</Button>
              </Fade>
            </Row>
        <Row className="mt-5">
          <h1 className="my-5" style={{textAlign:"center"}}><BiNews /> NEWS</h1>
        </Row>
        <Collapse in={reachedBottom} timeout={600}>
        <div >
          <Row lg ="3" xs="1" style={{maxWidth:"2100px"}}>
              <News />
          </Row>
        </div>
        </Collapse>
      </Container>
    </Wrapper>
  </Layout>
  )
}

const Wrapper= styled.section`
  p{
    text-align: justify;
    font-size: 1.3em;
    font-family: Arvo, serif;
  }
  .customB:hover{
    box-shadow: 7px 5px black;
  }

  #firstHeader{
    font-family: Permanent Marker, cursive;
  }
`

export const Head = () => <title>Terra Digital</title>
