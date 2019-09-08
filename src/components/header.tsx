import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Nav = styled.nav`
 display:flex;
 justify-content: space-between;
`

const Logo = styled.img`
  width:50px;
  height:50px;
  margin:0;
  padding:0;
`

// Type of props going into this component
interface Props {
  logo: string
}

const Header: React.FC<Props> = ({logo}) => (
  <Nav>
    <Link to="/"><Logo src={logo}/></Link>
    <Link to="/">Home</Link>
    <Link to="/services">Services</Link>
    <Link to="/gallery">Gallery</Link>
  </Nav>
)

export default Header
