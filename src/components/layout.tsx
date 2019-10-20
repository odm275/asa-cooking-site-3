/** @jsx jsx */
import { jsx, Layout as DefaultLayout, Main, Container } from "theme-ui"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  children?: any
}

function Layout({ children }: Props) {
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
    <DefaultLayout>
      <Container>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </DefaultLayout>
  )
}

export default Layout
