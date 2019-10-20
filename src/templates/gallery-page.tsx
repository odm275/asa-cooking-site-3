import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Masonry from "react-masonry-component"

const masonryOptions = {
  transitionDuration: 0,
}
const style = {
  backgroundColor: "tomato",
}

const imagesLoadedOptions = { background: ".my-bg-image-el" }

export function GalleryPageTemplate({ gallery }: any) {
  console.log(gallery)
  const childElements = gallery.map(({ galleryImage }: any) => (
    <div>
      <p>{galleryImage.title}</p>
      <Img fixed={galleryImage.childImageSharp.fixed} />
      <p>{galleryImage.description}</p>
    </div>
  ))
  return (
    <div>
      <h1>lesggo</h1>
      <Masonry style={style} options={masonryOptions}>
        {childElements}
      </Masonry>
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
              fixed(width: 320, height: 320) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
