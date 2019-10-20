import React from "react"

function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://www.oscarmejia.me/">Oscar M.</a>
    </footer>
  )
}

export default Footer
