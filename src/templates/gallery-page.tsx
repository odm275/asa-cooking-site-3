import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

export const GalleryPageTemplate = ({ gallery }: any) => {
  console.log(gallery)
  return (
    <div>
      <h1>lesggo</h1>
      {gallery.map(({ galleryImage }: any) => (
        <Img fixed={galleryImage.childImageSharp.fixed} />
      ))}
    </div>
  )
}

interface GalleryPageProps {
  data?: object
}

const GalleryPage: React.FC<GalleryPageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter)
  return (
    <Layout>
      <GalleryPageTemplate gallery={frontmatter.gallery} />
    </Layout>
  )
}

export default GalleryPage

export const pageQuery = graphql`
  query GalleryPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "gallery-page" } }) {
      frontmatter {
        gallery {
          galleryImage {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
