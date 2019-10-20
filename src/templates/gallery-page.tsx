/** @jsx jsx */

import React from "react"
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Masonry from "react-masonry-component"

const masonryOptions = {
  transitionDuration: 0,
}

const dummyTest = [
  "Cake wafer cupcake. Pastry fruitcake ice cream muffin chupa chups apple pie carrot cake. Wafer bonbon chupa chups cake ice cream gingerbread.",
  "Sesame snaps chocolate cake cake. Macaroon chupa chups dessert sweet roll. Marshmallow gummi bears candy.Sesame snaps chocolate cake cake. Macaroon chupa chups dessert sweet roll. Marshmallow gummi bears candy.",
  "Sesame snaps chocolate cake cake. Macaroon chupa chups dessert sweet roll. Marshmallow gummi bears candy.Sesame snaps chocolate cake cake. Macaroon chupa chups dessert sweet roll.",
  "test",
]

const hoverCard = {
  backgroundColor: "tomato",
  color: "white",
}

const cardStyles = {
  borderRadius: "10px",
  margin: "4px",
  border: "solid black 3px",
  width: "calc(-14px + calc(100%/3))",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  ":hover": hoverCard,
}

export function GalleryPageTemplate({ gallery }: any) {
  console.log("gallery:", gallery)
  const childElements = gallery.map((galleryItem: any, i) => (
    <div sx={cardStyles}>
      <p>Title</p>
      <Img
        style={{ borderRadius: "10px" }}
        fixed={galleryItem.galleryImage.childImageSharp.fixed}
      />
      <p style={{ padding: 5 }}>{dummyTest[i]}</p>
    </div>
  ))
  return (
    <div>
      <h1>lesggo</h1>
      <Masonry>{childElements}</Masonry>
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
              fixed(width: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
