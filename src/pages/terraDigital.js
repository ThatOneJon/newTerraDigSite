import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import ReactMarkdown from 'react-markdown';
import{graphql} from "gatsby"


export default function TerraDigital({data}) {
    console.log(data)
    return(
        <Layout>
            <Container className="mt-3" style={{minHeight:"100vh"}}>
                <ReactMarkdown>
                    {data.markdownRemark.rawMarkdownBody}
                </ReactMarkdown>
            </Container>
        </Layout>
    )
}

export const query=  graphql`
    query MyQuery {
        markdownRemark(frontmatter: {slug: {eq: "terra-digital"}}) {
        rawMarkdownBody
        id
        }
    }
`