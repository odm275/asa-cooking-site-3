import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

interface Image {
  path: string
}

interface PropsGalleryPageTemplate {
  gallery?: [Image]
}

export const IndexPageTemplate: React.FC<PropsGalleryPageTemplate> = props => {
  console.log(props)
  return (
    <>
      <h2>Main Pitch</h2>
      <p>Here is the main pitch</p>
    </>
  )
}

interface GalleryPageProps {
  data?: object
}

const IndexPage: React.FC<GalleryPageProps> = ({ data = {} }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter)
  return (
    <Layout>
      <IndexPageTemplate gallery={frontmatter.gallery} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query GalleryPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "gallery-page" } }) {
      frontmatter {
        path
        gallery {
          galleryImage {
            childImageSharp {
              fluid(maxWidth: 600, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
