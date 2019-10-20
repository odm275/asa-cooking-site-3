/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}

const activeNavItemStyles = {
  backgroundColor: "primary",
  color: "white",
  borderRadius: "5px",
}

const navItem = {
  backgroundColor: "background",
  color: "secondary",
  px: 2,
  py: 2,
  textDecoration: "none",
  ":hover": activeNavItemStyles,
  "&.active": activeNavItemStyles,
}

function Header() {
  const {
    markdownRemark: {
      frontmatter: { logo },
    },
  } = useStaticQuery(graphql`
    query SiteLogo {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          logo {
            childImageSharp {
              fixed(width: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  const items = [
    { description: "Home", to: "" },
    { description: "Services", to: "services" },
    { description: "Gallery", to: "gallery" },
  ]
  return (
    <nav sx={nav}>
      <Link to="/">
        <Img
          fixed={logo.childImageSharp.fixed}
          sx={{
            width: 50,
            height: 50,
            margin: 0,
            padding: 0,
          }}
        />
      </Link>
      {items.map(({ to, description }, i) => (
        <Link
          key={`${description.toLowerCase()}-${i}`}
          to={`/${to}`}
          sx={navItem}
          activeClassName="active"
        >
          {description}
        </Link>
      ))}
      <a sx={navItem} href="#">
        asa@email.com
      </a>
    </nav>
  )
}

export default Header
