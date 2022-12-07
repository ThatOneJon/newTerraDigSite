import * as React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import {Link} from "gatsby"
import Collapse from 'react-bootstrap/Collapse';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



export default function Kontakt(){
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(true);

    const [formData, setFormData] = React.useState(
        {
            "services":"",
        }

 )

    function handleChange(e){
        console.log(e.target.value)
        setFormData((prev) => ({...prev, "services":e.target.value}))
    }

    return(
        <Layout>
            <Container fluid="lg" style={{minHeight:"100vh"}} className="justify-content-center align-items-center d-flex flex-column" >
            <Row className="mt-3 mb-2">
                <h1 style={{textAlign:"center"}}>Schreiben Sie uns eine Nachricht!</h1>
                { open2 === false ? <h2 style={{textAlign:"center"}} ><Button variant="none" onClick={()=>setOpen2(!open2) & setOpen(false)} style={{fontWeight:"bold", fontSize:"0.9em"}}>Klicken Sie hier!</Button></h2> : null}
            </Row>
            <Collapse in={open2}>
            <Form>
                <Form.Group className="mb-3">
                <Form.Label>Name: </Form.Label>
                <Form.Control size="md" type="text" placeholder="Jane Doe" />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Firma / Stadt / Gemeinde: </Form.Label>
                <Form.Control size="md" type="text" placeholder="Stadt Berlin...." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Addresse: </Form.Label>
                    <Form.Control type="email" placeholder="JaneDoe@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Nachricht</Form.Label>
                    <Form.Control as="textarea" rows={9}  placeholder="Ihre Nachricht an uns..." />
                </Form.Group>
                <Form.Group>
                <Button className="mb-3">Absenden</Button>
                <p>
                    Mit dem Absenden des Formulars bestätigen Sie, dass Sie die <Link to="/datenschutz">Datenschutzerklärung</Link> gelesen haben und damit einverstanden sind.
                </p>
                </Form.Group>
            </Form>
            </Collapse>

            <Row className="mt-5 mb-4">
                <h1 style={{textAlign:"center", marginBottom:"30px"}} >Sie möchten direkt eine unverbindliche Anfrage stellen und haben weitere Informationen?</h1>
                { open === false ? <h2 style={{textAlign:"center"}} ><Button variant="none" onClick={()=>setOpen(!open) & setOpen2(false)} style={{fontWeight:"bold", fontSize:"0.9em"}}>Klicken Sie hier!</Button></h2> : null }
                <Collapse in={open}>
                    <Form id="example-collapse-text">
                    <FloatingLabel controlId="floatingSelect" label="Für welches unserer Angebote interessieren Sie sich?">
                    <Form.Select aria-label="Floating label select example" onChange={(e) => handleChange(e)} value={formData.services}>
                        <option>Services</option>
                        <option value="ortungTD">Professionelle Leitungsortung und Auswertung durch uns...</option>
                        <option value="mietenA">Vermietung von Ausrüstung...</option>
                        <option value="auswertung">Auswertung ihrer Radardaten ...</option>
                        <option value="digitalisierung">Digitalisierung oder Zusammenführung von Bestandsplänen ...</option>
                        <option value="kaufen">Verkauf von Ausrüstung ...</option>
                        <option value="schulung">Schulung / Weiterbildung</option>
                    </Form.Select>
                    </FloatingLabel>
                { formData.services === "ortungTD" ? <Form.Group className="mt-4">
                        <Form.Label className="mx-1">Ungefähre Fläche (m²): </Form.Label><input type ="number" name="fläche" /><br></br>
                        <Form.Label className="mx-1">Gesucht wird: </Form.Label> <Form.Control className="mb-3" type="text"  placeholder="Stromleitungen, Wasserleitungen, Gasleitungen, alle Leitungen/Utilities, sontiges..." /> 
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Leitungsortung"
                            />
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Orthophotos"/>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Planung"/>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Einmessen von Punkten"/>
                        <br></br>
                        <p>Ihr Anliegen ist nicht dabei, oder Sie sind sich unsicher? Beschreiben Sie ihren Fall gerne unten. Wir bieten individuelle Beratung und Lösungen, im Rahmen unserer Möglichkeiten...</p>
                        <br></br>
                        <Form.Label className="mx-1">Beschaffenheit (Straße, Feldweg, Wiese ... ) : </Form.Label> <Form.Control as="textarea" rows={2}  placeholder="... Ist die Fläche gut zugänglich?" /> 
                    </Form.Group>
                    :
                    null }
                    {formData.services === "mietenA" ? 
                        <Form.Group className="mt-2">
                            <Form.Label className="mx-1">Dauer: </Form.Label> <Form.Control  type="text"  placeholder="z.B. 3 Wochen" /> 
                            <Form.Label className="mx-1 mt-1">Ab: </Form.Label> <Form.Control  type="text"  placeholder="z.B. 01.01.2000 - Wie Flexibel ist der Zeitraum?" /> 
                            <Form.Check 
                            className="mt-2 mb-3"
                                type="switch"
                                id="custom-switch"
                                label="Auswertung der Daten durch Terra Digital"/>
                            <p><u>Ich interessiere mich für: </u></p>
                           <Form.Check 
                                className="mt-1"
                                type="switch"
                                id="custom-switch"
                                label="Stream-C"/>
                           <Form.Check 
                                className="mt-1"
                                type="switch"
                                id="custom-switch"
                                label="DS 2000"/>
                           <Form.Check 
                                className="mt-1"
                                type="switch"
                                id="custom-switch"
                                label="DSX"/>
                           <Form.Check 
                                className="mt-1"
                                type="switch"
                                id="custom-switch"
                                label="Leica Ultra"/>
                        </Form.Group>
                    : null
                    }
                    {formData.services === "auswertung" ? 
                    <Form.Group>
                        <Form.Label className="mt-3">Daten aufgenommen mit: </Form.Label>
                        <Form.Control size="md" type="text" placeholder="DS2000, StreamC, Stream Up ...." />
                    </Form.Group>
                        :
                        null
                    }
                    {formData.services ==="kaufen" ? 
                    <Form.Group className="mt-2">
                    <p><u>Ich interessiere mich für: </u></p>
                   <Form.Check 
                        className="mt-1"
                        type="switch"
                        id="custom-switch"
                        label="Stream-C"/>
                   <Form.Check 
                        className="mt-1"
                        type="switch"
                        id="custom-switch"
                        label="DS 2000"/>
                   <Form.Check 
                        className="mt-1"
                        type="switch"
                        id="custom-switch"
                        label="DSX"/>
                   <Form.Check 
                        className="mt-1"
                        type="switch"
                        id="custom-switch"
                        label="Leica Ultra"/>
                    </Form.Group>
                        : null
                    }
                    {formData.services ==="digitalisierung" ? 
                        <Form.Group>
                            <Form.Label className="mt-3">Format: </Form.Label>
                            <Form.Control size="md" type="text" placeholder="z.B. .shp ...." />
                            <Form.Label className="mt-3">Art der Pläne: </Form.Label>
                            <Form.Control size="md" type="text" placeholder="..." />
                        </Form.Group>
                        : null
                    }

                <Form.Label className="mt-3">Firma / Stadt / Gemeinde: </Form.Label>
                <Form.Control size="md" type="text" placeholder="Stadt Berlin...." />
                <Form.Group className="mb-3 mt-3">
                <Form.Label>Name: </Form.Label>
                <Form.Control size="md" type="text" placeholder="Jane Doe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Addresse: </Form.Label>
                    <Form.Control type="email" placeholder="JaneDoe@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Nachricht</Form.Label>
                    <Form.Control as="textarea" rows={9}  placeholder="Ihre Nachricht an uns..." />
                </Form.Group>
                <Form.Group>
                <Button className="mb-3">Absenden</Button>
                <p>
                    Mit dem Absenden des Formulars bestätigen Sie, dass Sie die <Link to="/datenschutz">Datenschutzerklärung</Link> gelesen haben und damit einverstanden sind.
                </p>
                </Form.Group>
                    </Form>
                </Collapse>
            </Row>
            </Container>
        </Layout>
    )
}