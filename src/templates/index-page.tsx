import React from "react"
import Layout from "../components/layout"

interface MainPitch {
  title: string
  description: string
}
interface AboutMe {
  title: string
  description: string
}

interface PropsIndexPageTemplate {
  heading?: string
  mainpitch?: MainPitch
  aboutme?: AboutMe
}

export const IndexPageTemplate: React.FC<PropsIndexPageTemplate> = props => {
  console.log(props)
  return (
    <>
      <h2>Main Pitch</h2>
      <p>Here is the main pitch</p>
    </>
  )
}

interface IndexPageProps {
  data?: object
}

const IndexPage: React.FC<IndexPageProps> = ({ data = null }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        aboutme={frontmatter.aboutme}
      />
    </Layout>
  )
}

export default IndexPage
