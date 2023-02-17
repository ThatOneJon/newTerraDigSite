import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import ReactMarkdown from 'react-markdown';
import{graphql} from "gatsby"

export default function Datenschutz({data}){
console.log(data)
const datenschutzerklärung = data.markdownRemark.rawMarkdownBody
    return(
        <Layout>
            <Wrapper>
                <Container style={{minHeight:"100vh"}}>
                    <ReactMarkdown>
                        {datenschutzerklärung}
                    </ReactMarkdown>
                </Container>
            </Wrapper>
        </Layout>
    )
}

const Wrapper = styled.section`
p{
    font-size: 1.1em;
}
`
export const query = graphql`
query MyQuery {
    markdownRemark(frontmatter: {slug: {eq: "datenschutz"}}){
      rawMarkdownBody
      id
    }
  }
`