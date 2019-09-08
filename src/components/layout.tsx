import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from './footer'
import "./layout.css"

const Container = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
`

interface Props{
  children?: any
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <Header logo={'https://cdn1.iconfinder.com/data/icons/linerix-1-1/41/chef-hat-02-512.png'}/>
        <main>{children}</main>
        <Footer/>
    </Container>
  )
}

export default Layout
